import * as React from 'react';
import './layout.scss';
import NavBar from './navBar';
import { checkMobile } from './common/helpers';

interface IState {
  mobile: boolean;
}

class Layout extends React.Component<any, IState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      mobile: false,
    };
  }

  public manageMobile = () => {
    const isMobile = checkMobile();
    this.setState({ mobile: isMobile });
  };

  public componentWillMount() {
    this.manageMobile();
    window.onresize = this.manageMobile;
  }

  public render() {
    return (
      <div className="container">
        <NavBar />
        <section className="content" style={{ width: '85%' }}>
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default Layout;
