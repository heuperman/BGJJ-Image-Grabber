console.log("BadGirlJenJen's Image Grabber");

chrome.runtime.onMessage.addListener(showSrc);

function showSrc(message, sender, sendResponse) {
  if (message.text === 'show images') {
    var images = document.images;
    var imageList = [];
    var alt;
    var i;
    for(i = 0; i < images.length; i++) {
      var image = images[i];
      if(image.alt === "") {
        alt = "unnamed"
      } else {
        alt = image.alt
      }
      if(image.src != "") {
        imageList.push(
          '<a href="' + image.src + '" download="' + image.alt + '">' +
          '<img src="' + image.src + '" alt=' + alt + '></a><br>' +
          '<p><b>' + alt + '</b>: ' + image.naturalWidth + ' x ' + image.naturalHeight + '</p>'
        );
      }
    }
    document.head.innerHTML = '';
    document.body.innerHTML = imageList.join('');
  }
}
