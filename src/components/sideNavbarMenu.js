import React, { Component } from 'react'

class SideNavbarMenu extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    return (
        <ul class="sidenav-menu">
            <li class="sidenav-item">
            <a class="sidenav-link" href="">
                <i class="fas fa-chart-area fa-fw me-3"></i><span>Webiste traffic</span></a>
            </li>
            <li class="sidenav-item">
            <a class="sidenav-link"><i class="fas fa-cogs fa-fw me-3"></i><span>Settings</span></a>
            <ul class="sidenav-collapse">
                <li class="sidenav-item">
                <a class="sidenav-link">Profile</a>
                </li>
                <li class="sidenav-item">
                <a class="sidenav-link">Account</a>
                </li>
            </ul>
            </li>
            <li class="sidenav-item">
            <a class="sidenav-link"><i class="fas fa-lock fa-fw me-3"></i><span>Password</span></a>
            <ul class="sidenav-collapse">
                <li class="sidenav-item">
                <a class="sidenav-link">Request password</a>
                </li>
                <li class="sidenav-item">
                <a class="sidenav-link">Reset password</a>
                </li>
            </ul>
            </li>
       </ul>
    )
  }
}

export default SideNavbarMenu;
