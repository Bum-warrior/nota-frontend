import React, {useEffect, useState, useContext} from 'react';

import logo from './logo.svg';
import './scss/App.scss';
import { BrowserRouter, useNavigate, Navigate, NavLink, Route,  Routes} from 'react-router-dom';

import NotesPage from './components/pages/NotesPage';
import TimerPage from './components/pages/TimerPage';
import TestPage from './components/pages/TestPage';
import ModalWindow from './components/modal/ModalWindow';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';


interface AuthContextType{
  authStatus: any,
  login: (login : String, password : String) => void,
  logout: () => void,
}

function App() {
  document.title="Nota";
  const [isAuth, setisAuth] = useState(false)
  let authCtx : AuthContextType = {
    authStatus: isAuth,
    login: () => {

    }, 
    logout: () => {
      document.cookie = '';
      setisAuth(false);
    },
  } 
  const AuthContext = React.createContext(authCtx)
  useEffect(() =>{
    console.log(document.cookie)
  })
  

  return (
    <BrowserRouter>
      <div data-theme='dark' className='main-container'>
        <div className='navgation-bar-wrapper'>
          <div className='navgation-bar'>
            <div className='nav-btn'>
              <span className='nav-title'>
              Nota
              </span>
            </div>
            <div className='nav-btn'>
              <div className='nav-profile'>
                <div>Settings</div>
              </div>
            </div>
          </div>
        </div>
        {
          
        }
        <Routes>
          <Route path={'/'}
          element={<NotesPage/>}/>
          <Route path={"/register"} element={<RegisterPage/>}/>
          <Route path={"/login"} element={<LoginPage/>}/>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
