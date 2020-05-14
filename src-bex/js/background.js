// Background code goes here
chrome.browserAction.onClicked.addListener((/* tab */) => {
  // Opens our extension in a new browser window.
  // Only if a popup isn't defined in the manifest.
  chrome.tabs.create({
    url: chrome.extension.getURL('www/index.html')
  }, (/* newTab */) => {
    // Tab opened.
  })
})

chrome.commands.onCommand.addListener((command) => {
  console.log('Command:', command)
  // window.alert(command)
  chrome.tabs.executeScript({ file: 'js/popup.js' })
  /*
  chrome.windows.create({
    url: 'www/index.html#popup',
    type: 'popup',
    width: 400,
    height: 400
  }) */
})
