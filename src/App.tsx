import React from 'react';

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';

import NotesPage from './components/NotesPage';
import TimerPage from './components/TimerPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className='Navgation-bar'>
          <div className='nav-btn'>
            <NavLink to="/timer">Таймер</NavLink>
          </div>
          <div className='nav-btn'>
            <NavLink to="/notes">Заметки</NavLink>
          </div>
          <div className='nav-btn'>
            <NavLink to="/stats">Статистика</NavLink>
          </div>
          <div className='nav-btn'>
            <NavLink to="/profile">Профиль</NavLink>
          </div>
        </div>
        
        <Routes>
          <Route path={'/timer'} element={<TimerPage></TimerPage>}/>
          <Route path={'/notes'} element={<NotesPage></NotesPage>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
