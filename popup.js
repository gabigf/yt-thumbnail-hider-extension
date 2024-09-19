document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.getElementById('toggleSwitch');

  // Load the current state from storage and update the toggle
  chrome.storage.sync.get('hideThumbnails', (data) => {
    toggleSwitch.checked = data.hideThumbnails || false;
  });

  // When the user toggles the switch, save the new state
  toggleSwitch.addEventListener('change', () => {
    const hideThumbnails = toggleSwitch.checked;
    chrome.storage.sync.set({ hideThumbnails });
  });
});
