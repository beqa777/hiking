import React from 'react';
import './App.css';
import Header from './components/header/header.component';

const style = {
  // border: '1px solid red'
}

const App = () => (
  <div style={style} id='app'>
    <Header />
  </div>
);

export default App;
