//document.writeln("<script type='text/javascript' src='moviedata.js'></script>");
const ul = document.querySelector('#ul')

const addMoviesToDom = (movies) => {
    movies.map(movie => {
      let li = document.createElement('li');
      let img = document.createElement('img');
      li.classList.add("li");
      img.src = movie.poster;
      ul.appendChild(li);
      li.appendChild(img);
    })
}
console.log(movies);
  addMoviesToDom(movies)
  

const radioButtons = document.getElementsByName('filter')
radioButtons.forEach(item => {
    item.addEventListener('change', event => {
    if (document.getElementById('latestMovies').checked == true) {
        alert("hello1");
  }
    if (document.getElementById('avengerMovies').checked == true) {
        alert("hello2");
  }
    if (document.getElementById('xMenMovies').checked == true) {
      alert("hello3");
  }
  if (document.getElementById('princessMovies').checked == true) {
      
    filterMovies = (movies) => {
      const filteredMovies = movies.filter(movie => 
          movies.includes("princess"));   
  };
  addMoviesToDom(filterMovies);
       
        
  }
    if (document.getElementById('batmanMovies').checked == true) {
        alert("hello5");
  }
      
        
    } )
})