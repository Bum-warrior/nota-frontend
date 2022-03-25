import * as React from 'react';
import {useNavigate} from 'react-router-dom'

interface LoginPageProps {
    
}
 
const LoginPage: React.FunctionComponent<LoginPageProps> = () => {
    const navigate = useNavigate();
    return ( <div className='login-page-main'>
        <div className='login-page-container'>
            <div className='login-page-title'>
                <span>Log In</span>
            </div>
            <div className="login-page-body">
                <form className='login-page-form'>
                    <div className="login-page-block">
                        <input placeholder='User name'/>
                    </div>
                    <div className="login-page-block">
                        <input placeholder='Password' type={'password'}/>
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
    </div> );
}
 
export default LoginPage;