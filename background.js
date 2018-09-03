chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  var msg = {
    text: "show images"
  };

  chrome.tabs.sendMessage(tab.id, msg);
}
