

window.onload = (function(){

      const respira = document.querySelector(".breath");
      respira.addEventListener("mouseover", function(){
        let audio = document.querySelector("audio");
        audio.play();
        audio.volume = 0.2;

      });

      let url = 'https://swapi.co/api/films';
      let peliculas = document.querySelector("#home");

      const getPeliculas = url => {
          fetch(url, {
              method: 'GET', // GET, POST, PUT, DELETE
              //body: JSON.stringify(data), // Solo en POST y PUT
              headers: {
                  'Content-Type': 'application/json'
              }
          })
              .then(response => response.json())
              .then(data => {

                  data.results.map(item => {
                    peliculas.innerHTML+= `<div class="card">
                          <img src="..." class="card-img-top" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">${item.opening_crawl}</p>
                          </div>
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>Director:</strong> ${item.director}</li>
                            <li class="list-group-item"><strong>Productor:</strong> ${item.producer}</li>
                            <li class="list-group-item"><small class=""><strong>Fecha de creación</strong> ${item.created}</small></li>
                          </ul>

                        </div>`;

                  })

              })
      }






          getPeliculas(url);
});

$(window).scroll(function(){
      $(".fondo").css("opacity", 1 - $(window).scrollTop() / 500);


    });
