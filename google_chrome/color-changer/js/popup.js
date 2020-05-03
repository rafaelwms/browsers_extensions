// get the buttons by id
const btnDark = document.getElementById('dark');
const btnCornsilk = document.getElementById('cornsilk');

// use tabs.insertCSS to change header color on button click
// dark
btnDark.onclick = () => {
  chrome.tabs.insertCSS({code: "body { background: black !important; }"});
};

// cornsilk
btnCornsilk.onclick = () => {
  chrome.tabs.insertCSS({code: "body { background: cornsilk !important; }"});
};