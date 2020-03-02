browser.contextMenus.create({
	'title': 'Caută pe &dexonline.ro: "%s"',
	'contexts': ['selection'],
	'onclick': (event) => browser.tabs.create({ url: 'https://dexonline.ro/definitie/' + event.selectionText }),
});
