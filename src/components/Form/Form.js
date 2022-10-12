import Button from "./Button";
import Input from "./Input";

// map over array of strings and return input component of each one
// map is a must have for react- do more practice with map
export default ({ fields, button }) => `
  <form class="mx-auto mt-2 max-w-xs">
    ${fields.map((field) => Input({ label: field })).join("")}
    ${Button(button)}
  </form>
`;

// form has several childern-button and input
// the fields and button is getting passed into it
// app passes prop to form that passes from of the info to form
