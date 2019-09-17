import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import './App.css';
import Header from './components/header/header.component';

const style = {
  // border: '1px solid red'
}

const App = () => (
  <I18nextProvider i18n={i18n}>
    <div style={style} id='app'>
      <Header />
    </div>
  </I18nextProvider>

);

export default App;
