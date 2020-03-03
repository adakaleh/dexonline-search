// cand background.js cere textul selectat, trimite-i-l
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request === 'selectionText')
		sendResponse(window.getSelection().toString());
});
