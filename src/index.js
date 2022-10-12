import Form from "./components/Form/Form";
import Header from "./components/Header";

const root = document.getElementById("root");

// there is usually app compenont that serves of top level compenoent
const App = () => {
  // State represents all moving parts of applications
  // State is an object that contains all the data of the application needs
  // State will be updated based on user input and/or data from the server
  const state = {
    title: "My Form",
    fields: ["email", "password"],
    button: {
      type: "submit",
      txt: "Submit",
    },
  };

  // whenever we can pass state from a parent componenet to a child compent
  // state can be  passed as props
  return `
    ${Header(state)}
    ${Form(state)}
  `;
};

// render the app compenent to the DOM
function render() {
  root.innerHTML = App();
}

render();
// compents are basically standalone function elements that we can pass into
// react is a library
