import { createSelector } from 'reselect';

const selectMenu = (state) => state.menu;

export const selectMenuGroups = createSelector(
  [selectMenu],
  (selectMenu) => selectMenu.menuGroups
);

export const selectCategoriesForOverview = createSelector(
  [selectMenuGroups],
  (categories) => Object.keys(categories).map((key) => categories[key])
);

export const selectCategory = (categoryUrlParam) =>
  createSelector(
    [selectMenuGroups],
    (categories) => categories[categoryUrlParam]
  );
