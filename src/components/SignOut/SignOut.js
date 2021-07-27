import React from 'react';
import { Button } from 'reactstrap';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <Button
    className="btn-round"
    color="danger"
    href="/"
    onClick={firebase.doSignOut}
  >
    <i className="nc-icon nc-spaceship"></i> Sign Out
  </Button>
);

export default withFirebase(SignOutButton);
