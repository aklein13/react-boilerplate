import { IHomeState } from './redux/modules/home/reducers';
import { RouterState } from 'react-router-redux';

export interface IAppState {
  routing: RouterState;
  home: IHomeState;
}
