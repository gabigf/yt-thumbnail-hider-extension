// Function to toggle thumbnail visibility based on user setting
const updateThumbnailsVisibility = (hideThumbnails) => {
  const thumbnails = document.querySelectorAll(
    '.yt-core-image--loaded'
  );
  thumbnails.forEach((thumb) => {
    thumb.style.visibility = hideThumbnails ? 'hidden' : 'visible';
  });
};

// Fetch the current state from storage and apply the visibility
chrome.storage.sync.get('hideThumbnails', (data) => {
  updateThumbnailsVisibility(data.hideThumbnails);
});

// Observe DOM changes to hide/show newly loaded thumbnails dynamically
const observer = new MutationObserver(() => {
  chrome.storage.sync.get('hideThumbnails', (data) => {
    updateThumbnailsVisibility(data.hideThumbnails);
  });
});
observer.observe(document.body, { childList: true, subtree: true });
