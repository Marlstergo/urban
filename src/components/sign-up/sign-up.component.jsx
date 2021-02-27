import React, {useState} from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.compnent';
import Button from '../button/button.component'
import {connect} from 'react-redux'
import { signUpWithEmailStart } from '../../redux/user/user.action';

const SignUp = ({signUp}) => {
    
    const [userCredentials, setCredetials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const {displayName, email, password, confirmPassword} = userCredentials
    const handleSubmit= async (e)=>{
        e.preventDefault();

        
        

        if (password !== confirmPassword){
            alert("passwords don't match");
            return;
        }
        try {
            // const {user} = await auth.createUserWithEmailAndPassword(email, password);
            
            // await createUserProfileDocument(user, {displayName})
            
            // this.setState({displayName:'', email: '', password: '', confirmPassword: ''});
            signUp(email, password, displayName)
            
        } catch(error){
            console.error(error);
        }

        
    }

    const handleChange=(e)=>{
        const {value, name}= e.target;
        // this.setState({[name] : value});
        setCredetials({...userCredentials, [name] : value})
    }

    
    
        return(
            <div className='sign-up'>
                <h2 className='title'>CREATE NEW ACCOUNT NOW</h2>
                <span>sign up with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput type="text" name="displayName" id="display-name"  placeholder='' value={displayName} handleChange={handleChange}
                    label= 'Display Name'
                    />
                    <FormInput type="email" name="email" id="email" required placeholder='' value={email} handleChange={handleChange}
                    label= 'Email'
                    />
                    
                    <FormInput type="password" name="password" id="password" required placeholder='' value={password} handleChange={handleChange}
                    label = 'password'
                    key='initial'
                    />
                    <FormInput type="password" name="confirmPassword" id="confirm-password" required placeholder='' value={confirmPassword} handleChange={handleChange}
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


const mapDispatchToProps = dispatch =>({
    signUp: (email, password, displayName) => dispatch(signUpWithEmailStart({email, password, displayName}))
})

export default connect(null, mapDispatchToProps)(SignUp)