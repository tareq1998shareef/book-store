const baseURL = "https://example-data.draftbit.com/books?_limit=8";
const body = document.querySelector("body");
const logo = document.querySelector(".logo");
const mode = document.querySelectorAll(".mode");
const modePhoto = document.querySelector(".mode img");
const modeText = document.querySelectorAll(".mode > span");
const bars = document.querySelector(".bars");
const navMobile = document.querySelector("header nav ul");
const close = document.querySelector("header nav ul .close");
const circle = document.querySelector(".switch .circle");
const carts = document.querySelector(".carts");

function dark() {
  if (body.classList.contains("dark")) {
    logo.src = "assets/images/Logo-dark.svg";
    modePhoto.src = "assets/images/sun.svg";
    Array.from(modeText).forEach((e) => {
      e.innerHTML = "Light mode";
    });
    circle.style.right = "12px";
    navMobile.classList.add("dark");
    bars.src = "assets/images/bars-dark.svg";
    localStorage.setItem("dark", true);
  } else {
    logo.src = "assets/images/Logo-light.svg";
    modePhoto.src = "assets/images/moon.svg";
    Array.from(modeText).forEach((e) => {
      e.innerHTML = "Dark mode";
    });
    circle.style.right = 0;
    navMobile.classList.remove("dark");
    bars.src = "assets/images/bars-light.svg";
    localStorage.removeItem("dark");
  }
}
if (localStorage.getItem("dark")) {
  body.classList.add("dark");
  dark();
}
Array.from(mode).forEach((e) => {
  e.addEventListener("click", () => {
    body.classList.toggle("dark");
    dark();
  });
});
bars.addEventListener("click", () => {
  navMobile.classList.add("nav-mobile");
});
close.addEventListener("click", () => {
  navMobile.classList.remove("nav-mobile");
});

async function read() {
  await fetch(baseURL)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      res.map((cart) => {
        carts.innerHTML += `
          <div class="cart">
            <img src=${cart.image_url} alt="book" />
            <h4>${cart.authors}</h4>
            <div class="info">
              <div class="pages">
                <img src="assets/images/book-open-01.svg" alt="open" />
                <span>${cart.num_pages} Pages</span>
              </div>
              <div class="evaluation">
                <img src="assets/images/Vector.png" alt="vector" />
                <span>${cart.rating}</span>
              </div>
            </div>
            <button class="btn-details" onClick="det(${cart.id})" >Show Details</button>
          </div>
        `;
      });
    });
}
read();

async function det(id) {
  window.location.href = `./details.html?id=${id}`;
}
function home() {
  window.location.href = "./index.html";
}
