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
  Icon,
  InputGroup, Label
} from "@blueprintjs/core";


export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  // Handles navigation to Register Page
  register = () => {
    this.props.history.push("register");
  }

  // Handles Login
  handleClick(event) {
    // get login details from user
    var payload = {
      "email": this.state.username,
      "password": this.state.password
    }
    // API Request
    axios.post(requesturl + 'api/v1/login', payload)
      .then((response) => {
        if (response.data.status === 200) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          this.props.history.push("home");
        }
      })
      .catch(function (error) {
        alert("Invalid Credentials")
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
            <Icon icon="log-in" iconSize={18} style={{ paddingRight: 5 }} intent={Intent.PRIMARY} />
            <NavbarHeading>Login</NavbarHeading>
            <NavbarDivider />
          </NavbarGroup>
        </Navbar>
        <Text className="login login-div">
          <Label text="Username"/>
          <InputGroup type="text" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
          <Label text="Password"/>
          <InputGroup type="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
          <Button text="Login" intent={Intent.SUCCESS} rightIcon="saved" style={style} onClick={(event) => this.handleClick(event)} />
          <Button text="Register" intent={Intent.PRIMARY} rightIcon="edit" onClick={this.register} />
        </Text>
      </Text>
    );
  }
}
