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

export const removeItemFromBag = (bagItems, itemToRemove) => {
  const existingBagItem = bagItems.find(
    (bagItem) => bagItem.id === itemToRemove.id
  );

  if (existingBagItem.quantity === 1) {
    return bagItems.filter((bagItem) => bagItem.id !== itemToRemove.id);
  }

  return bagItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
