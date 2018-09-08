import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import jsPDF from 'jspdf';
import 'jspdf-autotable';
import ReactDOMServer from "react-dom/server"

class App extends Component {
  printDocument() {
  
    const pdf = new jsPDF();
    //   pdf.addImage(imgData, 'JPEG', 0, 0);   // pdf.output('dataurlnewwindow');
    var estatico = <div
      id="divToPrint"
      class="mt4"
      style={{
      backgroundColor: '#f5f5f5',
      width: '210mm',
      minHeight: '297mm',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>
      <div>TEXTO QUE NO SE VE</div>
      <div>You Can add any component here</div>
    </div>
    pdf.fromHTML(ReactDOMServer.renderToStaticMarkup(estatico))
    pdf.save("download.pdf");
    // });
  }
  render() {
    return (
      <div>
        <div className="mb5">
          <button onClick={this.printDocument}>Print</button>
        </div>
        <div
          id="divToPrint"
          className="mt4"
          style={{
          backgroundColor: '#f5f5f5',
          width: '210mm',
          minHeight: '297mm',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <div>Note: Here the dimensions of div are same as A4</div>
          <div>You Can add any component here</div>
        </div>
      </div>
    );
  }
}

export default App;
