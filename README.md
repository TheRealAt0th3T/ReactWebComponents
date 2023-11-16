Process of creating React Webcomponents and consuming them. 

Creating the React Webcomponent:




import [component name] from "./components/[component file]";
import r2wc from "@r2wc/react-to-web-component";

customElements.define("[webcomponent name]", r2wc([component name]));
customElements.define(
  "[webcomponent name]",
  r2wc([component name], [any props])
);



Consuming with PHP:


SideNotes:
- the name given to the react component has to be lowercase