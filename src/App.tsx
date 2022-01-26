import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import FullDescriptionFilmContainer from './components/full-description-film/fullDescription';
import HeaderContainer from './components/header/Header-container';
import MainContainer from './components/main/mainContainer';

function App() {
  return (
    <div className="container">
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<MainContainer />}/>
        <Route path="/films/:id" element={<FullDescriptionFilmContainer/>} />
        <Route path="/actors/:id" element={<FullDescriptionFilmContainer/>} />

      </Routes>
    </div>
  );
}

export default App;
