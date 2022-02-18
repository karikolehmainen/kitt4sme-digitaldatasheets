import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
//import Form from 'react-jsonschema-form';
import Form from "@rjsf/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import { datasheetSchemaObject } from './datasheet.js';

// listen 8084 port
 
var operation = 0;

// Local file selection
function buildFileSelector(){
  const fileSelector = document.createElement('input');
  fileSelector.setAttribute('type', 'file');
  fileSelector.setAttribute('multiple', 'multiple');
  return fileSelector;
}

class FileDialogue extends React.Component {
  componentDidMount(){
    this.fileSelector = buildFileSelector();
  }
  handleFileSelect = (e) => {
    e.preventDefault();
    this.fileSelector.click();
    console.log("Loading file");
  }
 
  render(){
    return <button type="submit" onClick={this.handleFileSelect} className="btn btn-success">Load from File</button>
  }
}

const handleSaveToPC = (jsonData,filename) => {
  const fileData = JSON.stringify(jsonData);
  const blob = new Blob([fileData], {type: "text/plain"});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  console.log("download datasheet");
  console.log(jsonData);
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
    console.log(operation);
    if(operation == 0)
       sendToRAMP(event.formData, "datasheet");
    else if (operation == 1)
       handleSaveToPC(event.formData, "datasheet");
}

function submitToRAMP (event) {
    console.log("---Submit To RAMP---");
    operation = 0;
}
function loadFromFile (event) {
    console.log("---Load From File---");
    //fileSelector = new FileDialogue();
    operation = 2;
}

function saveToFile (event) {
    console.log("---Save To file---");
    operation = 1;
}
//    <button type="submit" onClick={loadFromFile} className='btn btn-success'>Load from File</button>

function App() {
ReactDOM.render(
<div className="col-md-offset-3 col-md-6">
    <Form 
       schema={datasheetSchemaObject}
       onSubmit={onFormSubmit}
    >
    <FileDialogue />
    <button type="submit" onClick={submitToRAMP} className='btn btn-success'>Submit to RAMP</button>
    <button type="submit" onClick={saveToFile} className="btn btn-success">Save to File</button>
    </Form>
</div>,
    document.getElementById("root")
);
return null;
}

export default App;
