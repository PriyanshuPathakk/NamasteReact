//const heading =  React.createElement("h1" , {id : "heading"} , "Hello World From React!");

// creating a HTML structure using core react

/* <div id="parent">
        <div id="child1">
            <h1>I am H1 in child1</h1>
            <h2>I am an H2 in child1</h2>
        </div>
        <div id="child2">
            <h1>I am H1 in child2</h1>
            <h2>I am H2 in child2</h2>
        </div>

    </div> */
    import React from "react";
    import ReactDOM from "react-dom/client";

const parent = React.createElement("div" , {id:"parent"} , [
    React.createElement("div" , {id : "child1"} , [
        React.createElement("h1" , {} , "I am H1 in child1"), 
        React.createElement("h2" , {} , "I am H2 in child1")]),

    React.createElement("div" , {id : "child2"} , [
        React.createElement("h1" , {} , "I am H1 in child2"), 
        React.createElement("h2" , {} , "I am H2 in child2")])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(parent);
