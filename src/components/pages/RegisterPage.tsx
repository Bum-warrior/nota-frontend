import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../config';

interface RegisterPageProps {

}

const RegisterPage: React.FunctionComponent<RegisterPageProps> = () => {
    const navigate = useNavigate();
    const [login, setlogin] = useState('');
    const [password, setpassword] = useState('');

    async function handleSubmit() {
        try {
            let req = await axios.post(config.BACKEND_ADDRES + '/auth/registration', {
                "login": login.toString(),
                "password": password.toString(),
            })
            navigate('/login')
        } catch (e) {
            console.log(e)
        }
    }
    return (<div className='login-page-main'>
        <div className='login-page-container'>
            <div className='login-page-title'>
                <span>Create account</span>
            </div>
            <div className="login-page-body">
                <form className='login-page-form' onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>
                    <div className="login-page-block">
                        <input placeholder='User name' onChange={(e) => {
                            setlogin(e.target.value);
                        }} />
                    </div>
                    <div className="login-page-block">
                        <input placeholder='Password' type={'password'} onChange={(e) => {
                            setpassword(e.target.value);
                        }} />
                    </div>
                    <div className="login-page-footer">
                        <button>Sign up</button>
                        <button className='login-page-login' onClick={(e) => {
                            e.preventDefault();
                            navigate('/login');
                        }}>Log in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>);
}

export default RegisterPage;