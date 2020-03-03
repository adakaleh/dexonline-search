// click-dreapta
browser.contextMenus.create({
	'title': 'Caută pe &dexonline.ro: "%s"',
	'contexts': ['selection'],
	'onclick': (event) => browser.tabs.create({ url: 'https://dexonline.ro/definitie/' + event.selectionText }),
});

// Alt+Shift+D
browser.commands.onCommand.addListener(function(command){
	if (command === 'cauta') {
		// get current tab
		browser.tabs.query({
			currentWindow: true,
			active: true
		}).then((tabs) => {
			// ask it for the selected text
			browser.tabs.sendMessage(
				tabs[0].id,
				'selectionText'
			).then(selectionText => {
				if (selectionText)
					browser.tabs.create({ url: 'https://dexonline.ro/definitie/' + selectionText });
			});
		});
	}
});
