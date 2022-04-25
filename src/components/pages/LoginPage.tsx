import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import config from '../../config'

interface LoginPageProps {

}

const LoginPage: React.FunctionComponent<LoginPageProps> = () => {
    const navigate = useNavigate();
    const [login, setlogin] = useState('');
    const [password, setpassword] = useState('');

    React.useEffect(() => {
        console.log(login, "/", password)
    })

    async function handleSubmit() {
        try {
            let req = await axios.post(config.BACKEND_ADDRES + '/auth/login', {
                "login": login.toString(),
                "password": password.toString(),
            })
            if (req.data.token) {
                localStorage.setItem('token', req.data.token);
            }
            navigate('/')
        } catch (e) {
            console.log(e)
        }
    }

    return (<div className='login-page-main'>
        <div className='login-page-container'>
            <div className='login-page-title'>
                <span>Log In</span>
            </div>
            <div className="login-page-body">
                <form className='login-page-form' onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>
                    <div className="login-page-block">
                        <input placeholder='User name' onChange={(e) => setlogin(e.target.value)} />
                    </div>
                    <div className="login-page-block">
                        <input placeholder='Password' type={'password'}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                    </div>
                    <div className="login-page-footer">
                        <button>Log in</button>
                        <button onClick={(e) => {
                            e.preventDefault();
                            navigate('/register');
                        }}>Registration</button>
                    </div>
                </form>
            </div>
        </div>
    </div>);
}

export default LoginPage;