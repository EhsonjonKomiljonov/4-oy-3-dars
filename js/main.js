// var users = [
//   {
//     name: "Abdulloh",
//     debt: 10000,
//   },
//   {
//     name: "Bekzod",
//     debt: 20000,
//   },
//   {
//     name: "Rustam",
//     debt: 35000,
//   },
//   {
//     name: "Jamshid",
//     debt: 50000,
//   },
//   {
//     name: "Bunyod",
//     debt: 5000,
//   },
// ];

// let newArr = users.map((el, index, array) => {
//   return {
//     name: el.name + 'bek',
//     debt: el.debt + 10000,
//   }
// });
// console.log(newArr);

// const newArr = users.filter((el) => el.name.length === 6);
// console.log(newArr);

// let arr = [true, false, true, false];
// let newArr = arr.filter((el) => el).length;

// console.log(newArr);

// let numbers = [1, 2, 3, 4, 5];

// let arr = numbers.reduce((num, el) => {
//   num.push(el * 10)
//   return num;
// }, []);

// console.log(arr);

// let arr1 = [1, "sdfcv", true, false, undefined, false, "dcecrf", 2];
// let arr2 = ["1", "sdfcv", true, false, undefined, false];

// let newArr = arr1.reduce((ay, el) => {
//   if (typeof el === "number") {
//     return ++el;
//   }
// }, 0);

// console.log(newArr);

// ------------------------------------------------------------- UY ISHI ---------------------------------------------------------------------

var elHtml = document.querySelector("html");
elHtml.style.boxSizing = "border-box";
elHtml.style.paddingRight = "30px";
elHtml.style.paddingLeft = "30px";
let elForm = document.querySelector("form");
let elInput = document.querySelector("input");
let elBookmarkList = document.querySelector(".js-bookmark-list");

let elSearch = [];
const bookmarkList = new Set();

elForm.addEventListener("input", (evt) => {
  evt.preventDefault();
  elRow.innerHTML = "";
  let elInputVal = elInput.value.toLowerCase();
  films.forEach((el) => {
    if (el.title.toLowerCase().includes(elInputVal)) {
      elSearch.push(el);
    }
  });
  filmsFiltered(elSearch);
  elSearch = [];
});

var elRow = document.querySelector(".row");

function filmsFiltered(film) {
  for (i = 0; i < film.length; i++) {
    let elCol = document.createElement("div");
    let elBox = document.createElement("div");
    let elId = document.createElement("p");
    let elImg = document.createElement("img");
    let elName = document.createElement("h2");
    let elGenres = document.createElement("p");
    let elHeight = document.createElement("p");
    let bookmarkBtn = document.createElement("button");

    elRow.classList.add("g-5", "row", "justify-content-center");
    elCol.setAttribute("class", "col-3");
    elId.classList.add("h4", "text-center", "text-white");
    elImg.setAttribute("src", film[i].poster);
    elImg.setAttribute("class", "d-block mx-auto w-100");
    elName.innerHTML = film[i].title;
    elName.classList.add("text-warning", "text-center", "h4", "mt-2");
    elGenres.innerHTML = film[i].genres;
    elGenres.classList.add("w-100", "text-danger", "text-center");
    elHeight.innerHTML = film[i].release_date;
    elHeight.classList.add("text-center", "text-light");
    bookmarkBtn.setAttribute(
      "class",
      "js-bookmark btn bg-transparent text-white border-0"
    );

    bookmarkBtn.dataset.filmId = film[i].id;

    elBox.style.position = "relative";
    bookmarkBtn.style.position = "absolute";
    bookmarkBtn.style.bottom = "20px";
    bookmarkBtn.style.right = "20px";
    bookmarkBtn.style.width = "40px";
    bookmarkBtn.style.padding = "20px";
    bookmarkBtn.style.backgroundImage = "url('../images/bookmark.svg')";
    bookmarkBtn.style.backgroundPosition = "center";
    bookmarkBtn.style.backgroundSize = "40px";

    elRow.appendChild(elCol);
    elCol.appendChild(elBox);
    elBox.classList.add(
      "p-4",
      "bg-primary",
      "rounded-4",
      "h-100",
      "card-width"
    );
    elBox.appendChild(elId);
    elBox.appendChild(elImg);
    elBox.appendChild(elName);
    elBox.appendChild(elGenres);
    elBox.appendChild(elHeight);
    elBox.appendChild(bookmarkBtn);

    elId.innerHTML = film[i].id;
  }
}

const renderBookmarkFilms = (array, node) => {
  node.innerHTML = "";
  array.forEach((el) => {
    const newItem = document.createElement("li");
    const newText = document.createElement("p");
    const newDeleteBtn = document.createElement("button");

    newItem.setAttribute(
      "class",
      "d-flex align-items-center p-2 bg-primary me-2 mt-2"
    );
    newText.setAttribute("class", "my-0 mx-2 text-white");
    newDeleteBtn.setAttribute("class", "bg-danger border-0 delete-bookmark");
    newDeleteBtn.dataset.filmId = el.id;

    newText.textContent = el.title;
    newDeleteBtn.innerHTML = "&times;";
    newItem.appendChild(newText);
    newItem.appendChild(newDeleteBtn);
    node.appendChild(newItem);
  });
};

filmsFiltered(films);

const elSelect2 = document.querySelector(".js-select-two");
elSelect2.addEventListener("change", () => {
  if (elSelect2.value != "id") {
    if (elSelect2.value == "A--Z") {
      const FILMS__SORT = films.sort((a, b) => {
        if (a.title < b.title) {
          return 1;
        }
        if (a.title > b.title) {
          return -1;
        }
        return 0;
      });
      displayPokemons(FILMS__SORT);
    }
    if (elSelect2.value == "Z--A") {
      const FILMS__SORT = films.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      displayPokemons(FILMS__SORT);
    }
  }
});

elRow.addEventListener("click", (evt) => {
  if (evt.target.matches(".js-bookmark")) {
    const filmsId = evt.target.dataset.filmId;

    const findedFilm = films.find((film) => film.id == filmsId);

    bookmarkList.add(findedFilm);
    renderBookmarkFilms(bookmarkList, elBookmarkList);
  }
});

elBookmarkList.addEventListener("click", (evt) => {
  if (evt.target.matches(".delete-bookmark")) {
    const filmId = evt.target.dataset.filmId;

    const findedFilm = films.find((film) => film.id == filmId);

    bookmarkList.delete(findedFilm);
    renderBookmarkFilms(bookmarkList, elBookmarkList);
  }
});
