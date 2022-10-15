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
  restaurant.menus[menuItemType].unshift(menuItem)
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}