import React, {useState } from 'react';
import { connect } from 'react-redux';

import {
  emailSignInStart,
  googleSignInStart,
} from '../../redux/user/userActions';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import './SignIn.scss';

const SignIn = ({emailSignInStart, googleSignInStart}) => {
const [user, setUser] = useState({email:'', password:''})
const {email, password} = user;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailSignInStart(user);
      setUser({ email: '', password: '' });
    } catch (err) {
      console.error(err);
    }
  };


    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="email"
            id="email"
            label="email"
            value={email}
            handleChange={handleChange}
            required
          />

          <FormInput
            type="password"
            name="password"
            id="password"
            label="password"
            value={password}
            handleChange={handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (userCredentials) =>
    dispatch(emailSignInStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignIn);
