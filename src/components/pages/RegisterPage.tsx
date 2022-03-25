import * as React from 'react';
import {useNavigate} from 'react-router-dom'

interface RegisterPageProps {
    
}
 
const RegisterPage: React.FunctionComponent<RegisterPageProps> = () => {
    const navigate = useNavigate();
    return ( <div className='login-page-main'>
    <div className='login-page-container'>
        <div className='login-page-title'>
            <span>Create account</span>
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
                    <button>Sign up</button>
                    <button className='login-page-login' onClick={(e) =>{
                        e.preventDefault();
                        navigate('/login');
                        }}>Log in</button>
                </div>
            </form>
        </div>
    </div>
</div> );
}
 
export default RegisterPage;