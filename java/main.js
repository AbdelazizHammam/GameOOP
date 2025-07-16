import { ApiDetail, games, details } from "./details.js";
let myRow = document.querySelector("#myRow");
let mmorpg = document.querySelector("#mmorpg");
let shooter = document.querySelector("#shooter");
let sailing = document.querySelector("#sailing");
let permadeath = document.querySelector("#permadeath");
let superhero = document.querySelector("#superhero");
let pixel = document.querySelector("#pixel");
let loading = document.querySelector(".loading");


      class Api {
  constructor(category) {
    this.category = category;
  }

  async getApi() {
    loading.classList.remove("d-none");

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '3b119955acmsh5d60758c5d138c8p1a15d9jsn96adb8045085',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`, options);
    const response = await api.json();
    console.log(response);
    loading.classList.add("d-none");
    this.category = response;
    this.displayData();
  }

  displayData() {
    let cartoona = "";
    for (let i = 0; i < this.category.length; i++) {
      let game = this.category[i];
      cartoona += `
        <div class="col">
          <div class="card" data-id="${game.id}">
            <img src="${game.thumbnail}" class="card-img-top h-100" alt="..."/>
            <div class="card-body">
              <div class="header-info d-flex justify-content-between align-items-center">
                <h5 class="card-title h6 small">${game.title}</h5>
                <span class="badge text-bg-primary p-2">free</span>
              </div>
              <p class="card-text small text-center opacity-50">${game.short_description}</p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
              <span class="badge rounded-pill">${game.genre}</span>
              <span class="badge rounded-pill">${game.platform}</span>
            </div>
          </div>
        </div>`;
    }

    myRow.innerHTML = cartoona;

    let cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", function () {
        const gameId = this.dataset.id;
        const detail = new ApiDetail(gameId);
        detail.getIDd();
      });
    }
  }
}
let mmorpgGames = new Api("mmorpg").getApi();
console.log(mmorpgGames);

mmorpg.addEventListener("click", function () {
  let mmorpgGames = new Api("mmorpg");

  mmorpgGames.getApi()
});


// display SHOOTER

shooter.addEventListener("click", function () {
  let shooterGames = new Api("shooter");

  shooterGames.getApi()
});


// display SAILING

sailing.addEventListener("click", function () {
  let sailingGames = new Api("sailing");

  sailingGames.getApi()
});


// display PERMADEATH

permadeath.addEventListener("click", function () {
  let permadeathGames = new Api("permadeath");

  permadeathGames.getApi()
});


// display Super Hero

superhero.addEventListener("click", function () {
  let superheroGames = new Api("superhero");

  superheroGames.getApi()
});

// display Pixel


pixel.addEventListener("click", function () {
  let pixelGames = new Api("pixel");

  pixelGames.getApi()
});
let closeBtn = document.querySelector("#closeBtn");
  closeBtn.addEventListener("click", function () {
        games.classList.remove("d-none");
        details.classList.add("d-none");
      });