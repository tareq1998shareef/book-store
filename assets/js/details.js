const detailsContainer = document.querySelector(".details");
const bookId = window.location.search.split("=")[1];
if (bookId) {
  fetch(`https://example-data.draftbit.com/books/${bookId}`)
    .then((res) => res.json())
    .then((book) => {
      detailsContainer.innerHTML = `
      <img
        src="${book.image_url}"
        alt="book image"
      />
      <div class="text">
        <div class="title">
          <h2>${book.title}</h2>
          <p>${book.authors}</p>
        </div>
        <div class="about">
          <h2>About Book:</h2>
          <p>
            ${book.description}
          </p>
          <div class="count">
            <p class="inc">+</p>
            <span>1</span>
            <p class="dec">-</p>
          </div>
          <div class="btns">
            <button class="btn-details">Add to cart</button>
            <button class="btn-details-inv">Favorite</button>
          </div>
          <hr class="hr-details" />
          <div class="info">
            <div class="pages">
              <p>Pages Number :</p>
              <p>${book.num_pages} pages</p>
            </div>
            <div class="rating">
              <p>Rating Count :</p>
              <p>${book.rating_count}</p>
            </div>
            <div class="reviews">
              <p>Reviews:</p>
              <p>${book.review_count}</p>
            </div>
          </div>
        </div>
      </div>
    `;
      const inc = document.querySelector(".inc");
      const dec = document.querySelector(".dec");
      const count = document.querySelector(".count span");

      inc.addEventListener("click", () => {
        count.innerHTML = Number(count.innerHTML) + 1;
      });
      dec.addEventListener("click", () => {
        if (Number(count.innerHTML) > 1) {
          count.innerHTML = Number(count.innerHTML) - 1;
        }
      });
    });
}
