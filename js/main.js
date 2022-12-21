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

let elSearch = [];

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
    var elCol = document.createElement("div");
    var elBox = document.createElement("div");
    var elId = document.createElement("p");
    var elImg = document.createElement("img");
    var elName = document.createElement("h2");
    var elGenres = document.createElement("p");
    var elHeight = document.createElement("p");
    elRow.classList.add("g-5", "row", "justify-content-center");
    elCol.setAttribute("class", "col-3");
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
    elId.innerHTML = film[i].id;
    elId.classList.add("h4", "text-center", "text-white");
    elImg.setAttribute("src", film[i].poster);
    elImg.setAttribute("class", "d-block mx-auto w-100");
    elName.innerHTML = film[i].title;
    elName.classList.add("text-warning", "text-center", "h4", "mt-2");
    elGenres.innerHTML = film[i].genres;
    elGenres.classList.add("w-100", "text-danger", "text-center");
    elHeight.innerHTML = film[i].release_date;
    elHeight.classList.add("text-center", "text-light");
  }
}

filmsFiltered(films);

const elSelect2 = document.querySelector(".js-select-two");
elSelect2.addEventListener("change", () => {
  // if (elSelect2.value == "id") {
  //   pokemons.sort((a, b) => {
  //     if (a.name < b.name && a.name > b.name) {
  //       return 1;
  //     }
  //   });
  // }

  // ------------------------ USTOZ SHU ID DIGANI BOSILGANDA HAMMASI O'Z HOLIGA QAYTADIGAN QILOMADIM☝ FILMSDAYAM SHUNAQA ----------------------

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
