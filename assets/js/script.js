const popularCategory = document.getElementById("popular-category");
const strategy = document.getElementById("strategy");
const shooter = document.getElementById("shooter");
const sports = document.getElementById("sports");
const social = document.getElementById("social");
const popularHeader = document.querySelector(".popular-live-stream");
const categories = [strategy, shooter, sports, social]
const discoverAllButton = document.querySelector(".discover-all-btn");
let firstEight = [];
const featuredCarousel = document.querySelector(".carousel1");

// create the carousel item card for the featured games
function featuredGames(game) {
  // Create the card wrapper
  let cardWrapper = document.createElement("div");
  cardWrapper.classList.add("me-2", "ms-2");

  // Create the card
  let featuredCard = document.createElement("div");
  featuredCard.classList.add("card", "streaming-card", "bg-dark", "rounded-top-5");

  // Create the card image
  let cardImg = document.createElement("img");
  cardImg.classList.add("card-img", "rounded-top-4");
  cardImg.src = game.thumbnail;
  // cardImg.style.height = "300px";

// Add Image to card
  featuredCard.appendChild(cardImg);

  // Create streaming button
  let streamingButton = document.createElement("button");
  streamingButton.classList.add("streaming-button", "rounded-pill", "btn", "btn-dark");
  streamingButton.innerText = "4K Streaming"
  // Add button to card
  featuredCard.appendChild(streamingButton);

  // Create game title and stars div
  let titleDiv = document.createElement("div");
  titleDiv.classList.add("card-title", "d-flex", "mt-2");
  let gameTitle = document.createElement("h5");
  gameTitle.classList.add("text-light");
  gameTitle.innerText = game.title;
  titleDiv.appendChild(gameTitle);
  let star = document.createElement("i");
  star.classList.add("fa-solid", "fa-star", "text-warning", "ms-auto");
  titleDiv.appendChild(star);
  let starRating = document.createElement("h6")
  starRating.classList.add("text-light", "ms-2");
  starRating.innerText = "4.7";
  titleDiv.appendChild(starRating);
  featuredCard.appendChild(titleDiv);

  // Create the download info div
  let downloadInfoDiv = document.createElement("div");
  downloadInfoDiv.classList.add("card-title", "d-flex");
  let numbOfDownloads = document.createElement("h5");
  numbOfDownloads.classList.add("text-secondary");
  numbOfDownloads.innerText = "36K Downloads";
  downloadInfoDiv.appendChild(numbOfDownloads);
  let downloadIcon = document.createElement("i");
  downloadIcon.classList.add("fa-sharp", "fa-solid", "ms-auto", "fa-download");
  downloadInfoDiv.appendChild(downloadIcon);
  let downloadAbbr = document.createElement("p");
  downloadAbbr.classList.add("text-light", "ms-2");
  downloadInfoDiv.appendChild(downloadAbbr);
  featuredCard.appendChild(downloadInfoDiv);
  cardWrapper.appendChild(featuredCard);
  featuredCarousel.appendChild(cardWrapper)
}
games.forEach(game => {
  featuredGames(game)
})

