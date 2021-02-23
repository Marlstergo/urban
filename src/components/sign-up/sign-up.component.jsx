import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.compnent';
import Button from '../button/button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';


class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit= async (e)=>{
        e.preventDefault();


        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword){
            alert("passwords don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            
            await createUserProfileDocument(user, {displayName})
            
            this.setState({displayName:'', email: '', password: '', confirmPassword: ''});
            
            
        } catch(error){
            console.error(error);
        }

        
    }

    handleChange=(e)=>{
        const {value, name}= e.target;
        this.setState({[name] : value});
    }

    
    render(){
        return(
            <div className='sign-up'>
                <h2 className='title'>CREATE NEW ACCOUNT NOW</h2>
                <span>sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" id="display-name"  placeholder='' value={this.state.displayName} handleChange={this.handleChange}
                    label= 'Display Name'
                    />
                    <FormInput type="email" name="email" id="email" required placeholder='' value={this.state.email} handleChange={this.handleChange}
                    label= 'Email'
                    />
                    
                    <FormInput type="password" name="password" id="password" required placeholder='' value={this.state.password} handleChange={this.handleChange}
                    label = 'password'
                    key='initial'
                    />
                    <FormInput type="password" name="confirmPassword" id="confirm-password" required placeholder='' value={this.state.confirmPassword} handleChange={this.handleChange}
                    label = 'Confirm password'
                    key='final'
                    />
                    <div className='sign-up-button'>
                        <Button type="submit"  >
                            sign up
                        </Button>
                    </div>
                    
                </form>
            </div>
        )
    }
}


export default SignUp