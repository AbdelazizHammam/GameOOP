export const games = document.querySelector(".games");
export const details = document.querySelector(".details");
export const detailsContent = document.querySelector("#detailsContent");

export class ApiDetail {
  constructor(id) {
    this.id = id;
  }

  async getIDd() {
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '3b119955acmsh5d60758c5d138c8p1a15d9jsn96adb8045085',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    const apiId = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`, options);
    const response = await apiId.json();
    console.log(response);
    this.displayGame(response);
  }

  displayGame(game) {
    games.classList.add("d-none");
    details.classList.remove("d-none");
    detailsContent.innerHTML = `
      <div class="row g-4">
        <div class="col-md-4">
          <img src="${game.thumbnail}" class="w-100" alt="image details">
        </div>
        <div class="col-md-8">
          <h3>Title:  ${game.title}</h3>
          <p>Category: <span class="badge text-bg-info">${game.genre}</span> </p>
          <p>Platform: <span class="badge text-bg-info"> ${game.platform}</span> </p>
          <p>Status: <span class="badge text-bg-info"> ${game.status}</span> </p>
          <p class="small">${game.description}</p>
          <a class="text-white btn btn-outline-warning" target="_blank" href="${game.game_url}">Show Game</a>
        </div>
      </div>
    `;
  }
}