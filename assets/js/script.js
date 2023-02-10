const search = document.querySelector(".search-btn");
search.addEventListener('click', function () {
    alert("Hello")
})
// const browse = document.getElementById('browse-now');
// browse.addEventListener('click', function () {
//     window.location.href = "/browse.html"
// })
const popularCategory = document.getElementById("popular-category");
const strategy = document.getElementById("strategy");
const shooter = document.getElementById("shooter");
const sports = document.getElementById("sports");
const social = document.getElementById("social");


popularCategory.innerHTML = `<div class="col-lg-3">
                            <div class="card img-card rounded-5">
                                <img src="" alt="" class="card-img">
                                <button class="btn btn-danger px-3 rounded-pill overlay-btn1 overlay-btn">Live</button>
                                <button class="btn btn-danger px-3 rounded-pill overlay-btn2 overlay-btn"><i class="bi bi-eye-fill text-light"></i>1.4K</button>
                                <button class="btn btn-danger pe-5 ps-2 rounded-pill overlay-btn3 overlay-btn"><i class="bi bi-controller me-5 ms-2 text-light me-5"></i></button>
                            </div>
                            <div class="row">
                            <div class="col-lg-2">
                                <img src="" class="rounded-circle" alt="" style="width: 36px; height:36px;">
                            </div>
                            <div class="col-lg-10">
                                <div class="text-start pe-auto">
                                     <h6><i class="bi bi-check-lg bg-light rounded-circle"></i><strong>Trixie Donna</strong></h6>
                                </div>  
                            </div>
                            <div class="status text-center">
                                <h4 class="text-light"></h4>
                            </div>
                           </div>
                        </div>
         `;

const categories = [strategy, shooter, sports, social]


categories.forEach(category => {
    category.addEventListener('click', function () {
        popularCategory.innerHTML = "";
        games.forEach(game => {
            if (game.genre === category.textContent) {
                console.log(game.genre);
                 popularCategory.innerHTML += `<div class="col-lg-3">
                            <div class="card img-card rounded-5">
                                <img src="${game.thumbnail}" alt="" class="card-img">
                                <button class="btn btn-danger px-3 rounded-pill overlay-btn1 overlay-btn">Live</button>
                                <button class="btn btn-danger px-3 rounded-pill overlay-btn2 overlay-btn"><i class="bi bi-eye-fill text-light"></i>1.4K</button>
                                <button class="btn btn-danger pe-5 ps-2 rounded-pill overlay-btn3 overlay-btn"><i class="bi bi-controller me-5 ms-2 text-light me-5"></i></button>
                            </div>
                            <div class="row">
                            <div class="col-lg-2">
                                <img src="${game.thumbnail}" class="rounded-circle" alt="" style="width: 36px; height:36px;">
                            </div>
                            <div class="col-lg-10">
                                <div class="text-start pe-auto">
                                     <h6><i class="bi bi-check-lg bg-light rounded-circle"></i><strong>Trixie Donna</strong></h6>
                                </div>  
                            </div>
                            <div class="status text-center">
                                <h4 class="text-light">${game.title}</h4>
                            </div>
                           </div>
                        </div>
         `;
            }
        })
        
       })
   })



    