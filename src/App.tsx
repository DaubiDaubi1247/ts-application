import React from 'react';
import './App.scss';
import HeaderContainer from './components/header/Header-container';
import MainContainer from './components/main/mainContainer';

function App() {
  return (
    <div className="container">
      <HeaderContainer/>
      <MainContainer/>
    </div>
  );
}

export default App;
