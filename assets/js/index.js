//************ * HOME PAGE *********
const homeMostPopularRow = document.querySelector(".home-most-popular-row");
let selectedGames = [];

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
