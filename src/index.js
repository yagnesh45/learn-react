// Creating a Booklist App

import React from 'react';
import ReactDom from 'react-dom';

// Importing a css
import "./index.css";

// Named Import of BookDetailsArray object
import { bookDetailsArray } from "./BookDetails"; // Name of imported object must be same as given in export statement in the file to be imported.

// Default import of BookComponent
import BookComponentArgs from "./BookComponent"; // We can specify any name in this file for default import. Only one component/object can be exported as default.

// Importing a js file
// import "./basics.js"

function BookList() {
  return (
    <section className="book-section">
      {/* <BookComponentArgs bookImg={BookImgLocation} bookName="Alchemist" bookAuthor="paolo coelho" /> {/* Sending arguments to component */}

      {/* Use of child props - to send data to a specific component from the same components */}
      {/* <BookComponentArgs bookImg={BookDetails.img} bookName={BookDetails.title} bookAuthor={BookDetails.author}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corrupti molestias reiciendis ratione sit? Illo consequuntur nulla labore officia placeat.</p>
      </BookComponentArgs> */}

      {/* Using a list of BooksDetailsObject to iterate through it, and creating a component out of it */}
      {
        bookDetailsArray.map((bookDetails) => {
          return (
            <BookComponentArgs key={bookDetails.id} {...bookDetails}></BookComponentArgs>
          );
        })
      }

    </section>
  );
}


ReactDom.render(<BookList />, document.getElementById('root'));