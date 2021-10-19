// import React, { useState, Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import { compose } from 'recompose';
// import { Document, Page, pdfjs } from 'react-pdf';

// export default class DocumentPage extends Component {
//   state = { numPages: null, pageNumber: 1 };

//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   };

//   goToPrevPage = () =>
//     this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
//   goToNextPage = () =>
//     this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));

//   render() {
//     pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
//     const { pageNumber, numPages } = this.state;

//     return (
//       <div>
//         <nav>
//           <button onClick={this.goToPrevPage}>Prev</button>
//           <button onClick={this.goToNextPage}>Next</button>
//         </nav>

//         <div style={{ width: 600 }}>
//           <Document
//             options={{ workerSrc: 'pdf.worker.js' }}
//             file="./Efoye.pdf"
//             onLoadSuccess={this.onDocumentLoadSuccess}
//           >
//             <Page pageNumber={pageNumber} width={600} />
//           </Document>
//         </div>

//         <p>
//           Page {pageNumber} of {numPages}
//         </p>
//       </div>
//     );
//   }
// }

import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import Efoyedoc from './Efoye_new.pdf';

const center = {
  margin: 'auto',
  width: '60%',
  border: '5px solid #FFFF00',
  padding: '10px',
};
export default function DocumentPage(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  //   const { pdf } = props;

  return (
    <div style={center}>
      <Document
        file={Efoyedoc}
        options={{ workerSrc: '/pdf.worker.js' }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
}
