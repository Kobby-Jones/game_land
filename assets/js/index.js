//************ * HOME PAGE *********
const homeMostPopularRow = document.querySelector(".home-most-popular-row");
let selectedGames = [];
const libraryImage1 = document.querySelector(".library-img-1");
const libraryImage2 = document.querySelector(".library-img-2");
const libraryImage3 = document.querySelector(".library-img-3");
const libraryTitle1 = document.getElementById("library-title-1");
const libraryTitle2 = document.getElementById("library-title-2");
const libraryTitle3 = document.getElementById("library-title-3");
const libraryDeveloper1 = document.getElementById("library-developer-1");
const libraryDeveloper2 = document.getElementById("library-developer-2");
const libraryDeveloper3 = document.getElementById("library-developer-3");
const libraryDate1 = document.getElementById("library-date-1");
const libraryDate2 = document.getElementById("library-date-2");
const libraryDate3 = document.getElementById("library-date-3");
const viewYourLibraryButton = document.querySelector(".view-library-btn");

let gameLibrary1 = games[Math.floor(Math.random() * games.length)]
let gameLibrary2 = games[Math.floor(Math.random() * games.length)]
let gameLibrary3 = games[Math.floor(Math.random() * games.length)]

libraryImage1.src = gameLibrary1.thumbnail;
libraryTitle1.innerText = gameLibrary1.title;
libraryDeveloper1.innerText = gameLibrary1.developer;
libraryDate1.innerText = gameLibrary1.release_date;
libraryImage2.src = gameLibrary2.thumbnail;
libraryTitle2.innerText = gameLibrary2.title;
libraryDeveloper2.innerText = gameLibrary2.developer;
libraryDate2.innerText = gameLibrary2.release_date;
libraryImage3.src = gameLibrary3.thumbnail;
libraryTitle3.innerText = gameLibrary3.title;
libraryDeveloper3.innerText = gameLibrary3.developer;
libraryDate3.innerText = gameLibrary3.release_date;

viewYourLibraryButton.addEventListener('click', function () {
    window.location.href = '/browse.html';
});


// crete function for the most popular cards at hte home page
function mostPopularCard(game) {
  let colThree = document.createElement("div");
  colThree.classList.add("col-lg-3");
  let cardDiv = document.createElement("div");
  cardDiv.classList.add(
    "card",
    "individual-popular",
    "py-3",
    "px-3",
    "rounded-5"
  );
  let cardImage = document.createElement("img");
  cardImage.classList.add("card-img", "rounded-3");
  cardImage.src = game.thumbnail;
  cardImage.alt = "";
  cardDiv.appendChild(cardImage);
  let cardTitleDiv = document.createElement("div");
  cardTitleDiv.classList.add("card-title", "d-flex", "mt-2");
  let gameTitle = document.createElement("h5");
  gameTitle.classList.add("text-light");
  gameTitle.innerText = game.title;
  cardTitleDiv.appendChild(gameTitle);
  let star = document.createElement("i");
  star.classList.add("fa-solid", "fa-star", "text-warning", "ms-auto");
  cardTitleDiv.appendChild(star);
  let rateNumb = document.createElement("h6");
  rateNumb.classList.add("text-light", "ms-2");
  rateNumb.innerText = "4.6";
  cardTitleDiv.appendChild(rateNumb);
  cardDiv.appendChild(cardTitleDiv);
  // Crete the developer name and the download under the card
  let developerDiv = document.createElement("div");
  developerDiv.classList.add("card-title", "d-flex");
  let developerName = document.createElement("h5");
  developerName.classList.add("text-secondary");
  developerName.innerText = game.developer;
  developerDiv.appendChild(developerName);
  let downloads = document.createElement("i");
  downloads.classList.add("fa-sharp", "fa-solid", "ms-auto", "fa-download");
  developerDiv.appendChild(downloads);
  let downloadNumber = document.createElement("h6");
  downloadNumber.classList.add("text-light", "ms-2");
  downloadNumber.innerText = "3.6";
  developerDiv.appendChild(downloadNumber);
  cardDiv.appendChild(developerDiv);
  colThree.appendChild(cardDiv);
  homeMostPopularRow.appendChild(colThree);
}

function choosePopular() {
  games.forEach((game) => {
    if (selectedGames.length === 8) {
      return;
    }
    selectedGames.push(game);
  });
  selectedGames.forEach((game) => {
    console.log(game);
    mostPopularCard(game);
  });
}
choosePopular();
