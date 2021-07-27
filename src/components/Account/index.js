import React, { Component } from 'react';
import { compose } from 'recompose';

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

import {
  AuthUserContext,
  withAuthorization,
  withEmailVerification,
} from '../Session';
import { withFirebase } from '..//Firebase';
import { PasswordForgetForm } from '../../views/examples/PasswordForget';
import PasswordChangeForm from '../../views/examples/PasswordChange';

const SIGN_IN_METHODS = [
  {
    id: 'password',
    provider: null,
  },
  {
    id: 'google.com',
    provider: 'googleProvider',
  },
  {
    id: 'facebook.com',
    provider: 'facebookProvider',
  },
  {
    id: 'twitter.com',
    provider: 'twitterProvider',
  },
];

function AccountPage() {
  document.documentElement.classList.remove('nav-open');
  React.useEffect(() => {
    document.body.classList.add('register-page');
    return function cleanup() {
      document.body.classList.remove('register-page');
    };
  });
  return (
    <>
      <div
        className="page-header"
        style={{
          backgroundImage:
            'url(' + require('assets/img/laEthio.jpg').default + ')',
        }}
      >
        <AuthUserContext.Consumer>
          {(authUser) => (
            <>
              <Container>
                <Row>
                  <h1 className="title mx-auto">
                    Account: {authUser.email}
                  </h1>
                </Row>

                <PasswordForgetForm />
                <Row>
                  <Col className="">
                    <Card className="card-register ">
                      <PasswordChangeForm />
                    </Card>
                  </Col>
                  <Col className="">
                    <Card className="card-register ">
                      <LoginManagement authUser={authUser} />
                    </Card>
                  </Col>
                </Row>
              </Container>{' '}
            </>
          )}
        </AuthUserContext.Consumer>
      </div>
    </>
  );
}
class LoginManagementBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSignInMethods: [],
      error: null,
    };
  }

  componentDidMount() {
    this.fetchSignInMethods();
  }

  fetchSignInMethods = () => {
    this.props.firebase.auth
      .fetchSignInMethodsForEmail(this.props.authUser.email)
      .then((activeSignInMethods) =>
        this.setState({ activeSignInMethods, error: null }),
      )
      .catch((error) => this.setState({ error }));
  };

  onSocialLoginLink = (provider) => {
    this.props.firebase.auth.currentUser
      .linkWithPopup(this.props.firebase[provider])
      .then(this.fetchSignInMethods)
      .catch((error) => this.setState({ error }));
  };

  onDefaultLoginLink = (password) => {
    const credential =
      this.props.firebase.emailAuthProvider.credential(
        this.props.authUser.email,
        password,
      );

    this.props.firebase.auth.currentUser
      .linkAndRetrieveDataWithCredential(credential)
      .then(this.fetchSignInMethods)
      .catch((error) => this.setState({ error }));
  };

  onUnlink = (providerId) => {
    this.props.firebase.auth.currentUser
      .unlink(providerId)
      .then(this.fetchSignInMethods)
      .catch((error) => this.setState({ error }));
  };

  render() {
    const { activeSignInMethods, error } = this.state;

    return (
      <>
        {' '}
        <h3 className="title mx-auto">SignInMethods</h3>
        <div>
          <ul style={{ listStyleType: 'none' }}>
            {SIGN_IN_METHODS.map((signInMethod) => {
              const onlyOneLeft = activeSignInMethods.length === 1;
              const isEnabled = activeSignInMethods.includes(
                signInMethod.id,
              );

              return (
                <li key={signInMethod.id}>
                  {signInMethod.id === 'password' ? (
                    <DefaultLoginToggle
                      onlyOneLeft={onlyOneLeft}
                      isEnabled={isEnabled}
                      signInMethod={signInMethod}
                      onLink={this.onDefaultLoginLink}
                      onUnlink={this.onUnlink}
                    />
                  ) : (
                    <SocialLoginToggle
                      onlyOneLeft={onlyOneLeft}
                      isEnabled={isEnabled}
                      signInMethod={signInMethod}
                      onLink={this.onSocialLoginLink}
                      onUnlink={this.onUnlink}
                    />
                  )}
                </li>
              );
            })}
          </ul>
          {error && error.message}
        </div>
      </>
    );
  }
}

const SocialLoginToggle = ({
  onlyOneLeft,
  isEnabled,
  signInMethod,
  onLink,
  onUnlink,
}) =>
  isEnabled ? (
    <Button
      type="button"
      onClick={() => onUnlink(signInMethod.id)}
      disabled={onlyOneLeft}
    >
      Deactivate {signInMethod.id}
    </Button>
  ) : (
    <Button
      type="button"
      onClick={() => onLink(signInMethod.provider)}
    >
      Link {signInMethod.id}
    </Button>
  );

class DefaultLoginToggle extends Component {
  constructor(props) {
    super(props);

    this.state = { passwordOne: '', passwordTwo: '' };
  }

  onSubmit = (event) => {
    event.preventDefault();

    this.props.onLink(this.state.passwordOne);
    this.setState({ passwordOne: '', passwordTwo: '' });
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { onlyOneLeft, isEnabled, signInMethod, onUnlink } =
      this.props;

    const { passwordOne, passwordTwo } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';

    return isEnabled ? (
      <Button
        type="button"
        onClick={() => onUnlink(signInMethod.id)}
        disabled={onlyOneLeft}
      >
        Deactivate {signInMethod.id}
      </Button>
    ) : (
      <Form onSubmit={this.onSubmit}>
        <Input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="New Password"
        />
        <Input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm New Password"
        />

        <Button disabled={isInvalid} type="submit">
          Link {signInMethod.id}
        </Button>
      </Form>
    );
  }
}

const LoginManagement = withFirebase(LoginManagementBase);

const condition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(AccountPage);
