import appSlice from '../../reducers/app';
import * as asyncActions from './asyncActions';

export default {
  actions: appSlice.actions,
  asyncActions
}