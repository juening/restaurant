import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { signUpStart } from '../../redux/user/userActions';


const SignUp =({signUpStart}) => {
const [user, setUser] = useState({displayName: '', email:'', password:'', confirmPassword:''})

const { displayName, email, password, confirmPassword } = user;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({...user,  [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }
    try {
      signUpStart({displayName, email, password})
    } catch (err) {
      console.error(err);
    }
  };


    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={handleChange}
            label="Your Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={handleChange}
            label="Confirm Your Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }


const mapDispatchToProps = dispatch => ({
  signUpStart:(userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps) (SignUp);
