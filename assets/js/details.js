

// function showDetails(src) {
//     detalsImage.src = src;
// }
window.onload = function () {
    var img = document.getElementById("details-img");
     var img2 = document.getElementById("details-img2");
  var params = new URLSearchParams(window.location.search);
  var src = params.get("src");
  if (src) {
      img.src = src;
      img2.src = src
  } else {
      img.src = "https://www.freetogame.com/g/540/thumbnail.jpg";
  }
};
