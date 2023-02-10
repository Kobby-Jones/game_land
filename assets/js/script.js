const popularCategory = document.getElementById("popular-category");
const strategy = document.getElementById("strategy");
const shooter = document.getElementById("shooter");
const sports = document.getElementById("sports");
const social = document.getElementById("social");
const popularHeader = document.querySelector(".popular-live-stream");
const categories = [strategy, shooter, sports, social]
const discoverAllButton = document.querySelector(".discover-all-btn");
let firstEight = [];


categories.forEach(category => {
    category.addEventListener('click', function () {
        popularCategory.innerHTML = "";
        popularHeader.textContent = ` ${category.textContent} Games`;
        popularHeader.style.color = "deeppink";
        discoverAllButton.textContent = `Discover all ${category.textContent} games`
        games.forEach(game => {
            if (game.genre === category.textContent) {
                console.log(game.genre);
                 popularCategory.innerHTML += `<div class="col-lg-3">
                            <div class="card img-card rounded-5">
                                <img src="${game.thumbnail}" alt="" class="card-img">
                                 <a href="${game.game_url}" target="_blank">
                                    <button class="btn btn-danger px-3 rounded-pill overlay-btn1 overlay-btn">Play</button>
                                 </a>
                                 <a href="${game.freetogame_profile_url}" target="_blank"><button class="btn btn-danger px-3 rounded-pill overlay-btn2 overlay-btn"><i class="bi bi-eye-fill text-light"></i>1.4K</button></a>
                                
                                <button class="btn btn-danger pe-5 ps-2 rounded-pill overlay-btn3 overlay-btn"><i class="bi bi-controller me-5 ms-2 text-light me-5"></i></button>
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
                        </div>
         `;
            }
        })
        
       })
   })

discoverAllButton.addEventListener('click', function () {
       
   })


    