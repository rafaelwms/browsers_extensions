// get the URL of the page
var url = document.location.href;

// if not on a rafaelwms.com.br domain
if (url.indexOf("//rafaelwms.com.br") === -1) {
    // send inactive icons
    chrome.runtime.sendMessage({
        "iconPath20": "images/inactive20.png",
        "iconPath40": "images/inactive40.png"
    });
}