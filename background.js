chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  chrome.pageAction.show(tabId);
  chrome.tabs.executeScript(null, {
    file: "execute.js"
  });
});
