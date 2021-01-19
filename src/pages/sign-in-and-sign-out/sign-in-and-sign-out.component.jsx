import React from 'react';
import './sign-in-and-sign-out.style.scss'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component';

const Login =()=>(
    <div className='register'>
        <div className='sign-in'>
            <SignIn></SignIn>
        </div>
        <div className='sign-up'>
            <SignUp></SignUp>
        </div>
    </div>
)


export default Login