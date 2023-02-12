const popularCategory = document.getElementById("popular-category");
const strategy = document.getElementById("strategy");
const shooter = document.getElementById("shooter");
const sports = document.getElementById("sports");
const social = document.getElementById("social");
const popularHeader = document.querySelector(".popular-live-stream");
const categories = [strategy, shooter, sports, social]
const discoverAllButton = document.querySelector(".discover-all-btn");
let defaultGames = [];
const trendingGame = document.querySelector(".trending-today");
const featuredCarousel = document.querySelector(".carousel1");
const topDownloadGames = document.querySelector(".top-download-games");
const getPackageBtn = document.querySelector(".get-package-btn");
const myModal = document.getElementById("myModal");
const close = document.querySelector(".close");
const detailImag1 = document.querySelector(".details-img-1");
const detailImag2 = document.querySelector(".details-img-2");
const topdownload = document.querySelector(".topdownload");

// detailImag1.src =
//   "https://img.freepik.com/premium-vector/soldier-mascot-logo-esport_142989-291.jpg?size=338&ext=jpg&uid=R92225937&ga=GA1.1.307101144.1675816291&semt=ais";
//   detailImag2.src =
//     "https://img.freepik.com/premium-vector/soldier-mascot-logo-esport_142989-291.jpg?size=338&ext=jpg&uid=R92225937&ga=GA1.1.307101144.1675816291&semt=ais";

getPackageBtn.addEventListener('click', function () {
  myModal.style.display = "block";
});
close.addEventListener('click', function () {
  myModal.style.display = "none";
})
// create the carousel item card for the featured games
function gameCardToRender(game, container) {
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

  // Add Image to card
  featuredCard.appendChild(cardImg);

  // Create streaming button
  let playNowButton = document.createElement("button");
  playNowButton.classList.add("streaming-button", "rounded-pill", "btn", "btn-dark");
  playNowButton.innerText = "Play Now";
  // Add button to card
  featuredCard.appendChild(playNowButton);

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
  container.appendChild(cardWrapper);
  playNowButton.addEventListener("click", function () {
    document.location.href = game.game_url;
  });
}

// Populate featuredCarousel with all the games
games.forEach(game => {
  gameCardToRender(game, featuredCarousel);
})

// Let the trending today generate the game randomly
let trendingToday1 = games[Math.floor(Math.random() * games.length)];
let trendingToday2 = games[Math.floor(Math.random() * games.length)];
gameCardToRender(trendingToday1, trendingGame);
gameCardToRender(trendingToday2, trendingGame);


// Create a card for the game element 
function createGameCard(game, divContainer) {
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
  let eyeButton = document.createElement("a");
  eyeButton.href = "/details.html";
  eyeButton.target = "_blank";
  let secondBtnText = document.createElement("i");
  secondBtnText.classList.add("bi", "bi-eye-fill", "text-light");
  secondBtnText.textContent += "4.5K"
  secondBtn.appendChild(secondBtnText);
  eyeButton.appendChild(secondBtn);
  
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
  innerDiv.appendChild(eyeButton);
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
  divContainer.appendChild(rootDiv);
}

// Default games to load on the popular games section
function populateDefaultGames(numberOfGames) {
    games.forEach((game) => {
      if (defaultGames.length === numberOfGames) {
        return;
      }
      defaultGames.push(game);
    });
    console.log(defaultGames);
    defaultGames.forEach((game) => {
      createGameCard(game, popularCategory);
      
    });}
populateDefaultGames(12);
// Update content based on the category selected
categories.forEach((category) => {
  category.addEventListener("click", function () {
    popularCategory.innerHTML = "";
    popularHeader.textContent = ` ${category.textContent} Games`;
    popularHeader.style.color = "deeppink";
    games.forEach((game) => {
      if (game.genre === category.textContent) {
        createGameCard(game, popularCategory)
      }
    });
  });
});
// Load all games when the discover all button is clicked
discoverAllButton.addEventListener("click", function () {
  popularCategory.innerHTML = "";
  games.forEach((game) => {
    createGameCard(game, popularCategory)
  });
});
function topDownloadFunction() {
  let html = "";
  const viewAllButton = ` <div class="text-center mt-auto pt-4">
          <a href="#popular-category" class="view-all fw-bold mt-3 text-decoration-none scroll-to-section">View All Games</a>
      </div>`;
  
  const topGames = games.slice(4, 8)
  for (const game of topGames) {
     html = ` <div class="row">
        <div class="col-lg-6">
            <div class="card top-download-card bg-dark">
                <img src="${game.thumbnail}" alt="" class="card-img rounded-5 ">
            </div>
        </div>
        <div class="col-lg-6">
            <div class="top-downloaded-title text-center">
                <h5 class="text-light mt-5">${game.title}</h5>
            </div>
            <div class="top-downloaded-title text-center">
                <h5 class="text-secondary">${game.developer}</h5>
            </div>
            <div class="top-downloaded-title d-flex text-start">
                <i class="fa-solid fa-star text-warning me-1 mt-2"></i>
                <h6 class="text-light me-auto mt-2">3.9</h6>
                <i class="fa-sharp fa-solid me-1 mt-2 fa-download"></i>
                <p class="text-light me-auto mt-1">4.6M</p>
                <div class="download-stream rounded-circle p-2 mb-5 text-center">
                    <a href="${game.game_url}" class="text-decoration-none" target="_blank">
                          <i class="fa-sharp fa-solid download-circle  me-1 fa-download" title="Download Game"></i>
                    </a>
                </div>
                
            </div>
        </div>
    </div>
     <div class="line">
          <hr width="100%" class="text-light">
      </div>`;
    topDownloadGames.innerHTML += html;
   
    
  }
    topDownloadGames.innerHTML += viewAllButton;
  
}


topDownloadFunction();