
import React from "react";
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Icon, Intent, Button, Text,  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading, Alignment, Classes } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
 // or, using node-style package resolution in a CSS file: 
 import "@blueprintjs/core/lib/css/blueprint.css";
 import "@blueprintjs/icons/lib/css/blueprint-icons.css";

export class Nav extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  // Handles Log Out Event
  handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }

  render() {

    return (
          <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
              <NavbarHeading>Home</NavbarHeading>
              <NavbarDivider />
            </NavbarGroup>
            <NavbarGroup align={Alignment.RIGHT}>
              <Button intent={Intent.PRIMARY} className={Classes.MINIMAL} onClick={this.handleLogout} text="Log Out" />
              </NavbarGroup>
          </Navbar>
         
    );
  }
}
