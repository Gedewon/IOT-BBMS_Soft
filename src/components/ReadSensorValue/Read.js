import React, { Component, useState } from 'react';
import { Input, Label } from 'reactstrap';
import { withFirebase } from '../../components/Firebase';

const Read = ({ id }) => {
  const [value, setValue] = useState('OFF');

  return <ReadButton value={value} setValue={setValue} id={id} />;
};
class ReadBase extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.firebase
      .Status(this.props.id)
      .on('value', (snapshot) => {
        const usersObject = snapshot.val();
        console.log(usersObject);

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
