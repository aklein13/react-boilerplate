import * as React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component<any, any> {
  public renderHome() {
    return (
      <div>
        <p>
          Insert your components here...
        </p>
      </div>
    );
  };

  public render() {
    return this.renderHome();
  }
}

export default Home;
