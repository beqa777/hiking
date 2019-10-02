import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import './App.scss';
import Header from './components/header/header.component';
import AboutUs from './components/about/about-component';
import CarouselSlider from 'react-carousel-slider';
import WithCarouselHolder from './components/carousel-holder/with-carousel-holder.component';
import BackgroundImage from './components/background-image/background-image.component';
import Service from './components/service/service.component';
import ShowcaseTreks from './components/showcase-treks/showcase-treks.component';


const App = () => {
  const accEleConfig = {
    button: false
  };

  let imageSources = [
    'https://i.ibb.co/y8hYdxm/trip1-small.jpg',
    'https://i.ibb.co/HtkHCV7/trip2-small.jpg',
    'https://i.ibb.co/nm03YWr/trip3-small.jpg',
    'https://i.ibb.co/kBkLf01/trip4-small.jpg',
    'https://i.ibb.co/mvtQ09j/trip5-small.jpg',
    'https://i.ibb.co/NYVCH66/trip6-small.jpg',
    'https://i.ibb.co/ZzbKvhk/trip7-small.jpg',
    'https://i.ibb.co/6mHcLkx/trip8-small.jpg',
    'https://i.ibb.co/68SLYmq/trip9-small.jpg'
  ];

  const sliderBoxStyleConf = {
    height: '200px',
    width: '100%',
    background: "white"
  };

  let data = imageSources.map((imageUrl, index) => (
    WithCarouselHolder(BackgroundImage)({ elWidth: '175px', elHeight: '175px', imageUrl, style: { marginTop: '10px' } })
  ));



  return (
    <I18nextProvider i18n={i18n}>
      <div id='app'>
        <Header />
        <AboutUs />
        <Service />
        <CarouselSlider
          itemsStyle={{ margin: '0px 10px', height: '100%', background: 'white' }}
          sliderBoxStyle={sliderBoxStyleConf}
          textBoxStyle={{ background: 'white' }}
          accEle={accEleConfig}
          slideCpnts={data} />

        <ShowcaseTreks />


      </div>
    </I18nextProvider>

  )
};

export default App;
