import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import './App.scss';
import './resources/sass/social-media.scss';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/HomePage.component';
import TripDetail from './pages/trip-detail/trip-detail.component';

const App = () => {
  const history = useHistory();
  // check if i18 default language is geo or eng, (default language is english) 
  // listen history changes
  useEffect(() => {
    const lang = localStorage.i18nextLng;
    localStorage.i18nextLng = (lang === "geo" || lang === "eng") ? lang : "eng";

    //listen history change
    history.listen(() => {
      //set window scroll to 0,0
      window.scrollTo(0, 0);
    });
  }, [history]);

  return (
    <div className="appContainer">
      <I18nextProvider i18n={i18n}>
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/trip/:tripId" component={TripDetail} />

          {/* if none of the routes matches */}
          <Route render={() => <Redirect to="/" />} />

        </Switch>

        <Footer />
      </I18nextProvider>
    </div>
  )
};

export default App;