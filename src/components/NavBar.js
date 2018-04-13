import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class NavBar extends Component {
  rightNavs = () => {
    return (
      <Menu.Menu position='right'>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing>
          <Link to='/'>
            <Menu.Item name='Episodes' />
          </Link>
          <Link to='/houses'>
            <Menu.Item name='Houses' />
          </Link>
          <Link to='/characters'>
            <Menu.Item name='Characters' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

export default NavBar;
