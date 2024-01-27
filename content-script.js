let popup = null;

document.addEventListener('mouseup', function (event) {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText !== '') {
        translateAndShowPopup(event, selectedText);
    } else {
        hidePopup();
    }
});

function translateAndShowPopup(event, text) {
    chrome.runtime.sendMessage({ action: 'translate', text: text }, function (response) {
        if (response.translation) {
            createOrUpdatePopup(event.pageX, event.pageY, `${text}: ${response.translation}`);
        } else {
            hidePopup();
        }
    });
}

function createOrUpdatePopup(x, y, content) {
    if (!popup) {
        popup = document.createElement('div');
        popup.style.position = 'absolute';
        popup.style.background = 'white';
        popup.style.border = '1px solid #ccc';
        popup.style.padding = '10px';
        popup.style.zIndex = '9999';
        document.body.appendChild(popup);
    }

    popup.innerHTML = content;
    popup.style.left = (x + 10) + 'px';
    popup.style.top = (y + 10) + 'px';
}


function hidePopup() {
    if (popup) {
        document.body.removeChild(popup);
        popup = null;
    }
}
