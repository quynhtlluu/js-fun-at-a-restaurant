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

module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}