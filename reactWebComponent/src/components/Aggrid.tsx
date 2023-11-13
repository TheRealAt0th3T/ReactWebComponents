import { useState } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Aggrid = () => {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ]);

  const [columnDefs] = useState<ColDef[]>([
    { field: "make" },
    { field: "model" },
    { field: "price" }
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
    <AgGridReact 
      rowData={rowData} 
      columnDefs={columnDefs}
    />
  </div>
  );
};

export default Aggrid;