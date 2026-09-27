// <-- Book Data: Stores the information and starting rating for each book -->
let books = [
  {
    title: "Dune",
    image: "images/dune.jpg",
    description:
      "Paul Atreides must travel to the dangerous desert planet Arrakis to ensure the future of his family and his people.",
    rating: 0,
  },
  {
    title: "Krabat",
    image: "images/krabat.jpg",
    description:
      "A young boy in Germany becomes an apprentice at a mysterious mill, only to discover it is a secret school for black magic.",
    rating: 0,
  },
  {
    title: "Roald Dahl Charlie and the Chocolate Factory",
    image: "images/roald-dahl-charlie-and-the-chocolate-factory.jpg",
    description:
      "A poor young boy wins a golden ticket to tour the mysterious and magical chocolate factory of Willy Wonka.",
    rating: 0,
  },
  {
    title: "The Godfather",
    image: "images/the-godfather.jpg",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant youngest son.",
    rating: 0,
  },
  {
    title: "Twilight",
    image: "images/twilight.jpg",
    description:
      "A teenage girl moves to a small town and falls in love with a mysterious classmate who is a vampire.",
    rating: 0,
  },
  {
    title: "The Richest Man in Babylon",
    image: "images/The-richest-Man-in-Babylon.jpg",
    description:
      "A collection of parables set in ancient Babylon that teach simple, fundamental lessons about saving money and building wealth.",
    rating: 0,
  },
];

// <-- DOM Selection: Finds the book list and Sort button -->
const bookList = document.getElementById("book-list");
const sortBtn = document.getElementById("sort-btn");

// <-- Sort Button: Sorts the books when clicked -->
sortBtn.addEventListener("click", function () {
  // <-- Sort Order: Lowest rating first -->
  books.sort(function (a, b) {
    return a.rating - b.rating;
  });

  // <-- Re-render: Displays the books in their new order -->
  displayBooks();
});

// <-- Display Function: Builds and displays all book cards -->
function displayBooks() {
  // <-- Clears Cards: Removes old cards before rebuilding the list -->
  bookList.innerHTML = "";

  // <-- Book Loop: Builds one card for each book -->
  for (let i = 0; i < books.length; i++) {
    const book = books[i];

    // <-- Element Creation: Creates the parts of a book card -->
    const colDiv = document.createElement("div");
    const cardDiv = document.createElement("div");
    const img = document.createElement("img");
    const cardBody = document.createElement("div");
    const title = document.createElement("h3");
    const desc = document.createElement("p");
    const rating = document.createElement("span");
    const btn = document.createElement("button");
    const footerRow = document.createElement("div");

    // <-- Styling: Adds Bootstrap Classes and custom classes -->
    colDiv.classList.add("col");
    cardDiv.classList.add("card");
    img.classList.add("card-img-top");
    cardBody.classList.add("card-body");
    btn.classList.add("btn", "btn-primary");
    footerRow.classList.add("card-footer-row");

    // <-- Rating Style: Adds padding and rounded corners -->
    rating.classList.add("p-2", "rounded");

    // <-- Book Content: Fills the elements with this book's information -->
    img.src = book.image;
    img.alt = book.title + " cover";
    title.textContent = book.title;
    desc.textContent = book.description;
    rating.textContent = book.rating + "/10";

    // <-- Initial Colors: Uses the current rating when creating the card -->
    rating.classList.remove("bg-danger", "bg-warning", "bg-success");

    if (book.rating >= 4 && book.rating <= 7) {
      rating.classList.add("bg-warning", "text-dark");
      rating.classList.remove("text-white");
    } else if (book.rating >= 8) {
      rating.classList.add("bg-success", "text-white");
      rating.classList.remove("text-dark");
    } else {
      rating.classList.add("bg-danger", "text-white");
      rating.classList.remove("text-dark");
    }

    btn.textContent = "Rate +1";
    // <!-- Rate Button: Increases this book's rating when clicked -->
    btn.addEventListener("click", function () {
      // <-- Rating Limit: Stops the rating from going above 10 -->
      if (book.rating < 10) {
        book.rating++;
        rating.textContent = book.rating + "/10";

        //<-- Rating Colors: Removes the old background before choosing a new one -->
        rating.classList.remove("bg-danger", "bg-warning", "bg-success");

        if (book.rating >= 4 && book.rating <= 7) {
          rating.classList.add("bg-warning", "text-dark");
          rating.classList.remove("text-white");
        } else if (book.rating >= 8) {
          rating.classList.add("bg-success", "text-white");
          rating.classList.remove("text-dark");
        } else {
          rating.classList.add("bg-danger", "text-white");
          rating.classList.remove("text-dark");
        }

        // <!-- Maximum Rating: Shows an alert when the rating reaches 10 -->
        if (book.rating === 10) {
          alert("Maximum rating reached for " + book.title + "!");
        }
      }
    });

    // <-- Card Content: Adds the title and description -->
    cardBody.appendChild(title);
    cardBody.appendChild(desc);

    // <-- Footer Row: Groups the rating and Rate button -->
    footerRow.appendChild(rating);
    footerRow.appendChild(btn);
    cardBody.appendChild(footerRow);

    // <-- Card Assembly: Adds the image and body to the card -->
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);

    // <-- Column Assembly: Places the card inside its Bootstrap column -->
    colDiv.appendChild(cardDiv);

    // <-- Book list: Adds the completed column to the page -->
    bookList.appendChild(colDiv);
  }
}

// <-- Initial Display: Shows the books when the page loads -->
displayBooks();
