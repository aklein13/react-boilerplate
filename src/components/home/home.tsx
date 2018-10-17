import * as React from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../redux/modules/auth/actions';
import { IAppState } from '../../types';

interface IProps {
  isFetching: boolean;
  simpleAction: () => void;
}

// Sample Home component with basic redux action call

class Home extends React.PureComponent<IProps, any> {
  public componentDidMount() {
    setTimeout(this.props.simpleAction, 3000);
  }

  public render() {
    return (
      <div>
        <p>Insert your components here...</p>
        <p>{this.props.isFetching ? 'Fetching...' : 'Done'}</p>
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    isFetching: state.auth.isFetching,
  };
};

const mapDispatchToProps = {
  simpleAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
