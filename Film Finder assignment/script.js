const ul = document.querySelector('#ul')

const addMoviesToDom = function (movies) {
  movies.forEach((movies) => {
    let li = document.createElement('li');
    let makeA = document.createElement("a");
    let img = document.createElement("img");
    li.classList.add("li");
    makeA.href = "https://www.imdb.com/title/" + movies.imdbID;
    img.src = movies.poster;
    ul.appendChild(li);
    li.appendChild(makeA);
    makeA.appendChild(img);
  });
};

addMoviesToDom(movies);
  
const radioButtons = document.getElementsByName('filter')
radioButtons.forEach(item => {
    item.addEventListener('change', event => {
    if (document.getElementById('latestMovies').checked == true) {
      filterLatest = movies.filter((movies) => 
      movies.year > "2014").map((movies) => movies);
      emptyList()
      addMoviesToDom(filterLatest);
  }
    if (document.getElementById('avengerMovies').checked == true) {
      filterAvenger = movies.filter((movies) => 
      movies.title.includes("Avengers")).map((movies) => movies);
      emptyList()
      addMoviesToDom(filterAvenger);
  }
    if (document.getElementById('xMenMovies').checked == true) {
      filterXman = movies.filter((movies) => 
      movies.title.includes("X-Men")).map((movies) => movies);
      emptyList()
      addMoviesToDom(filterXman);
  }
  if (document.getElementById('princessMovies').checked == true) {
    filterPrincess = movies.filter((movies) => 
    movies.title.includes("Princess", "princess")).map((movies) => movies);
    emptyList()
    addMoviesToDom(filterPrincess);
  }
    if (document.getElementById('batmanMovies').checked == true) {
      filterBatman = movies.filter((movies) => 
      movies.title.includes("Batman")).map((movies) => movies);
      emptyList()
      addMoviesToDom(filterBatman);
  }

    })
  window.emptyList = function () {
    var li = document.querySelectorAll('.list > li');
    var listLength = li.length;
    
    for (var i = listLength-1; i >=0 ; i--) {
      li[i].parentNode.removeChild(li[i]);   
    }
  
  }

})
