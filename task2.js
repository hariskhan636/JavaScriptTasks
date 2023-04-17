var library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];

function book(title,author,libraryID){
    this.title = title
    this.author = author
    this.libraryID = libraryID
}

function showBooks() {

    var table = document.getElementById("books-data");
  
    var rows = "";
  
    library.forEach(function (book, index) {
      rows += `
              <tr>
                  <td>${book.title}</td>
                  <td>${book.author}</td>
                  <td>${book.libraryID}</td>
              </tr>
          `;
    });
  
    table.innerHTML = rows;
}

function addBooks() {

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("libraryID").value = "";
  
    document.getElementsByClassName("modal-back")[0].style.display = "block";

}
 
function saveBook(){
    
    document.getElementsByClassName("modal-back")[0].style.display = "none";

    var libraryID = document.getElementById("libraryID").value;
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;

    console.log(title)

    var book1 = new book(title, author, libraryID)
    library.push(book1)

    showBooks();
}

function sortBooks(){

    document.getElementsByClassName("modal-back1")[0].style.display = "block";
    
}

function sortedBooks(){

    var order = document.getElementById("order").value

    if(order === 'A'){
        //ascending sort
        for(let i=0;i<library.length-1;i++){
            for(j=0;j<library.length-i-1;j++){

                if(library[j].libraryID > library[j+1].libraryID){
                    var temp = library[j]
                    library[j] = library[j+1]
                    library[j+1] = temp
                }
            }
        }
        document.getElementsByClassName("modal-back1")[0].style.display = "none";
        showBooks()  
    }
    else if(order === 'D'){
        //descending
        for(let i=0;i<library.length-1;i++){
            for(j=0;j<library.length-i-1;j++){

                if(library[j].libraryID < library[j+1].libraryID){
                    var temp = library[j]
                    library[j] = library[j+1]
                    library[j+1] = temp
                }
            }
        }
        document.getElementsByClassName("modal-back1")[0].style.display = "none";
        showBooks() 
    }
    else{
        alert('invalid input')
    }
}