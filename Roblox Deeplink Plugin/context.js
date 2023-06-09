function playGame(info)
{
	let text = info.selectionText;
	let link = info.linkUrl;
		
	let gameId = text ? text.match(/\d+/) : null;
	if (link) {
		let getId = link.match(/roblox.com[\/]games[\/](\d+)/);
		if (getId && getId.length > 1) {
			gameId = getId[1];
		}
	}
	const deeplinkHeader = "roblox://placeid=";
	
	if (gameId) {
		chrome.tabs.create({
			url: deeplinkHeader + gameId
		});
	}
}

chrome.contextMenus.onClicked.addListener(function(info) {
	let contextId = info.menuItemId;
	if (contextId == "robloxDeepLink") {
		playGame(info);
	}
})

chrome.contextMenus.create({
	title: "Play on Roblox",
	contexts:["selection", "link"],
	id: "robloxDeepLink"
});

