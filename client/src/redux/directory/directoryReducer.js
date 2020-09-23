const INITIAL_STATE = {
  sections: [
    {
      title: 'APPETIZERS',
      imageUrl: 'https://i.ibb.co/qMX96jL/Shrimppearsummerrolls1.jpg',
      id: 1,
      linkUrl: 'menu/appetizers',
    },
    {
      title: 'SOUPS AND SALADS',
      imageUrl: 'https://i.ibb.co/0hRYrCW/Shrimpnoodlesoup.jpg',
      id: 2,
      linkUrl: 'menu/soupsandsalads',
    },
    {
      title: 'DRINKS',
      imageUrl: 'https://i.ibb.co/YPXwC4m/Drinks.jpg',
      id: 3,
      linkUrl: 'menu/drinks',
    },
    {
      title: 'ENTREES',
      imageUrl: 'https://i.ibb.co/n6SS55W/Entree.jpg',
      id: 4,
      linkUrl: 'menu/entrees',
      size: 'large',
    },
    {
      title: 'CHEF RECOMMENDATIONS',
      imageUrl: 'https://i.ibb.co/Z64FvPV/Chef.jpg',
      id: 5,
      linkUrl: 'menu/chefrecommendations',
      size: 'large',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
