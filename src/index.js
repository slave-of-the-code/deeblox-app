import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import DeebloxApp from './DeebloxApp';
import './index.css';

/* ReactDOM.render(
  <React.StrictMode>
    <DeebloxApp />
  </React.StrictMode>,
  document.querySelector('#root')
); */

ReactDOM.render(
  <Suspense fallback={<div>Loading</div>}>
    <DeebloxApp />
  </Suspense>,
  document.querySelector('#root')
);
