console.log("BadGirlJenJen's Image Grabber");

chrome.runtime.onMessage.addListener(showSrc);

function showSrc(message, sender, sendResponse) {
  if (message.text === "show images") {
    var images = document.images;
    var i;
    for(i = 0; i < images.length; i++) {
      console.log(images[i].src);
    }
  }
}

// show all images
// show metadata
// when clicking on image it downloads
