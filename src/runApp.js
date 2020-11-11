import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import App from './components/App.jsx';

export default () => {
  render(
    <App />,
    document.getElementById('root'),
  );
};
