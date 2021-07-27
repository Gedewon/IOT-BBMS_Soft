import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { Button } from 'reactstrap';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on('value', (snapshot) => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map((key) => ({
        ...usersObject[key],
        uid: key,
      }));

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div>
        <h2 className="title">Users</h2>
        {loading && (
          <div>
            <h2 className="title">Loading ...</h2>
          </div>
        )}
        <ul style={{ listStyleType: 'none' }}>
          {users.map((user) => (
            <li key={user.uid} className="title">
              <div>
                <strong>ID:</strong> {user.uid}
              </div>
              <div>
                <strong>E-Mail:</strong> {user.email}
              </div>
              <div>
                <strong>Username:</strong> {user.username}
              </div>
              <div>
                <Link
                  to={{
                    pathname: `${ROUTES.ADMIN}/${user.uid}`,
                    state: { user },
                  }}
                >
                  <Button>Details</Button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withFirebase(UserList);
