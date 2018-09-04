console.log("BadGirlJenJen's Image Grabber");

chrome.runtime.onMessage.addListener(showSrc);

function showSrc(message, sender, sendResponse) {
  if (message.text === "show images") {
    var images = document.images;
    var imageList = [];
    var i;
    for(i = 0; i < images.length; i++) {
      console.log(images[i].src);
      imageList.push(
        "<img src=" + images[i].src + " alt=" + images[i].alt + "><br>"
      );
    }
    document.head.innerHTML = "";
    document.body.innerHTML = imageList;
  }
}

// show metadata
// when clicking on image it downloads
