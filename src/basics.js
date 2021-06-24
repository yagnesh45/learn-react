// Code used before in index.js for learning purpose.

import React from 'react'
import ReactDom from 'react-dom'

// JSX Rules:
// - in JSX, attributes used in tags must be capitialize, for example, if we want to use onclick attribute, it will be onClick. Other than that, className attribute should be used instead of class.
// - Every tags must be closed, even the self-closing tags like img, input and br.
// - In function used for render() method, code is written in JSX(similar syntax to HTML), but it calls functions internally to create a component by coverting JSX code to function codes example given in arrow function code below.
// - return only one component from the function, we can't return adjactive components for example <div>...</div><div>...</div>, we can use <React.Fragment> or short hand - <>...</> to wrap all the elements into one component.

// Creating a component using normal function
// function name must be Capitialize to render on page using render() method
/*function FirstComponent() {
  // form here, function must return only a single component.
  // This way of rendering elements is much easier than the bottom function one using createElement().
  return (
    <div>
      <h1>Hey this is first component here</h1>
    </div>
    // <div> ... </div> we can't return such multiple components, but only a single whole component.
  );
} */

// Creating a component using arrow function
// const FirstComponent = () => {
//   return React.createElement("div", {}, React.createElement("h1", {}, "Hello World from function component"));
// }

// ReactDom.render(<FirstComponent />, document.getElementById('root'));

// For nested Components
const PersonHeading = () => <h1>Yagnesh Patil.</h1> // Implicit returning of component
const Description = () => { // Explicit returning of component
  return (
    <p>This is description of the heading</p>
  );
}

const arrayOfNames = ['Yagnesh', 'Patil', 'is', 'always', 'here'];
const newNames = arrayOfNames.map((name) => {
  return (
    <h1>{name}</h1>
  );
})


function ParentComponent() {
  // let jsVar = 56;
  return (
    <div>
      {/*  Reusing the components */}
      <PersonHeading />
      <Description />
      {/* {jsVar + jsVar} {/* Using curly braces we can use javascript code }
      inside JSX, that means we can use expression and variables
      in JSX using curly braces. */}

      {/* example of Array's map() function */}
      {newNames}
    </div>
  );
}

ReactDom.render(<ParentComponent />, document.getElementById('root'));