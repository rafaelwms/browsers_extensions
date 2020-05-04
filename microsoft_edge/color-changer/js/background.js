// listen for sendMessage() from content script
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        // set the icon for the browser action from sendMessage() in content script
        chrome.browserAction.setIcon({
            path: {
                "20": request.iconPath20,
                "40": request.iconPath40
            },
            tabId: sender.tab.id
        });
        // disable browser action for the current tab
        chrome.browserAction.disable(sender.tab.id);
    });