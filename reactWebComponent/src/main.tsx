// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'
// // import Aggrid from './components/Aggrid.tsx'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

//FOR EXPORTING AS WEB COMPONENT TO BE LATER CONSUMED
import Aggrid from "./components/Aggrid";
import r2wc from "@r2wc/react-to-web-component";

customElements.define(
  "aggrid-wc",
  r2wc(Aggrid, { props: { propDisplay: "string" } })
);
