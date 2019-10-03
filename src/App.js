import React from 'react';
import './App.scss';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from './components/header/header.component';
import AboutUs from './components/about/about-component';
import Service from './components/service/service.component';
import ShowcaseTreks from './components/showcase-treks/showcase-treks.component';
import ImageGallery from './components/image-gallery/image-gallery.component';
import Team from './components/team/team.component';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <div id='app'>
        <Header />
        <AboutUs />
        <Service />
        <ImageGallery />
        <ShowcaseTreks />
        <Team />
      </div>
    </I18nextProvider>

  )
};

export default App;
