document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.sync.get('translationHistory', function (data) {
        const history = data.translationHistory || [];
        const historyList = document.getElementById('translationHistory');

        if (history.length === 0) {
            historyList.innerHTML = '<li>No translation history yet</li>';
        } else {
            history.forEach(function (entry) {
                const listItem = document.createElement('li');
                listItem.textContent = `${entry.original} => ${entry.translated}`;
                historyList.appendChild(listItem);
            });
        }
    });
});
