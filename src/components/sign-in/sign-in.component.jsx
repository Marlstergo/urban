import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.compnent';
import Button from '../button/button.component'
import { signInWithGoogle } from '../../firebase/firebase.util';


class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
            email: '',
            password: ''
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange=(e)=>{
        const {value, name}= e.target;
        this.setState({ [name] : value});
    }

    
    render(){
        return(
            <div className='sign-in'>
                <h2 className='title'>I ALREADY HAVE AN ACCOUNT</h2>
                <span>sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" id="email" required placeholder='' value={this.state.email} handleChange={this.handleChange}
                    label= 'Email'
                    />
                    
                    <FormInput type="password" name="password" id="password" required placeholder='' value={this.state.password} handleChange={this.handleChange}
                    label = 'password'
                    />
                    <div className='buttons'>
                        <Button type="submit"  >
                            Sign in
                        </Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}sign in with Google{' '}
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignIn