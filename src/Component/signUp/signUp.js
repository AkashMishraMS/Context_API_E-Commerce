import React from "react";
import  "./signUp.scss";
import FormInput from "../formInput/formInput";
import CustomBtn from "../CustomeButton/customBtn";
// import { SignInWithGoogle } from "../../firebase/utils";


class SignUp extends React.Component {
    
    state = {
        email:'',
        password:'',
        confirmPassword:''
    }
    handleChange = (e) => {
        const { name, value} = e.target
        this.setState({
            [name]:value
        })
    }
    handleSubmit = (e) => {
        console.log('handleSubmit')
        e.preventDefault()
        const { password, confirmPassword } = this.state

        if (password !== confirmPassword) {
             alert('password dont match')
             return
        }

        try {
            // auth 
            this.setState({ email:'', password:'', confirmPassword:''})
        } catch (e){

        }
    }

    render () {

        return (

            <div className='sign-up'>
                <h2>I do not have a account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up=form' onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email'
                    type='email'
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label = 'email'
                    required
                    />
                    <FormInput 
                    type='password'
                    name='password'
                    label = 'password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    required
                    />
                    <FormInput 
                    type='password'
                    name='confirmPassword'
                    label = 'Confirm Password'
                    value={this.state.confirmPassword}
                    handleChange={this.handleChange}
                    required
                    />
        <div className='buttons'>
        <CustomBtn type='submit'>Register</CustomBtn>
        </div>
                </form>
            </div>
        )
    }
}

export default SignUp