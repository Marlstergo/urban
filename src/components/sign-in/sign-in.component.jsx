import React, { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.compnent';
import Button from '../button/button.component'
// import { auth, signInWithGoogle } from '../../firebase/firebase.util';

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.action";
import { connect } from 'react-redux';


const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [userCredential, setCredential] = useState({
        email: '', 
        password: ''
    })

    const {email, password} = userCredential

    const handleSubmit= async (e)=>{
        e.preventDefault();
        // const { email, password} =  this.state
        // try{
        //     await auth.signInWithEmailAndPassword(email, password)
        // }catch(error){
        //     console.log(error)
        // }
        // this.setState({email: '', password: ''});
        
        
        emailSignInStart(email, password)
    }
    
    const handleChange=(e)=>{
        const {value, name}= e.target;
        // this.setState({ [name] : value});
        setCredential({...userCredential, [name] : value})
    }

    
    
        return(
            <div className='sign-in'>
                <h2 className='title'>I ALREADY HAVE AN ACCOUNT</h2>
                <span>sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput type="email" name="email" id="sign-in-email" required placeholder='' value={email} handleChange={handleChange}
                    label= 'Email'
                    />
                    
                    <FormInput type="password" name="password" id="sign-in-password" required placeholder='' value={password} handleChange={handleChange}
                    label = 'password'
                    />
                    <div className='buttons'>
                        <Button type="submit" >
                            Sign in
                        </Button>
                        <Button type= 'button' onClick={googleSignInStart} isGoogleSignIn>
                            {' '}sign in with Google{' '}
                        </Button>
                    </div>
                </form>
            </div>
        )
    }


const mapDispatchToProps = dispatch =>({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({email, password}))
})
export default connect(null, mapDispatchToProps)(SignIn)