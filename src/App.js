import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import './App.css';
import Header from './components/header/header.component';
import AboutUs from './components/about/about-component';


const App = () => (
  <I18nextProvider i18n={i18n}>
    <div id='app'>
      <Header />
      <AboutUs />
    </div>
  </I18nextProvider>

);

export default App;
