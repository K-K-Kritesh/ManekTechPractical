import {ACTION_TYPES} from '../../Actions';

const initialState = {
  Login: true,
  AllData: [],
};

const PracticalProject = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.RESTAURANT.LOGIN:
      return {...state, Login: action.payload};
    case ACTION_TYPES.RESTAURANT.RESTAURANT_LIST:
      return {...state, AllData: action.payload};
    default:
      return state;
  }
};

export default PracticalProject;
