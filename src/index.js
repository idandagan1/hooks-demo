import React from 'react';
import { render } from 'react-dom';
import Form from './components/Form';
import { ThemeContext, themes } from './context/theme';
import './index.css';

const App = () => (
  <div>
    <ThemeContext.Provider value={themes.light.green}>
      <Form />
    </ThemeContext.Provider>
  </div>
);

render(<App />, document.getElementById('root')); // eslint-disable-line
