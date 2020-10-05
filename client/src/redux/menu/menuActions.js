import { UPDATE_MENU } from './menuActionTypes';

export const updateMenu = (menuGroups) => ({
  type: UPDATE_MENU,
  payload: menuGroups,
});
