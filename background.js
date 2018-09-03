chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  chrome.tabs.query({
    "active": true,
    "currentWindow": true
  },
  function(tabs) {
    chrome.tabs.create({
      "url": tabs[0].url
    }, function(tab) {
      chrome.tabs.onUpdated.addListener(function (tabId, info) {
        if (info.status === "complete") {
          console.log(tab);
          var msg = { text: "show images" };
          chrome.tabs.sendMessage(tab.id, msg);
        }
      });
    });
  });
}
