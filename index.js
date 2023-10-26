function fetchBooks() {
  // Make a fetch request to the Game of Thrones API
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((data) => renderBooks(data)); // Call renderBooks with the JSON data
}

function renderBooks(books) {
  const bookList = document.getElementById("list"); // Assuming you have an HTML element with the id "list"

  // Iterate through the books and create list items
  books.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.textContent = book.name;
    bookList.appendChild(listItem);
  });
}
document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
