import React from "react";
import { requesturl } from '../../common/constant'
import axios from "axios";
import {
  Button,
  Intent,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Alignment,
  Text,
  Icon, Label, InputGroup
} from "@blueprintjs/core";


export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  }

  // Handles navigation to Login Page
  login = () => {
    this.props.history.push("login");
  }

  // Handles Registrations
  handleClick = () => {
    // get details of user
    var payload = {
      "first_name": this.state.first_name,
      "last_name": this.state.last_name,
      "email": this.state.email,
      "password": this.state.password,
    }
    // API Request
    axios.post(requesturl + 'api/v1/register', payload)
      .then((response) => {
        if (response.data.status === 200) {
          this.props.history.push("login");
        }
      })
      .catch(function (error) {
        alert("Registration Unsuccessful");
        console.log(error);
      });
  }

  render() {
    const style = {
      margin: 15,
    };
    return (
      <Text className="login-page">
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <Icon icon="edit" iconSize={18} style={{ paddingRight: 5}}intent={Intent.PRIMARY} /> 
            <NavbarHeading>Register</NavbarHeading>
            <NavbarDivider />
          </NavbarGroup>
        </Navbar>
        <Text className="login page">
          <Label text="First Name"/>
          <InputGroup type="text" value={this.state.first_name} onChange={(e) => this.setState({ first_name: e.target.value })} />
          <Label text="Last Name"/>
          <InputGroup type="text" value={this.state.last_name} onChange={(e) => this.setState({ last_name: e.target.value })} />
          <Label text="Email"/>
          <InputGroup type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
          <Label text="Password"/>
          <InputGroup type="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
          <Button text="Register" intent={Intent.SUCCESS} rightIcon="saved" style={style} onClick={this.handleClick} />
          <Button text="Login" intent={Intent.PRIMARY} rightIcon="log-in" onClick={this.login} />
        </Text>
      </Text>
    );
  }
}
