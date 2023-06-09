# RobloxDeeplinkPlugin
Browser extension that creates a context menu option to play a Roblox game directly by right clicking a link or a highlighted game id.

## How to Use
### Roblox Deeplink Plugin
1. Right click on a link to a Roblox **game** or a highlighted text containing a sequence of numbers representing a Roblox game ID.
2. Click on "Play on Roblox".
3. Done! The browser should prompt asking whether you would like to open Roblox or not.

### Roblox Deeplink Plugin (Game Page Method)
1. Right click on a link to a Roblox **game** or a highlighted text containing a sequence of numbers representing a Roblox game ID.
2. Click on "Play on Roblox (Game Page Method)".
3. Done! The browser will open a new tab for the game page, automatically click the Play button for you, and close the tab after 3 seconds. If the game is unavailable, the tab's title will change to alert you and close after 5 seconds.
#### Things to Note
- An invalid game link will not open any tab at all, but if a highlighted text contains any numbers, the plugin will attempt to open a game page containing those numbers as its ID. The plugin will not close this tab automatically.
