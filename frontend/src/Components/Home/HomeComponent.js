
import React from "react";
import {
  Icon,
  Intent,
  Button,
  Text,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Alignment,
  Classes
} from "@blueprintjs/core";


export class Home extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  // Handles Log Out Event
  handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }

  // Handles navigation to Edit Page
  editProfile = () => {
    this.props.history.push("edit-profile");
  }

  render() {
    const style = {
      margin: 15,
    };
    return (
      <Text className="home-page">
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <Icon icon="menu" iconSize={18} style={{ paddingRight: 5 }} intent={Intent.PRIMARY} />
            <NavbarHeading>Home</NavbarHeading>
            <NavbarDivider />
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <Button intent={Intent.PRIMARY} rightIcon="log-out" className={Classes.MINIMAL} onClick={this.handleLogout} text="Log Out" />
          </NavbarGroup>
        </Navbar>
        <Text className="login">
          <h5> Welcome to Home </h5>
          <p> Click on the following button to Edit your Profile. </p>
          <Button text="Edit Profile" rightIcon="edit" intent={Intent.PRIMARY} onClick={this.editProfile} style={style} />
        </Text>
      </Text>
    );
  }
}

