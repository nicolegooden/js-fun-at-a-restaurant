function createRestaurant(name){
  food = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  };
  return food;
}

function addMenuItem(restaurantType, menuItem) {
  if (!restaurantType.menus[menuItem.type].includes(menuItem)) {
    restaurantType.menus[menuItem.type].push(menuItem);
  }
}

function removeMenuItem(restaurantType, menuItemName, menuItemType) {
  if ((menuItemType == undefined) && (restaurantType.menus[menuItemName] !== [menuItemName])) {
    return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`;
  }
  for (i = 0; i < restaurantType.menus[menuItemType].length; i ++) {
    if (restaurantType.menus[menuItemType][i].name === menuItemName) {
      restaurantType.menus[menuItemType].splice(0, 1);
    }
  }
  return `No one is eating our ${menuItemName} - it has been removed from the ${menuItemType} menu!`;
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
