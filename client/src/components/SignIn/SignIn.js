import React, { Component } from 'react';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignIn;
