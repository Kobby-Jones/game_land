const popularCategory = document.getElementById("popular-category");
const strategy = document.getElementById("strategy");
const shooter = document.getElementById("shooter");
const sports = document.getElementById("sports");
const social = document.getElementById("social");
const popularHeader = document.querySelector(".popular-live-stream");
const categories = [strategy, shooter, sports, social]
const discoverAllButton = document.querySelector(".discover-all-btn");
let firstEight = [];


function popularCategoryTextContent(game) {

      popularCategory.innerHTML += `<div class="col-lg-3">
            <div class="card img-card rounded-5">
                <img src="${game.thumbnail}" alt="" class="card-img">
                <a href="${game.game_url}" target="_blank">
                <button class="btn btn-danger px-3 rounded-pill overlay-btn1 overlay-btn">Play</button>
                </a>
                <a href="${game.freetogame_profile_url}" target="_blank"><button class="btn btn-danger px-3 rounded-pill overlay-btn2 overlay-btn"><i class="bi bi-eye-fill text-light"></i>1.4K</button></a>
                <a href="${game.game_url}" target="_blank"><button class="btn btn-danger pe-5 ps-2 rounded-pill overlay-btn3 overlay-btn"><i class="bi bi-controller me-5 ms-2 text-light me-5"></i></button></a>
            </div>
            <div class="row">
            <div class="col-lg-2">
                <img src="${game.thumbnail}" class="rounded-circle" alt="" style="width: 36px; height:36px;">
            </div>
            <div class="col-lg-10">
                <div class="text-start pe-auto">
                        <h6><strong>${game.title}</strong></h6>
                </div>  
            </div>
            <div class="status text-center">
                <h4 class="text-light">${game.short_description}</h4>
            </div>
            </div>
         </div>`;
}

function populateDefaultGames() {
    games.forEach((game) => {
      if (firstEight.length === 8) {
        return;
      }
      firstEight.push(game);
    });
    console.log(firstEight);
    firstEight.forEach((game) => {
      popularCategoryTextContent(game)
    });
 
  }
    
// populateDefaultGames();

categories.forEach((category) => {
  category.addEventListener("click", function () {
    popularCategory.innerHTML = ""
    popularHeader.textContent = ` ${category.textContent} Games`;
    popularHeader.style.color = "deeppink";
    games.forEach((game) => {
      if (game.genre === category.textContent) {
          console.log(game.genre);
        createGameCard(game)
      }
    });
  });
});
discoverAllButton.addEventListener("click", function () {
  games.forEach((game) => {
    createGameCard(game)
  });
});








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
  let decsrRow = document.createElement("div")
  decsrRow.classList.add("row")
  // Create profile image column
  let profileColumn = document.createElement("div")
  profileColumn.classList.add("col-lg-2")
  rootDiv.appendChild(innerDiv)
  popularCategory.appendChild(rootDiv)

}
