import * as React from 'react';
import './layout.scss';
import {Link} from 'react-router';

class NavBar extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  public navList() {
    return (
      <ul>
        <li><Link to="/">Homepage</Link></li>
      </ul>
    );
  }

  public render() {
    return (
      <header style={{width: '15vh'}}>
        {this.navList()}
      </header>
    );
  }
}

export default NavBar;
