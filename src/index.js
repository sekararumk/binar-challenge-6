import React from 'react';
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import binarStore from './store/store'
import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={binarStore}>
      <App />
    </Provider>
  </React.StrictMode>
);