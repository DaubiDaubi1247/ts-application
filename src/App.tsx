import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss'
import ActorsInfoContainer from './components/actors-info/actorsInfoContainer';
import FullDescriptionFilmContainer from './components/full-description-film/fullDescription';
import HeaderContainer from './components/header/Header-container';
import MainContainer from './components/main/mainContainer';
import UserFilmContainer from './components/main/userFilm/userFilmContainer';

function App() {
  return (
    <div className="f">
      <HeaderContainer />
      <div className="container">
      <Routes>
        <Route path="/" element={<MainContainer />}/>
        <Route path="/films/user" element={<UserFilmContainer/>}/>
        <Route path="/films/:id" element={<FullDescriptionFilmContainer/>} />
        <Route path="/actor/:id" element={<ActorsInfoContainer/>} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
