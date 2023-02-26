const img = document.getElementById("details-img");
const img2 = document.getElementById("details-img2");
const developer = document.querySelector(".developer");
const genre = document.querySelector(".genre");
const platform = document.querySelector(".platform");
const title = document.querySelector(".details-title")
const publisher = document.querySelector(".publisher");
const gameDescription = document.querySelector(".game-description");
const downloadGamebtn = document.querySelector(".game-download-button");
const playButton = document.getElementById("play-button");


window.onload = function () {
  var params = new URLSearchParams(window.location.search);
    var srcParam = params.get("src");
    var genreParam = params.get("genre");
    var platformParam = params.get("platform");
    var developerParam = params.get("developer");
    var publisherParam = params.get("publisher");
    var titleParam = params.get("title");
    var descriptionParam = params.get("description");
    var gamesite = params.get("gamesite");
    img.src = srcParam;
    img2.src = srcParam;
    title.textContent = titleParam + " Details";
    genre.textContent += " " + genreParam;
    platform.textContent += " " + platformParam;
    developer.textContent += " " + developerParam;
    publisher.textContent += " " + publisherParam;
    gameDescription.textContent = descriptionParam;
    downloadGamebtn.textContent = "Download" + " " + titleParam + " " + "Now";
    downloadGamebtn.addEventListener('click', function () {
        window.location.href = gamesite;
    })
    playButton.addEventListener('click', function () {
        window.location.href = gamesite
    })
};
