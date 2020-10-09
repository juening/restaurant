import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  emailSignInStart,
  googleSignInStart,
} from '../../redux/user/userActions';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import './SignIn.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    try {
      const user = await emailSignInStart({ email, password });
      this.setState({ email: '', password: '' });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="email"
            id="email"
            label="email"
            value={email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            name="password"
            id="password"
            label="password"
            value={password}
            handleChange={this.handleChange}
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
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (userCredentials) =>
    dispatch(emailSignInStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignIn);
