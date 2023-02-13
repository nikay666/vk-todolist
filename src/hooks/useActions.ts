import { useDispatch } from 'react-redux';

import { bindActionCreators } from 'redux';
import { listActions } from '~/store/list.slice';

import { userActions } from '~/store/user.slice';

const allActions = {
  ...userActions,
  ...listActions
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
