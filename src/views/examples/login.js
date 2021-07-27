import React, { Component } from 'react';
import { compose } from 'recompose';
import { withFirebase } from '../../components/Firebase';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

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
                <h3 className="title mx-auto">Welcome</h3>
                <div className="social-line text-center">
                  {/* <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="facebook"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button> */}
                  <SignInFacebook />

                  <SignInGoogle />

                  {/* <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button> */}
                  {/* <Button
                    className="btn-neutral btn-just-icon"
                    color="twitter"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button> */}
                  <SignInTwitter />
                </div>
                {/* <Form className="register-form">
                  <label>Email</label>
                  <Input placeholder="Email" type="text" />
                  <label>Password</label>
                  <Input placeholder="Password" type="password" />
                  <Button block className="btn-round" color="danger">
                    Sign In
                  </Button>
                </Form> */}
                <SignInForm />

                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="/pw-forget"
                    // onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>

                <div className="">
                  <Button
                    className="btn-link"
                    color="info"
                    href="/signup"
                    // onClick={(e) => e.preventDefault()}
                  >
                    Don't have an account? Sign Up
                  </Button>
                </div>
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

//define the state's
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS =
  'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <Form onSubmit={this.onSubmit} className="register-form">
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
          name="password"
          value={password}
          onChange={this.onChange}
          placeholder="Password"
          type="password"
        />
        <Button
          disabled={isInvalid}
          type="submit"
          block
          className="btn-round"
          color="danger"
        >
          Sign In
        </Button>
        {error && <p>{error.message}</p>}
      </Form>
    );
  }
}

// sign in using google
class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = (event) => {
    this.props.firebase
      .doSignInWithGoogle()
      .then((socialAuthUser) => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.user.displayName,
          email: socialAuthUser.user.email,
          roles: {},
        });
      })
      .then(() => {
        this.setState({ error: null });
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

  render() {
    const { error } = this.state;

    return (
      <>
        <Button
          // type="submit"
          className="btn-neutral btn-just-icon mr-1"
          color="google"
          // href="#pablo"
          onClick={this.onSubmit}
        >
          <i className="fa fa-google-plus" />
        </Button>
        {error && <p>{error.message}</p>}
      </>
    );
  }
}

//sign with facebook
class SignInFacebookBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = (event) => {
    this.props.firebase
      .doSignInWithFacebook()
      .then((socialAuthUser) => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.additionalUserInfo.profile.name,
          email: socialAuthUser.additionalUserInfo.profile.email,
          roles: {},
        });
      })
      .then(() => {
        this.setState({ error: null });
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

  render() {
    const { error } = this.state;

    return (
      <>
        <Button
          className="btn-neutral btn-just-icon mr-1"
          color="facebook"
          // href="#pablo"
          onClick={this.onSubmit}
        >
          <i className="fa fa-facebook-square" />
        </Button>
        {error && <p>{error.message}</p>}
      </>
    );
  }
}

//sign in with twitter
class SignInTwitterBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = (event) => {
    this.props.firebase
      .doSignInWithTwitter()
      .then((socialAuthUser) => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.additionalUserInfo.profile.name,
          email: socialAuthUser.additionalUserInfo.profile.email,
          roles: {},
        });
      })
      .then(() => {
        this.setState({ error: null });
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

  render() {
    const { error } = this.state;

    return (
      <>
        <Button
          className="btn-neutral btn-just-icon"
          color="twitter"
          // href="#pablo"
          onClick={this.onSubmit}
        >
          <i className="fa fa-twitter" />
        </Button>
        {error && <p>{error.message}</p>}
      </>
    );
  }
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

const SignInGoogle = compose(
  withRouter,
  withFirebase,
)(SignInGoogleBase);

const SignInFacebook = compose(
  withRouter,
  withFirebase,
)(SignInFacebookBase);

const SignInTwitter = compose(
  withRouter,
  withFirebase,
)(SignInTwitterBase);

export default RegisterPage;

export { SignInForm, SignInGoogle, SignInFacebook, SignInTwitter };
