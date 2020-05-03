// get the buttons by id
const btndark = document.getElementById('dark');
const btnamarelado = document.getElementById('amarelado');
const btnreset = document.getElementById('reset');

// use tabs.insertCSS to change header color on button click

// aliceblue
btndark.onclick = () => {
  chrome.tabs.insertCSS({code: "body { background: black !important; }"});
};

// cornsilk
btnamarelado.onclick = () => {
  chrome.tabs.insertCSS({code: "body { background: cornsilk !important; }"});
};

// back to original
btnreset.onclick = () => {
  chrome.tabs.insertCSS({code: "body { background: none !important; }"});
};