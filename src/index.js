import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import Loading from 'components/loading/Loading';
import DeebloxApp from 'DeebloxApp';

import 'index.scss';

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <DeebloxApp />
  </Suspense>,
  document.querySelector('#root')
);
