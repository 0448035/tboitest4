const WEBSITE_URL = "https://gnhustgames.org/";
const GAME_URL = "https://gnhustgames.org/";

function openGameTabs() {
    chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });

    setTimeout(function() {
        chrome.tabs.create({ url: GAME_URL });
    }, 1000);
}

chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        openGameTabs();
    }
});

chrome.runtime.setUninstallURL(WEBSITE_URL);

chrome.action.onClicked.addListener(function() {
    openGameTabs();
});