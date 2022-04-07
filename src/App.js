import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
//import Form from 'react-jsonschema-form';
import Form from "@rjsf/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import { datasheetSchemaObject } from './datasheet.js';
import axios from 'axios';

var operation = 0;

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
    if(operation === 0)
       sendToRAMP(event.formData, "datasheet");
    else if (operation === 1)
       handleSaveToPC(event.formData, "datasheet");
}



class DigitalDataSheetForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { formData: {} };
        console.log("DataSheet constructor called");
        console.log(document.getElementsByTagName('data'));
        this.loadFromFile = this.loadFromFile.bind(this);
        this.submitToRAMP = this.submitToRAMP.bind(this);
        console.log('Hello ' + process.env.REACT_APP_NAME);
    }

    submitToRAMP (event) {
        console.log("---Submit To RAMP---");
        var url = process.env.REACT_APP_RAMP_HOST+":"+process.env.REACT_APP_RAMP_PORT+process.env.REACT_APP_RAMP_ENDPOINT;
        console.log(url);
        console.log(this.state.formData);
        var data = JSON.stringify(this.state.formData)
        console.log(data);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
           if (xhr.readyState === 4) {
              console.log(xhr.status);
              console.log(xhr.responseText);
        }};

        xhr.send(data);
        operation = 0;
    }
    
    loadFromFile (event) {
        console.log("---Load From File---");
        //var formData = this.state.formData;
        operation = 2;
        var file = event.target.files[0];
        console.log(file);
        var reader = new FileReader();
        reader.readAsText(file,'UTF-8');
        // here we tell the reader what to do when it's done reading...
        var content = ""
        reader.onload = readerEvent => {
            content = readerEvent.target.result; // this is the content!
            console.log( content );
            const obj = JSON.parse(content);
            var form = document.getElementById("ddForm");
            //console.log( formData );
            this.setState({ formData: obj });
            //formData = obj;
            //console.log( formData );
        };
        //reader.onload = function(event) { onReaderLoad(event); }
    }
    
    render() {
        return <div className="col-md-offset-3 col-md-6"> <Form id="ddForm" formData={this.state.formData} schema={datasheetSchemaObject} onSubmit={onFormSubmit}> <input type="file" id="myFileInput" className='btn btn-success' onChange={this.loadFromFile} /> <button type="submit" onClick={this.submitToRAMP} className='btn btn-success'>Submit to RAMP</button> <button type="submit" onClick={saveToFile} className="btn btn-success">Save to File</button> </Form></div> ;
    }
}

function saveToFile (event) {
    console.log("---Save To file---");
    operation = 1;
}

function App() {
    console.log("Starting App");
    ReactDOM.render(<DigitalDataSheetForm />, document.getElementById("root"));
    console.log('Env ' + process.env)
    return null;
}

export default App;
