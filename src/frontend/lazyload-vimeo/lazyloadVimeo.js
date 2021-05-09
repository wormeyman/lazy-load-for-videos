import {
  init,
  resizeVideo,
  setBackgroundImage,
  inViewOnce,
} from '../shared/video';
import createElements from '../shared-utils/createElements';
import findElements from '../shared-utils/findElements';
import queryHashToString from '../shared-utils/queryHashToString';

/*
 * Lazy Load Vimeo
 * by Kevin Weber (www.kweber.com)
 */

// Classes
const classPreviewVimeo = 'preview-vimeo';

let pluginOptions;
const defaultPluginOptions = {
  buttonstyle: '',
  playercolour: '',
  loadthumbnail: true,
  thumbnailquality: false,
  // callback: null, // <- Currently not supported
};

function removePlayerControls(element) {
  element.classList.remove(classPreviewVimeo);
}

function vimeoUrl(videoId) {
  return `https://player.vimeo.com/video/${videoId}`;
}

// Remove dots and hashs from a string
function filterDotHash(variable) {
  const filterdothash = variable.toString().replace(/[.#]/g, '');
  return filterdothash;
}

function processThumbnail(url) {
  if (!url) return '';

  // If a URL looks like 'https://i.vimeocdn.com/video/12345_295x166.jpg',
  // this RegExp returns '_295x166.', otherwise null.
  const sizeString = url.match(/_\d+x\d+\./);
  if (sizeString) {
    const [width, height] = sizeString[0].match(/\d+/g); // => [295, 166]

    // Sizes we support:
    //  Basic (standard) -> 640
    //  Medium (higher quality) -> 1280
    //  Max -> Don't set size in URL
    //
    // Based on: https://developer.vimeo.com/api/oembed/videos
    // "The width of the video's thumbnail image in pixels, settable to the following values:
    //  100, 200, 295, 640, 960, and 1280. For any other value, we return a thumbnail at the
    //  next smallest width."
    const urls = {
      // Note: The keys in this map ("basic" etc.) need to directly map to the values set
      // in the settings for "thumbnailquality"
      basic: url.replace(sizeString, `_${640}x${Math.round(height * (640 / width))}.`),
      medium: url.replace(sizeString, `_${1280}x${Math.round(height * (1280 / width))}.`),
      max: url.replace(sizeString, '.'),
    };

    return urls[pluginOptions.thumbnailquality] || urls.basic;
  }

  return url;
}

function vimeoLoadingThumb(videoLinkElement, id) {
  const playButtonDiv = createElements(
    '<div aria-hidden="true" class="lazy-load-div"></div>',
  );
  videoLinkElement.appendChild(playButtonDiv);

  if (window.llvConfig.vimeo.loadthumbnail) {
    const videoThumbnail = processThumbnail(videoLinkElement.getAttribute(
      'data-video-thumbnail',
    ));

    if (videoThumbnail) {
      inViewOnce(findElements(`[id="${id}"]`), (element) => setBackgroundImage(element, videoThumbnail));
    }
  }

  if (window.llvConfig.vimeo.show_title) {
    const videoTitle = videoLinkElement.getAttribute('data-video-title');
    const showTitle = window.llvConfig.vimeo.show_title && videoTitle.length > 0;
    const info = createElements(
      `<div aria-hidden="true" class="lazy-load-info">
        <div class="titletext vimeo">${videoTitle}</div>
      </div>`,
    );
    if (showTitle) {
      videoLinkElement.appendChild(info);
    }
  }

  if (pluginOptions.buttonstyle) {
    videoLinkElement.classList.add(pluginOptions.buttonstyle);
  }
}

function vimeoCreateThumbProcess(videoLinkElement) {
  const previewItem = videoLinkElement;
  const videoId = previewItem.getAttribute('id');

  // Remove no longer needed title (title is necessary for preview in text editor)
  previewItem.innerHTML = '';
  vimeoLoadingThumb(previewItem, videoId);

  const showOverlayText = pluginOptions.overlaytext.length > 0;
  const videoInfoExtra = createElements(
    `<div aria-hidden="true" class="lazy-load-info-extra">
      <div class="overlaytext">${pluginOptions.overlaytext}</div>
    </div>`,
  );
  if (showOverlayText) {
    previewItem.parentNode.insertBefore(videoInfoExtra, null);
  }
}

export function getEmbedUrl({ videoId, queryParams }) {
  return `${vimeoUrl(
    videoId,
  )}?${queryHashToString(queryParams)}`;
}

export function parseOriginalUrl(url) {
  const { search } = new URL(url);
  if (!search) return { queryParams: {} };
  const queryParams = search.replace('?', '').split('&').reduce((combined, nextParam) => {
    // Example nextParam: random=string
    const [name, value] = nextParam.split('=');
    // eslint-disable-next-line no-param-reassign
    combined[name] = value;
    return combined;
  }, {});
  return { queryParams };
}

function vimeoThumbnailEventListeners(videoLinkElement) {
  videoLinkElement.addEventListener('click', (event) => {
    const eventTarget = event.currentTarget;
    event.preventDefault();

    if (eventTarget.tagName.toLowerCase() !== 'a') {
      return;
    }

    const videoId = eventTarget.getAttribute('id');
    const videoHref = eventTarget.getAttribute('href');
    const { queryParams } = parseOriginalUrl(videoHref);

    removePlayerControls(eventTarget);

    const combinedQueryParams = {
      ...queryParams,
      autoplay: 1, // Always autoplay video once we load the iframe
    };

    console.log(pluginOptions);
    if (pluginOptions.playercolour) {
      pluginOptions.playercolour = filterDotHash(pluginOptions.playercolour);
      combinedQueryParams.color = pluginOptions.playercolour;
    }

    const videoIFrame = createElements(
      `<iframe src="${getEmbedUrl({ videoId, queryParams: combinedQueryParams })}" style="height:${parseInt(
        eventTarget.clientHeight,
        10,
      )}px;width:100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen autoPlay allowFullScreen allow=autoplay></iframe>`,
    );

    const { parentNode } = eventTarget;
    if (parentNode) {
      parentNode.replaceChild(videoIFrame, eventTarget);
    }
  }, true);
}

function load({ rootNode }) {
  findElements(`.${classPreviewVimeo}`, rootNode).forEach((domItem) => {
    vimeoCreateThumbProcess(domItem);
    resizeVideo(domItem.parentNode);
    vimeoThumbnailEventListeners(domItem);
  });
}

const lazyloadVimeo = (options) => {
  pluginOptions = {
    ...defaultPluginOptions,
    ...options,
  };

  init({
    load,
    pluginOptions,
  });
};

export default lazyloadVimeo;
