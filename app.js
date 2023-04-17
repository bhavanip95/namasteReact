const heading = React.createElement("h1", {id:"heading"},"Namaste React from ReactJS");
const root = ReactDOM.createRoot(document.getElementById("root"));


const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child1"},
React.createElement("h1",{id:"child2"},"i am child1")));
root.render(parent);