// Create a card for the game element 
function createGameCard(game) {
  // create the root div with class "col-lg-3"
  let rootDiv = document.createElement("div");
  rootDiv.classList.add("col-lg-3");
  
  // create the inner div with class "card img-card rounded-5"
  let innerDiv = document.createElement("div");
  innerDiv.classList.add("card", "img-card", "rounded-5");
  
  // create the image element and set its attributes
  let img = document.createElement("img");
  img.src = game.thumbnail;
  img.alt = "";
  img.classList.add("card-img");
  
  // create the first button and anchor element
  let firstBtn = document.createElement("button");
  firstBtn.classList.add("btn", "btn-danger", "px-3", "rounded-pill", "overlay-btn1", "overlay-btn");
  firstBtn.innerText = "Play"
  let firstAnchor = document.createElement("a");
  firstAnchor.href = game.game_url;
  firstAnchor.target = "_blank";
  firstAnchor.appendChild(firstBtn);
  
  // create the second button and anchor element
  let secondBtn = document.createElement("button");
  secondBtn.classList.add("btn", "btn-danger", "px-3", "rounded-pill", "overlay-btn2", "overlay-btn");
  let secondAnchor = document.createElement("a");
  secondAnchor.href = game.freetogame_profile_url;
  secondAnchor.target = "_blank";
  let secondBtnText = document.createElement("i");
  secondBtnText.classList.add("bi", "bi-eye-fill", "text-light");
  secondBtnText.textContent += "4.5K"
  secondBtn.appendChild(secondBtnText);
  secondAnchor.appendChild(secondBtn);
  
  // create the third button and anchor element
  let thirdBtn = document.createElement("button");
  thirdBtn.classList.add("btn", "btn-danger", "pe-5", "ps-2", "rounded-pill", "overlay-btn3", "overlay-btn");
  let thirdAnchor = document.createElement("a");
  thirdAnchor.href = game.game_url;
  thirdAnchor.target = "_blank";
  let thirdBtnText = document.createElement("i");
  thirdBtnText.classList.add("bi", "bi-controller", "me-5", "ms-2", "text-light", "me-5");
  thirdBtn.appendChild(thirdBtnText);
  thirdAnchor.appendChild(thirdBtn);
  
  // add all the elements to the inner div
  innerDiv.appendChild(img);
  innerDiv.appendChild(firstAnchor);
  innerDiv.appendChild(secondAnchor);
  innerDiv.appendChild(thirdAnchor);

  // Create row for the down content
  let descriptionRow = document.createElement("div");
  descriptionRow.classList.add("row");

  // Create profile image column
  let profileColumn = document.createElement("div");
  profileColumn.classList.add("col-lg-2");

  // Create profile image
  let profileImg = document.createElement("img");
  profileImg.src = game.thumbnail;
  profileImg.alt = "";
  profileImg.classList.add("rounded-circle");
  profileImg.style.width = "36px";
  profileImg.style.height = "36px";
  profileColumn.appendChild(profileImg);
   descriptionRow.appendChild(profileColumn);

  // Create the title column
  let titleColumn = document.createElement("div");
  titleColumn.classList.add("col-lg-10");

  // Create the title wrapper
  let titleDiv = document.createElement("div");
  titleDiv.classList.add("text-start", "pe-auto");

  // Create the h6 element for the title
  let titleText = document.createElement("h6");
  // Create a strong element for the title
  let strong = document.createElement("strong");
  strong.innerText = game.title;
  titleText.appendChild(strong);
  titleDiv.appendChild(titleText);
  titleColumn.appendChild(titleDiv);
  descriptionRow.appendChild(titleColumn);

  // Crete the short description div
  let shortDescriptionDiv = document.createElement("div");
  shortDescriptionDiv.classList.add("text-center");

  // Create the description text
  let descriptionText = document.createElement("h4");
  descriptionText.classList.add("text-light");
  descriptionText.innerText = game.short_description;
  
  shortDescriptionDiv.appendChild(descriptionText);
  descriptionRow.appendChild(shortDescriptionDiv);
  rootDiv.appendChild(innerDiv);
  rootDiv.appendChild(descriptionRow);
  popularCategory.appendChild(rootDiv);
}

// Default games to load on the popular games section
function populateDefaultGames() {
    games.forEach((game) => {
      if (firstEight.length === 8) {
        return;
      }
      firstEight.push(game);
    });
    console.log(firstEight);
    firstEight.forEach((game) => {
      createGameCard(game);
    });}
populateDefaultGames();
// Update content based on the category selected
categories.forEach((category) => {
  category.addEventListener("click", function () {
    popularCategory.innerHTML = "";
    popularHeader.textContent = ` ${category.textContent} Games`;
    popularHeader.style.color = "deeppink";
    games.forEach((game) => {
      if (game.genre === category.textContent) {
        createGameCard(game)
      }
    });
  });
});
// Load all games when the discover all button is clicked
discoverAllButton.addEventListener("click", function () {
  popularCategory.innerHTML = "";
  games.forEach((game) => {
    createGameCard(game)
  });
});

