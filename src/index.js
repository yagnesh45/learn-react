// Creating a Booklist App

import React from 'react'
import ReactDom from 'react-dom'

// Importing a css
import "./index.css"

// Importing a js file
// import "./basics.js"

const BookImgLocation = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1466865542i/18144590._UY2404_SS2404_.jpg";
const BookImg = () => <img className="book-img" src={BookImgLocation} alt="" width="200" />
const BookTitle = "Alchemist";
const BookAuthor = "paolo coelho";

// creating object for passing to a BookComponent
const BookDetails = {
  img: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Chacha_Chaudhary_with_his_dog_Raaket.jpg/250px-Chacha_Chaudhary_with_his_dog_Raaket.jpg",
  title: "Chacha Chaudhary",
  author: "Chacha",
}

function BookList() {
  return (
    <section className="book-section">
      <BookComponent />
      <BookComponentArgs bookImg={BookDetails.img} bookName="Another Book" bookAuthor="Another Author" /> {/* Sending arguments to component */}
      <BookComponentArgs bookImg={BookDetails.img} bookName={BookDetails.title} bookAuthor={BookDetails.author} />
    </section>
  );
}

const BookComponent = () => {
  return (
    <div className="book-component">
      <BookImg />
      <h2 className="book-name">{BookTitle.toUpperCase()}</h2>
      <h3 className="author">{BookAuthor}</h3>
    </div>
  );
}

// Book Components with passed arguments in form of object
// We can also destructure object within arugments as:
// const BookComponentArgs = ({bookImg, bookName, bookAuthor}) =>
// and then we can directly use these variables without (.) operator. 
const BookComponentArgs = (args) => {
  return (
    <div className="book-component">
      {/* <BookImg /> */}
      <img src={args.bookImg} alt="" />
      <h2 className="book-name">{args.bookName}</h2>
      <h3 className="author">{args.bookAuthor}</h3>
    </div>
  );
}



ReactDom.render(<BookList />, document.getElementById('root'));