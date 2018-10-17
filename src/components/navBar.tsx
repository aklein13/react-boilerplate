import * as React from 'react';
import './layout.scss';
import { Link } from 'react-router';

class NavBar extends React.Component<any, any> {
  public render() {
    return (
      <header style={{ width: '15vh' }}>
        <Link to="/">Homepage</Link>
      </header>
    );
  }
}

export default NavBar;
