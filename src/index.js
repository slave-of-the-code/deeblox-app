import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import DeebloxApp from 'DeebloxApp';
import 'index.scss';

ReactDOM.render(
  <Suspense fallback={<div>Loading</div>}>
    <DeebloxApp />
  </Suspense>,
  document.querySelector('#root')
);
