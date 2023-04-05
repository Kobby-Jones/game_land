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
const discoverPopularBtn = document.querySelector(".discover-btn");
const browseNowBtn = document.getElementById("browse-now");
const downloadBtn1 = document.querySelector(".download1");
const downloadBtn2 = document.querySelector(".download2");
const downloadBtn3 = document.querySelector(".download3");

const libraryContainer = document.querySelector('.library-container');

// Create the library game function

function libraryGames(game, container) {
  // Crete the main row
  let library_Row = document.createElement("div");
  library_Row.classList.add("row");
  // Create the image column
  let image_Column = document.createElement("div")
  image_Column.classList.add("col-lg-2");
  // Create the card for the image
  let image_Card = document.createElement("div");
  image_Card.classList.add("card", "bg-dark");
  let library_Image = document.createElement("img");
  library_Image.classList.add("card-img", "rounded-4");
  library_Image.alt = "";
  library_Image.src = game.thumbnail;
  image_Card.appendChild(library_Image);
  image_Column.appendChild(image_Card);
  library_Row.appendChild(image_Column);

  // Create a column for the title and developer
  let title_Developer_Column = document.createElement("div");
  title_Developer_Column.classList.add("col-lg-2");
  let library_Title_div = document.createElement("div");
  library_Title_div.classList.add("title", "text-light", "mt-5", "text-center");
  library_Title_div.innerText = game.title;
  let library_Developer_div = document.createElement("div");
  library_Developer_div.classList.add("text-secondary", "text-center");
  library_Developer_div.innerText = game.developer;
  // Add the title and developer to the column and add the column to the row
  title_Developer_Column.appendChild(library_Title_div);
  title_Developer_Column.appendChild(library_Developer_div);
  library_Row.appendChild(title_Developer_Column);
// Create column for the date added
  let date_Added_Column = document.createElement("div");
  date_Added_Column.classList.add("col-lg-2");
  let date_Added = document.createElement("div");
  date_Added.classList.add("date-added", "text-light", "mt-5", "text-center");
  date_Added.innerText = "Released Date";
  let released_Date = document.createElement("div");
  released_Date.classList.add("release-date", "text-secondary", "text-center");
  released_Date.innerText = game.release_date;
  // Add date to column and add column to row
  date_Added_Column.appendChild(date_Added);
  date_Added_Column.appendChild(released_Date);
  library_Row.appendChild(date_Added_Column);

//  Create Platform column
   let platform_Column = document.createElement("div");
   platform_Column.classList.add("col-lg-2");
   let platform = document.createElement("div");
   platform.classList.add("date-added", "text-light", "mt-5", "text-center");
   platform.innerText = "Platform";
   let platform_Name = document.createElement("div");
   platform_Name.classList.add("release-date", "text-secondary", "text-center");
   platform_Name.innerText = game.platform;
   // Add platform to column and add column to row
   platform_Column.appendChild(platform);
   platform_Column.appendChild(platform_Name);
  library_Row.appendChild(platform_Column);
  
// Create the Genre Column
   let genre_Column = document.createElement("div");
   genre_Column.classList.add("col-lg-2");
   let genre = document.createElement("div");
   genre.classList.add("date-added", "text-light", "mt-5", "text-center");
   genre.innerText = "Genre";
   let genre_Name = document.createElement("div");
   genre_Name.classList.add("release-date", "text-secondary", "text-center");
   genre_Name.innerText = game.genre;
   // Add genre to column and add column to row
   genre_Column.appendChild(genre);
   genre_Column.appendChild(genre_Name);
   library_Row.appendChild(genre_Column);

  // Create download column
  let download_Column = document.createElement("div");
  download_Column.classList.add("col-lg-2");
  let downloadButton = document.createElement("button");
  downloadButton.classList.add("btn", "btn-outline-danger", "rounded-pill", "px-4", "mt-5");
  downloadButton.innerText = "Download";
  downloadButton.setAttribute("target", "_blank");
  downloadButton.onclick = function () {
    goToGamePage(game);
  }
 
  // Add button to culumn and add column to the row
  download_Column.appendChild(downloadButton);
  library_Row.appendChild(download_Column);
  container.appendChild(library_Row);

  // Create a line under the column
  let lineDiv = document.createElement("div");
  lineDiv.classList.add("line");
  let line = document.createElement("hr");
  line.classList.add("text-light");
  line.style.width = "100%";
  // Add line to div and div to row
  lineDiv.appendChild(line);
  library_Row.appendChild(lineDiv);
}

// Select five games from the games array
const games_To_put_In_Library = games.slice(10, 15);

// Add each game to the library
games_To_put_In_Library.forEach(game => {
  libraryGames(game,libraryContainer);
})

function goToGamePage(gameLibrary) {
    window.location.href = gameLibrary.game_url;
}



function goToBrowse() {
    window.location.href = '/browse.html';
}
viewYourLibraryButton.addEventListener('click', goToBrowse);
discoverPopularBtn.addEventListener('click', goToBrowse);
browseNowBtn.addEventListener('click', goToBrowse);


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
    cardDiv.style.position = "relative";
    cardDiv.style.display = "inline-block"
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
    let visitButton = document.createElement("button");
    visitButton.classList.add("btn", "btn-danger", "rounded-pill");
    visitButton.innerText = "Visit";
    visitButton.style.left = "30%";
    visitButton.style.top = "50%";
    visitButton.style.position = "relative";
    visitButton.style.display = "none";
    visitButton.onclick = function () {
        window.location.href = game.game_url;
    }
    cardDiv.appendChild(visitButton);
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
    cardDiv.addEventListener('mouseover', function () {
        visitButton.style.display = "block";
    })
    cardDiv.addEventListener("mouseleave", function () {
      visitButton.style.display = "none";
    });
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
// Make the libraryGames function globally available
window.libraryGames = libraryGames;
