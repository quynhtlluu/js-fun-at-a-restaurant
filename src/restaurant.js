function createRestaurant(name) {
    return {
      name: name,
      menus: menus = {
        breakfast: [],
        lunch: [],
        dinner: []
      }
  }
}

function addMenuItem(restaurant, menuItem) {
  var menuItemType = menuItem.type;
  if (restaurant.menus[menuItemType].includes(menuItem) === false) {
    restaurant.menus[menuItemType].push(menuItem)
  }
}

function removeMenuItem(restaurant, menuItem, menuType) {
  var restaurantMenu = restaurant.menus[menuType];
  for (var i = 0; i < restaurantMenu.length; i++) {
    if (restaurantMenu[i].name === menuItem) {
      restaurantMenu.splice(i, 1);
      return `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`
    }
  }
  return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}