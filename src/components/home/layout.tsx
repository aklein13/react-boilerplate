import * as React from 'react';
import Home from './home';

class HomeLayout extends React.Component<any, any> {
  public renderHome() {
    return (
      <div>
        <h1>Welcome to Boilerplate website.</h1>
        <Home/>
      </div>
    );
  };

  public render() {
    return this.renderHome();
  }
}

export default HomeLayout;
