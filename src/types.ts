import { IAuthState } from './redux/modules/auth/reducers';
import { RouterState } from 'react-router-redux';

export interface IAppState {
  routing: RouterState;
  auth: IAuthState;
}
