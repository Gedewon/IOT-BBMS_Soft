import React, { Component, useState } from 'react';
import { Input, Label } from 'reactstrap';
import { withFirebase } from '../../components/Firebase';
import { AuthUserContext } from '../Session';
import './Switch.css';
const Switch = ({ id }) => {
  const [value, setValue] = useState('OFF');

  return <SwitchButton value={value} setValue={setValue} id={id} />;
};
class SwitchBase extends Component {
  static contextType = AuthUserContext;

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const user = this.context;

    this.props.firebase
      .Controller(this.props.id, user.deviceId)
      .on('value', (snapshot) => {
        const usersObject = snapshot.val();
        console.log(usersObject);

        this.props.setValue(usersObject);
      });
  }

  onChange = (event) => {
    const user = this.context;

    //toggle the value for the UI
    this.props.setValue(this.props.value === 'OFF' ? 'ON' : 'OFF');

    //ADD THE VALUE TO THE FIREBASE REALTIME DATABASE
    const finalValue = this.props.value === 'OFF' ? 'ON' : 'OFF';
    this.props.firebase
      .Controller(this.props.id, user.deviceId)
      .set(finalValue);
  };

  render() {
    return (
      <>
        <Input
          checked={this.props.value === 'ON'}
          onChange={this.onChange}
          className="react-switch-checkbox"
          id={this.props.id}
          type="checkbox"
        />
        <Label
          style={{
            background: this.props.value == 'ON' && '#06D6A0',
          }}
          className="react-switch-label"
          htmlFor={this.props.id}
        >
          <span className={`react-switch-button`} />
        </Label>
      </>
    );
  }
}
const SwitchButton = withFirebase(SwitchBase);
export default Switch;
