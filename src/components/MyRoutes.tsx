import React from 'react'
import { Routes, RoutesProps } from 'react-router-dom';
import { BrowserRouter, useNavigate, Navigate, NavLink, Route, Link} from 'react-router-dom';
import NotesPage from './pages/NotesPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

interface RotesProps {
    
}
 
const MyRoutes: React.FunctionComponent<RotesProps> = (props: RoutesProps) => {
    return ( 
            <Routes>
                <Route path={'/'} element={<NotesPage/>}/>
                <Route path={"/register"} element={<RegisterPage/>}/>
                <Route path={"/login"} element={<LoginPage/>}/>
            </Routes>
     );
}
 
export default MyRoutes;