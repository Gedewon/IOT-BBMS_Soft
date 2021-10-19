import React, { Component, useState } from 'react';
import { Input, Label } from 'reactstrap';
import { withFirebase } from '../../components/Firebase';
import { AuthUserContext } from '../Session';
const Read = ({ id }) => {
  const [value, setValue] = useState('OFF');

  return <ReadButton value={value} setValue={setValue} id={id} />;
};
class ReadBase extends Component {
  static contextType = AuthUserContext;
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const user = this.context;
    console.log(this.props.firebase);
    this.props.firebase
      .Status(this.props.id, user.deviceId)
      .on('value', (snapshot) => {
        console.log('RESULTTTTT');
        const usersObject = snapshot.val();
        console.log('USEROBJECT::', usersObject);

        this.props.setValue(usersObject);
      });
  }
  render() {
    return (
      <>
        <Label>{this.props.value}</Label>
      </>
    );
  }
}
const ReadButton = withFirebase(ReadBase);
export default Read;
