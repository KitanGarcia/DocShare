import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '';
      password: '';
    };
  }

  //explain
  onChange = (field) => (e) this.setState({[field]: e.target.value});


  render() {
    return (<div>
      <TextField floatingLabelText = "Username" onChange = {this.onChange('username')} value = {this.state.username}
      <TextField floatingLabelText = "Password" onChange = {this.onChange('password')} value = {this.state.password}
    </div>)
  }
}
