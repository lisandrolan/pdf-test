import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import jsPDF from 'jspdf';
import 'jspdf-autotable';
import QRCode from 'qrcode.react'
import ReactDOMServer from "react-dom/server"
import canvg from 'canvg'
class App extends Component {
  printDocument() {

    const pdf = new jsPDF();
    //   pdf.addImage(imgData, 'JPEG', 0, 0);   // pdf.output('dataurlnewwindow');
    var svg = ReactDOMServer.renderToStaticMarkup(<QRCode renderAs='svg' value='baf19619-b38a-11e8-ae0b-061cacc9b2a2'/>);
    svg = svg
      .replace(/\r?\n|\r/g, '')
      .trim();
    var canvas = document.createElement('canvas');
    canvg(canvas, svg);
    var imgData = canvas.toDataURL('image/png');
    console.log(canvas)
    // pdf.fromHTML(ReactDOMServer.renderToStaticMarkup(estatico))
    pdf.addImage(imgData, 'PNG', 40, 40, 75, 75);
    pdf.save('test.pdf');
  }

  // });

  render() {
    return (
      <div>
        <div className="mb5">
          <button onClick={this.printDocument}>Print</button>
        </div>

      </div>
    );
  }
}

export default App;
