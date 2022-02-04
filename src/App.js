import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
//import Form from 'react-jsonschema-form';
import Form from "@rjsf/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import { datasheetSchemaObject } from './datasheet.js';
 
const handleSaveToPC = (jsonData,filename) => {
  const fileData = JSON.stringify(jsonData);
  const blob = new Blob([fileData], {type: "text/plain"});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  console.log("download datasheet");
  link.download = `${filename}.json`;
  link.href = url;
  link.click();
}

const sendToRAMP = (jsonData,filename) => {
    console.log("--- Send Datasheet to RAMP");

}

function onFormSubmit (event) {
    console.log("---Form submitted---");
    console.log(event.formData);
    sendToRAMP(event.formData, "datasheet");
}

function saveToFile (event) {
    console.log("---Save To file---");
    console.log(event.formData);
    handleSaveToPC(event.formData, "datasheet");
}

function App() {
ReactDOM.render(
<div className="col-md-offset-3 col-md-6">
    <Form 
       schema={datasheetSchemaObject}
       onSubmit={onFormSubmit}
    />
    <button type="submit" className='btn btn-success'>Load from File</button>
    <button type="submit" onClick={saveToFile} className="btn btn-success">Save to File</button>
</div>,
    document.getElementById("root")
);
return null;
}

export default App;
