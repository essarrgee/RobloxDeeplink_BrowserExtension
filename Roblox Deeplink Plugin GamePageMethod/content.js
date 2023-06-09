var currentURL = window.location.href

if (currentURL) {
	currentAssetID = currentURL.match(/games\/\d+/);
	currentAssetID = currentAssetID ? currentAssetID[0] : null;
}

window.addEventListener("load", function() {
	chrome.storage.local.get("robloxDeeplinkCurrentId", function(data) {
		if (currentAssetID && data && data["robloxDeeplinkCurrentId"] && 
		currentAssetID == "games/"+data["robloxDeeplinkCurrentId"]) {
			const observer = new MutationObserver(function(mutations) {
				let playButton = document.querySelector('[data-testid="play-button"]');
				let playFail = document.querySelector('[data-testid="play-error"]');
				if (playButton) {
					playButton.click();
					observer.disconnect();
					setTimeout(function() {
						window.close();
					}, 3000);
				}
				if (playFail) {
					document.title = "❌" + playFail.innerHTML;
					setTimeout(function() {
						window.close();
					}, 5000);
				}
			});
			observer.observe(document.body, {
				childList: true,
				subtree: true
			});
		}
		chrome.storage.local.set({"robloxDeeplinkCurrentId" : null}, function() {});
	});
});
