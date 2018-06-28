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
  Classes,
  Icon,
  InputGroup, Label
} from "@blueprintjs/core";


export class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      confirm: ""
    }
  }

  // Handles Changing Password
  handleClick = () => {
    // if new & confirm password matches
    if (this.state.password === this.state.confirm) {
      // Get new Password
      var payload = {
        "password": this.state.password
      }
      // Set headers for API Request
      let headers = {
        headers: { Authorization: localStorage.getItem("token") }
      };
      // API Request
      axios.post(requesturl + 'api/v1/changepassword', payload, headers)
        .then((response) => {
          if (response.data.status === 200) {
            alert("Password Successfully Changed")
            this.props.history.push("home");
          }
        })
        .catch(function (error) {
          alert("Password change Unsuccessful")
          console.log(error);
        });

    } else {
      alert("Passwords do not match. Please try again.")
    }
  }

  // Handles Log Out Event
  handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }

  render() {
    const style = {
      margin: 15,
    };
    return (
      <Text className="login-page">
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <Icon icon="menu" iconSize={18} style={{ paddingRight: 5 }} intent={Intent.PRIMARY} />
            <NavbarHeading>Change Password</NavbarHeading>
            <NavbarDivider />
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <Button intent={Intent.PRIMARY} rightIcon="log-out" className={Classes.MINIMAL} onClick={this.handleLogout} text="Log Out" />
          </NavbarGroup>
        </Navbar>
        <Text className="login">
          <Label text="New Password" />
          <InputGroup type="password" onChange={(e) => this.setState({ password: e.target.value })} />
          <Label text="Confirm Password" />
          <InputGroup type="password" onChange={(e) => this.setState({ confirm: e.target.value })} />
          <Button text="Save Changes" intent={Intent.SUCCESS} rightIcon="saved" style={style} onClick={this.handleClick} />
        </Text>
      </Text>
    );
  }
}
