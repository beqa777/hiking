import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.scss';
import './resources/sass/social-media.scss';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/HomePage.component';
import TripDetail from './pages/trip-detail/trip-detail.component';

const App = () => {
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

// const mapStateToProps = createStructuredSelector({
//     s
// });

// const mapDispatchToProps = dispatch => ({
//   setScroll: (scroll) => dispatch(setScroll(scroll));
// })

export default App;
// export default connect(null, mapDispatchToProps)(App);
