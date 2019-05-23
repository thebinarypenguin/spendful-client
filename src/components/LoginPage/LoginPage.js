import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import UserContext from '../../contexts/UserContext';

import './LoginPage.css';

class LoginPage extends React.Component {

  static contextType = UserContext;

  static defaultProps = {
    location:{},
    history:{
      push: () => { },
    },
  }

  constructor(props) {
    super(props);

    this.state = {
      errors: [],
    };

    this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
  }


  handleLoginSuccess = (token) => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/dashboard'

    this.context.processLogin(token)
    history.push(destination);
  }

  handleLoginFailure = (errors) => {
    this.setState({errors});
  }

  render () {

    return(
      <section className="login-form">

        {this.state.errors ? <div className="alert-error">{this.state.errors}</div> : ''}

        <ul className="demo-credentials link-sm">
          <li>Demo email: <strong>demo@spendful.com</strong></li>
          <li>Demo password: <strong>password</strong></li>
        </ul>

        <LoginForm onSuccess={this.handleLoginSuccess} onFailure={this.handleLoginFailure} />

        <Link className="link-sm" to="/">Don't have an account?</Link>

      </section>
    )
  }
}

export default LoginPage;
