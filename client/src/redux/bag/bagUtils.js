export const addItemToBag = (bagItems, itemToAdd) => {
  const existingBagItem = bagItems.find(
    (bagItem) => bagItem.id === itemToAdd.id
  );

  if (existingBagItem) {
    return bagItems.map((bagItem) =>
      bagItem.id === itemToAdd.id
        ? { ...bagItem, quantity: bagItem.quantity + 1 }
        : bagItem
    );
  }

  return [...bagItems, { ...itemToAdd, quantity: 1 }];
};
