import * as React from 'react';
import { connect } from 'react-redux';
import { simpleAction, apiCall } from '../../redux/modules/home/actions';
import { IAppState } from '../../types';

interface IProps {
  isFetching: boolean;
  sampleValue: null | string;
  simpleAction: (value: string) => void;
  apiCall: () => void;
}

// Sample Home component with basic redux action call

class Home extends React.PureComponent<IProps, any> {
  public componentDidMount() {
    setTimeout(() => this.props.simpleAction('Default value'), 1000);
    setTimeout(this.props.apiCall, 2000);
  }

  public render() {
    const { isFetching, sampleValue } = this.props;
    return (
      <div>
        <h1>Sample component</h1>
        <p>
          {!sampleValue ? 'No value' : isFetching ? 'Fetching...' : sampleValue}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    sampleValue: state.home.sampleValue,
    isFetching: state.home.isFetching,
  };
};

const mapDispatchToProps = {
  simpleAction,
  apiCall,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
