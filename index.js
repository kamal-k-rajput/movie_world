const container = document.querySelector("#container");
let url;
var type;
function search() {
  let name = document.getElementById("name_search").value;
  type = document.getElementById("type_search").value;
  
  url = `http://www.omdbapi.com/?apikey=16c26228&${type}=${name}`;
  getData();
}
async function getData() {
  try {
    let movieRequest = await fetch(url);
    let data = await movieRequest.json();
    appendData(data);
  } catch (er) {
    
    let err = document.createElement('div');
    let mem = document.createElement('img');
    err.setAttribute("id", "memes");
    mem.src =
    "https://c.tenor.com/fzfh6wPrhWAAAAAC/evidence-theres-a-little-something-missing.gif";
    err.append(mem);
    container.append(err);
    console.log(er);
  }
}
function appendData(data) {
  let one_poster = document.createElement("div");
  one_poster.setAttribute("id", "one_poster");
  container.innerText = null;
  if (type === "s") {
    data.Search.forEach(function (el) {
      // console.log(el);
      showData1(el,one_poster);
    });
    
    container.append(one_poster);
  } else {
showData(data);
  }
}

function showData(data) {
  let div = document.createElement("div");
  div.setAttribute("id", "main");
  let title = document.createElement("p");
  title.setAttribute("id", "title");
  title.textContent = data.Title;

  let top_details = document.createElement("div");
  top_details.setAttribute("id", "top_details");
  let d1 = document.createElement("div");
  let d2 = document.createElement("div");
  d2.setAttribute("id", "d2");

  let poster = document.createElement("img");
  poster.setAttribute("src", data.Poster);

  let card = document.createElement("div");
  card.setAttribute("id", "card");
  div_left = document.createElement("div");

  let plot = document.createElement("p");
  plot.style.color = "black";
  plot.align="justify";
  plot.textContent = `Plot: ${data.Plot}`;

  // let plot = document.createElement("div");

  div_img = document.createElement("div");
  div_right = document.createElement("div");
  div_right.setAttribute("id", "div_right");
  div_img.setAttribute("id", "div_img");
  div_img.append(poster);

  let typ = document.createElement("span");
  typ.setAttribute("class", "left-span");
  typ.textContent = `${data.Type.toUpperCase()}`;

  let year = document.createElement("span");
  year.setAttribute("class", "left-span");
  year.textContent = data.Year;

  let time = document.createElement("span");
  time.textContent = data.Runtime;
  time.setAttribute("class", "left-span");

  let genre = document.createElement("span");
  genre.setAttribute("class", "left-span");
  genre.textContent = data.Genre;
  d1.append(typ, year, genre, time);

  let d_top = document.createElement("div");
  d_top.setAttribute("id", "d_top");
  let ratings = document.createElement("span");
  ratings.textContent = `IMDb RATINGS`;

  let rated = document.createElement("span");
  rated.textContent = `Rated`;


  d2.append(ratings,rated);
  let d3 = document.createElement("div");
  let s1 = document.createElement("span");

  let i = document.createElement("i");

  i.setAttribute("class", "fa-star fas");

   let s2 = document.createElement("span");
   s2.setAttribute("id", "s2");
  s1.innerHTML = data.imdbRating;
  s1.setAttribute("id", "imdbRating");
  let s4 = document.createElement("span");
  let span = document.createElement("p");
  span.style.color = "yellow";
  if (data.imdbRating >= 8.5) {
    span.textContent = "Recommended";
  }

  s4.append(s1, i);
  s2.textContent = data.Rated;
  d3.append(s4, s2);

  d_top.append(d2, d3);
  top_details.append(d1, d_top);

  let released = document.createElement("p");
  released.style.color = "black";
  released.textContent = `Released On: ${data.Released}`;

  let writers_name = document.createElement("p");
  writers_name.textContent = `Writer: ${data.Writer}`;

  let language = document.createElement("p");
  language.style.color = "#FF1700";
  language.textContent = `Language: ${data.Language}`;
  
  let actors = document.createElement("p");
  
  actors.textContent = `Actors: ${data.Actors}`;
  actors.style.color = "#06FF00";

  let awards = document.createElement("p");
    awards.style.color = "#FF1700";
  awards.textContent = `Awards: ${data.Awards}`;

  let country = document.createElement("p");
  country.style.color = "#3DB2FF";
  country.textContent = `Country: ${data.Country}`;

  let director = document.createElement("p");
  director.textContent = `Director: ${data.Director}`;
  let div2 = document.createElement("div");
  div.append(title, top_details, card);

  // right div append

  div_right.append(span,released, actors, writers_name, language, country);
  //left div append
  div_left.append(plot, director, awards);

  // card append
  card.append(div_left, div_img, div_right);

  container.append(div);
}
function showData1(data,one_poster) {
  let div = document.createElement("div");
    div.setAttribute("id", "cards");
  let title = document.createElement("span");
  title.setAttribute("id", "title");
  title.textContent = data.Title;

  let poster = document.createElement("img");
  poster.setAttribute("src", data.Poster);
  poster.setAttribute("alt", "MOVIE POSTER NOT AVAILABLE!");

  let typ = document.createElement("span");
  typ.textContent = `${data.Type.toUpperCase()}`;

  let year = document.createElement("span");
  year.textContent = data.Year;
  
  
  div.append(title, poster, typ, year);
   one_poster.append(div);
  // container.append(one_poster);
}