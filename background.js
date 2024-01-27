chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
    if (request.action === 'translate') {
        try {
            const res = await fetch("https://libretranslate.com/translate", {
                method: "POST",
                body: JSON.stringify({
                    q: request.text,
                    source: "auto",
                    target: "en",
                    format: "text"
                }),
                headers: { "Content-Type": "application/json" }
            });

            const translationResult = await res.json();
            sendResponse({ translation: translationResult.translatedText });

        } catch (error) {
            console.error("Translation error:", error);
            sendResponse({ translation: null });
        }
    } else if (request.action === 'getTranslation') {
        // Simulated translation using a dictionary (replace with your logic)
        const dictionary = {
            "hello": "Hola",
            "world": "Mundo"
            // Add more words and translations as needed
        };

        const translation = dictionary[request.text] || null;
        sendResponse({ translation: translation });
    }
});
