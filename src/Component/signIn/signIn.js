import React from "react";
import  "./signIn.scss";
import FormInput from "../formInput/formInput";
import CustomBtn from "../CustomeButton/customBtn";
// import { SignInWithGoogle } from "../../firebase/utils";


class SignIn extends React.Component {
    
    state = {
        email:'',
        password:''
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
        this.setState({ email:'', password:''})
    }

    render () {

        return (

            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
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
        <div className='buttons'>
        <CustomBtn type='submit'>Sign In</CustomBtn>
        <CustomBtn isGoogleSignIn>Google Sign In</CustomBtn>
        </div>
                </form>
            </div>
        )
    }
}

export default SignIn