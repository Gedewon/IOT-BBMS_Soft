import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

import {
  withAuthorization,
  withEmailVerification,
} from '../../components/Session';
// import { UserList, UserItem } from '../Users';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';
import { UserList, UserItem } from '../../components/Users';

const AdminPage = () => (
  <div className="section section-dark">
    <Container>
      <Row>
        <Col className="ml-auto mr-auto text-center" md="8">
          <h1 className="title mx-auto">Admin</h1>

          <Switch>
            <Route
              exact
              path={ROUTES.ADMIN_DETAILS}
              component={UserItem}
            />
            <Route exact path={ROUTES.ADMIN} component={UserList} />
          </Switch>
        </Col>
      </Row>
    </Container>
  </div>
);

const condition = (authUser) =>
  authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(AdminPage);
