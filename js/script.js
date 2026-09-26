// TBD ... Planning

// <--- Data Structure Array of Book Objects---> 
let books = [
  { 
    title: "Dune", 
    image: "images/dune.jpg", 
    description: "Paul Atreides must travel to the dangerous desert planet Arrakis to ensure the future of his family and his people.", 
    rating: 0    
  },
   { 
    title: "Krabat", 
    image: "images/krabat.jpg", 
    description: "A young boy in Germany becomes an apprentice at a mysterious mill, only to discover it is a secret school for black magic.", 
    rating: 0    
  },
   { 
    title: "Roald Dahl Charlie and the Chocolate Factory", 
    image: "images/roald-dahl-charlie-and-the-chocolate-factory.jpg", 
    description: "A poor young boy wins a golden ticket to tour the mysterious and magical chocolate factory of Willy Wonka.", 
    rating: 0    
  },
   { 
    title: "The Godfather", 
    image: "images/the-godfather.jpg", 
    description: "The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant youngest son.", 
    rating: 0    
  },
   { 
    title: "Twilight", 
    image: "images/twilight.jpg", 
    description: "A teenage girl moves to a small town and falls in love with a mysterious classmate who is a vampire.", 
    rating: 0    
  },
   { 
    title: "The richest Man in Babylon", 
    image: "images/The-richest-Man-in-Babylon.jpg", 
    description: "A collection of parables set in ancient Babylon that teach simple, fundamental lessons about saving money and building wealth.", 
    rating: 0    
  },
  // ... more books
]

// <--- DOM Selection: Grabs the book list from the container --> 
const bookList = document.getElementById("book-list");

// <-- Logic: Loop through the Books Array --->
for (let i = 0; i < books.length; i++) {

  const book = books[i];
  
  // <--- Element Creation: Builds the Card Components ---> 
    const colDiv = document.createElement("div");
    const cardDiv = document.createElement("div");
    const img = document.createElement("img");
    const cardBody = document.createElement("div"); 
    const title = document.createElement("h3");
    const desc = document.createElement("p");
    const rating = document.createElement("span");
    const btn = document.createElement("button");

// <--- Styling: Adds Bootstrap Classes --> 
colDiv.classList.add("col");
cardDiv.classList.add("card");
img.classList.add("card-img-top");
cardBody.classList.add("card-body");
btn.classList.add("btn", "btn-primary");

// <--- Rating Background: Red for starting score ---> 
rating.classList.add("bg-danger", "text-dark", "p-2", "rounded");

// <-- Data Injection: Populates the Eleemnts with Book Info ---> 
img.src = book.image; 

// <-- Image Description: Adds Alternative Text for the Cover  --> 
img.alt = book.title + " cover"; 

title.textContent = book.title; 
desc.textContent = book.description; 
rating.textContent = book.rating + "/10"; 

btn.textContent = "Rate +1";
// <!-- Event Listener: Rate Button Click ---> 
btn.addEventListener("click", function () {
  if (book.rating < 10 ) {
    book.rating++;
    rating.textContent = book.rating + "/10"

//<-- Rating Colors: Swaps background based on score --> 
rating.classList.remove("bg-danger", "bg-warning", "bg-success");

if (book.rating >= 4 && book.rating <= 7) {
  rating.classList.add("bg-warning", "text-dark");
  rating.classList.remove("text-white");
} else if (book.rating >=8) {
  rating.classList.add("bg-success", "text-white");
  rating.classList.remove("text-dark");
} else {
  rating.classList.add("bg-danger", "text-white");
  rating.classList.remove("text-dark");
}

  // <!-- Max Rating Alert --> 
  if (book.rating === 10) {
    alert("Maximum rating reached for " + book.title + "!")
  }
}
});

// <--- Appending: Puts the Title, Description, Rating and Button Inside the Card Body
cardBody.appendChild(title); 
cardBody.appendChild(desc);
cardBody.appendChild(rating);
cardBody.appendChild(btn);

// <-- Card Assembly: Puts the Image and Card Body Inside the Card --> 
cardDiv.appendChild(img);
cardDiv.appendChild(cardBody);

// <-- Column Assembly: Puts the card inside its column --> 
colDiv.appendChild(cardDiv);

// <-- Book list: Puts the column inside the book list --> 
bookList.appendChild(colDiv);
}