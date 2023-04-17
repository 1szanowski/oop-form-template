//creating book constructor 
class Book {
    constructor (title, author, isbn) {
        this.title = title;
        this. author = author;
        this.isbn = isbn;
    }
}
//creatin ui
class UI {
    addBookToList (book) {
        const list = document.getElementById("book-list");
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="" class="delete">X</a></td>
        `;
        list.appendChild(row)
    }
    showAlert(message, className) {
        const div = document.createElement("div");
        //add classNAme
        div.className =  ` alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container");
        //get form
        const form = document.querySelector("#book-form");
        //ins alert 
        container.insertBefore(div, form);
        //timeout 3 sec
        setTimeout(function(){document.querySelector("alert").remove()}, 3000)
    }
    deleteBook (target) {
        if (target.className === "delete") {
            target.parentElement.parentElement.remove();
        }
    }
    clearFields () {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }
} 
//here goes event list =================

document.getElementById("book-form").addEventListener("submit", function (e) {
    //get vals
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    //creating instance of book
    const book = new Book(title, author, isbn);
    const ui = new UI();
    // validation
    if (title === "" || author === "" || isbn === "") {
        //show error
        ui.showAlert("please fill all the fields", "error");
    } else {
        ui.addBookToList(book);
        //show success 
        ui.showAlert("Book added", "success");
        //clear fields
        ui.clearFields();
    }
    e.preventDefault();
});
// event list for default 
document.getElementById("book-list").addEventListener("click", function(e){
    const ui =new UI();
    ui.deleteBook(e.target);
    ui.showAlert("Book removedd", "success!");
    e.preventDefault();
})