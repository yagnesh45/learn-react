import React from 'react'

// Book Components with passed arguments in form of object
// We can also destructure object within arugments as:
//    const BookComponentArgs = ({bookImg, bookName, bookAuthor}) =>
// and then we can directly use these variables without (.) operator. 
// Other way of destructuring object and directly use variable without (.) operator:
//    const { bookImg, bookName, bookAuthor, children } = args
const BookComponentArgs = (args) => {
    const { img, title, author } = args;
    const clickHandler = (bookTitle) => {
        console.log('Hey ' + bookTitle);
    }
    return (
        <div className="book-component">
            <img className="book-img" src={img} alt="" height="200" />
            <h3 className="book-name">{title}</h3>
            <h5 className="author">{author}</h5>
            <button className="book-button" type="button" onClick={() => clickHandler(title)}>Click me</button> {/* Use empty arrow function if we need to pass parameters to a onClick function. */}
            {/* {args.children} {/* children keyword is used for accessing children props(JFX present between BookComponent tag), In this case, <p> tag. */}
        </div>
    );
}

export default BookComponentArgs
