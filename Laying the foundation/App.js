import React from "react";
import ReactDom from "react-dom/client";
import { jsx } from "react/jsx-runtime";
// JSX
/* const jsxHeading = <h1>Namaste React from JSX </h1>;
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(jsxHeading); */

// react component(Functional component => JS function)
const Title = () => (
    <h1 className="head">Namaste React from component composition </h1>
)
// you can write any JS code inside {}
const Heading = () => (
    // it is very important to Wrap the returned elements in a React Fragment (<>...</>) or a <div> while returning siblings
    <div id = "container">
    <Title/>
    {/* same as the above
    <Title></Title> */} 
    { // Again same as the above
    //Title()
    }
    <h1 className="heading">{100 + 1} Namaste React from React component </h1>
    </div>
);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Heading/>);