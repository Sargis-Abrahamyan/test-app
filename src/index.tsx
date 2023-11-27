import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from './GlobalStyles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import reportWebVitals from './reportWebVitals';
import { theme } from './GlobalStyles/theme';
import App from './Components/App/App';
import { store } from './Store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
