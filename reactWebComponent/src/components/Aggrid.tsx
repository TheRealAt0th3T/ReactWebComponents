import { useState } from "react";
// import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import { dispatch } from "../api/events";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Aggrid = ({ propDisplay }: { propDisplay: string }) => {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
  ]);

  const [columnDefs] = useState<ColDef[]>([
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ]);

  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs} />
      </div>
      <div>
        <p>Prop Display Value: {propDisplay}</p>
      </div>
      <button onClick={() => dispatch("wc-event", {name: "Johnny Appleseed"})}>Test</button>
    </div>
  );
};

export default Aggrid;
