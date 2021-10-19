import React, { Component } from 'react';

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  Container,
  Row,
  Col,
} from 'reactstrap';

// core components
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../../components/Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

function RegisterPage() {
  document.documentElement.classList.remove('nav-open');
  React.useEffect(() => {
    document.body.classList.add('register-page');
    return function cleanup() {
      document.body.classList.remove('register-page');
    };
  });
  return (
    <>
      {/* <ExamplesNavbarLogin /> */}
      <div
        className="page-header"
        style={{
          backgroundImage:
            'url(' +
            require('assets/img/login-image.jpg').default +
            ')',
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">SignUp</h3>

                {/* <Form className="register-form">
                  <label>Full Name</label>
                  <Input placeholder="Full Name" type="text" />
                  <label>Email</label>
                  <Input placeholder="Email" type="email" />
                  <label>Password</label>
                  <Input placeholder="Password" type="password" />
                  <label>Confirm Password</label>
                  <Input placeholder="confirm Password" type="password" />
                  <label> Admin</label>
                  <Input type="checkbox"></Input>
                  <Button block className="btn-round" color="danger">
                    Sign Up
                  </Button>
                </Form> */}
                <SignUpForm />
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{' '}
            <i className="fa fa-heart heart" /> by AAiT Student's
          </h6>
        </div>
      </div>
    </>
  );
}

//initial state's
const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  error: null,
  deviceId: '',
};

//Error code
const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { username, email, passwordOne, isAdmin, deviceId } =
      this.state;
    const roles = {};

    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
          roles,
          deviceId,
        });
      })
      .then(() => {
        return this.props.firebase.doSendEmailVerification();
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onChangeDevice = (event) => {
    this.setState({ deviceId: event.target.value });
  };
  // onChangeCheckbox = (event) => {
  //   this.setState({ [event.target.name]: event.target.checked });
  // };
  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isAdmin,
      error,
      deviceId,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';
    return (
      <Form className="register-form" onSubmit={this.onSubmit}>
        <label>Full Name</label>
        <Input
          name="username"
          value={username}
          onChange={this.onChange}
          placeholder="Full Name"
          type="text"
        />
        <label>Email</label>
        <Input
          name="email"
          value={email}
          onChange={this.onChange}
          placeholder="Email"
          type="email"
        />
        <label>Password</label>
        <Input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          placeholder="Password"
          type="password"
        />
        <label>Confirm Password</label>
        <Input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          placeholder="confirm Password"
          type="password"
        />
        {/* commenting out admin side's */}
        {/* <label> Admin :</label>
        <Input
          name="isAdmin"
          checked={isAdmin}
          onChange={this.onChangeCheckbox}
          type="checkbox"
        ></Input> */}
        <br />
        <label>Device Id:</label>
        <Input
          name="deviceId"
          value={deviceId}
          onChange={this.onChange}
          placeholder="Device ID"
          type="text"
        />
        <Button
          block
          className="btn-round"
          color="danger"
          disabled={isInvalid}
          type="submit"
        >
          Sign Up
        </Button>
        {error && <p>{error.message}</p>}
      </Form>
    );
  }
}

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default RegisterPage;
export { SignUpForm };
