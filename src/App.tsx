import React from 'react';

import logo from './logo.svg';
import './scss/App.scss';
import { BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';

import NotesPage from './components/pages/NotesPage';
import TimerPage from './components/pages/TimerPage';
import TestPage from './components/pages/TestPage';

function App() {
  
  return (
    <BrowserRouter>
      <div data-theme='dark' className='main-container'>
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
            <NavLink to="/test">Test</NavLink>
          </div>
        </div>
        
        <Routes>
          <Route path={'/timer'} element={<TimerPage></TimerPage>}/>
          <Route path={'/notes'} element={<NotesPage></NotesPage>}/>
          <Route path={'/test'} element={<TestPage></TestPage>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
