//Whenever the extension is installed, set the URL to my newtab page to avoid JS getting mad
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ redirectUrl: "https://dev.wilburwilliams.uk/newtab" });
});