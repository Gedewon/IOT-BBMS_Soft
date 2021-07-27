import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

import { withFirebase } from '../../components/Firebase';
import * as ROUTES from '../../constants/routes';

function PasswordForgetPage() {
  //   <div>
  //     <h1>PasswordForget</h1>
  //     <PasswordForgetForm />
  //   </div>;

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
                <h3 className="title mx-auto">
                  Reset your password:
                </h3>

                <PasswordForgetForm />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <Form onSubmit={this.onSubmit} className="register-form">
        <label>Email</label>

        <Input
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <Button
          disabled={isInvalid}
          type="submit"
          block
          color="danger"
        >
          Reset My Password
        </Button>

        {error && <p>{error.message}</p>}
      </Form>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
