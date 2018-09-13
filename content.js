console.log("BadGirlJenJen's Image Grabber");

chrome.runtime.onMessage.addListener(showSrc);

function showSrc(message, sender, sendResponse) {
  if (message.text === "show images") {
    var images = document.images;
    var imageList = [];
    var i;
    for(i = 0; i < images.length; i++) {
      var image = images[i];
      imageList.push(
        "<a href=" + image.src + " download=" + image.alt + ">" +
        "<img src=" + image.src + " alt=" + image.alt + "></a><br>" +
        "<p>" + image.alt + ": " + image.width + " x " + image.height + "</p>"
      );
    }
    document.head.innerHTML = "";
    document.body.innerHTML = imageList.join("");
  }
}
