import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { tennisZoneStore } from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={tennisZoneStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
