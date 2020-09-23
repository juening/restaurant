import ONLINE_MENU_ITMES from './onlineMunuData';

const INITIAL_STATE = {
  menuGroups: ONLINE_MENU_ITMES,
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default menuReducer;
