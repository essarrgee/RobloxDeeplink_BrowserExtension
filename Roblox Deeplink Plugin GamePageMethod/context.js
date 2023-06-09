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
	const deeplinkHeader = "https://roblox.com/games/";
	
	if (gameId) {
		chrome.storage.local.set({"robloxDeeplinkCurrentId" : gameId}, function() {});
		
		chrome.tabs.create({
			url: deeplinkHeader + gameId,
			active: false
		});
	}
}

chrome.contextMenus.onClicked.addListener(function(info) {
	let contextId = info.menuItemId;
	if (contextId == "robloxDeepLink2") {
		playGame(info);
	}
})

chrome.contextMenus.create({
	title: "Play on Roblox (Game Page Method)",
	contexts:["selection", "link"],
	id: "robloxDeepLink2"
});

