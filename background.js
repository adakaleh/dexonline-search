// click-dreapta
browser.contextMenus.create({
	'title': 'Caută pe &dexonline.ro: "%s"',
	'contexts': ['selection'],
	'onclick': (event) => browser.tabs.create({ url: 'https://dexonline.ro/definitie/' + event.selectionText }),
});

// Alt+Shift+D
browser.commands.onCommand.addListener(function(command){
	if (command === 'cauta') {
		browser.tabs.executeScript({
			code: "browser.runtime.sendMessage(window.getSelection().toString());",
			allFrames: true // TODO: doesn't seem to work on iframes that were added with javascript
		});
	}
});
browser.runtime.onMessage.addListener(selectionText => {
	if (selectionText)
		browser.tabs.create({ url: 'https://dexonline.ro/definitie/' + selectionText });
});
