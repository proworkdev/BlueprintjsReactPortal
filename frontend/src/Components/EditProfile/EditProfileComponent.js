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


export class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    let user = JSON.parse(localStorage.getItem("user"));
    this.state = {
      first_name: user.first_name,
      last_name: user.last_name
    }
  }

  // Handles Modifications of Profile
  handleClick = () => {
    // Get profile details of user
    var payload = {
      "first_name": this.state.first_name,
      "last_name": this.state.last_name
    };
    // Set token as header for API Request
    let headers = {
      headers: { Authorization: localStorage.getItem("token") }
    };
    // API Request
     axios.post(requesturl + 'api/v1/edit', payload, headers)
      .then((response) => {
        if (response.data.status === 200) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
          this.props.history.push("home");
        }
      })
      .catch(function (error) {
        alert("Changes could not be Saved")
        console.log(error);
      }); 
  }

  // Handles Log Out Event
  handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }

  // Handles Navigation to Password Page
  changePassword = () => {
    this.props.history.push("change-password");
  }

  render() {
    const style = {
      margin: 15,
    };
    
    return (
      <Text className="login-page edit-profile">
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
          <Icon icon="menu" iconSize={18} style={{ paddingRight: 5}}intent={Intent.PRIMARY} /> 
            <NavbarHeading>Edit Profile</NavbarHeading>
            <NavbarDivider />
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <Button intent={Intent.PRIMARY} rightIcon="log-out" className={Classes.MINIMAL} onClick={this.handleLogout} text="Log Out" />
          </NavbarGroup>
        </Navbar>
        <Text className="container-fluid">
          <Text className="login-password">
            <Button text="Change Password" rightIcon="edit" intent={Intent.WARNING} style={style} onClick={this.changePassword} />
          </Text>
          <Text className="login">
            <Label text="First Name"/>
            <InputGroup type="text" value={this.state.first_name} onChange={(e) => this.setState({ first_name: e.target.value })} />
            <Label text="Last Name"/>
            <InputGroup type="text" value={this.state.last_name} onChange={(e) => this.setState({ last_name: e.target.value })} />
            <Button text="Save Changes" intent={Intent.SUCCESS} rightIcon="saved" style={style} onClick={this.handleClick} />
          </Text>
        </Text>
      </Text>
    );
  }
}
