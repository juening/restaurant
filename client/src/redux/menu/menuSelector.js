import { createSelector } from 'reselect';

const selectMenu = (state) => state.menu;

export const selectMenuGroups = createSelector(
  [selectMenu],
  (selectMenu) => selectMenu.menuGroups
);

export const selectCategory = (categoryUrlParam) =>
  createSelector(
    [selectMenuGroups],
    (categories) => categories[categoryUrlParam]
  );
