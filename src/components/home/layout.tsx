import * as React from 'react';
import {connect} from 'react-redux';

class HomeLayout extends React.Component<any, any> {
  public renderHome() {
    return (
      <div>
        <h1>Welcome to Sample website.</h1>
        <p>
          This website helps you search for desired offer.
        </p>
      </div>
    );
  };

  public render() {
    return this.renderHome();
  }
}

export default HomeLayout;
