function nameMenuItem(menuItemName) {
    this.menuItemName = menuItemName;
    return "Delicious " + menuItemName
}

function createMenuItem(name, price, type) {
   menuItem = {
    name: name,
    price: price,
    type: type
  }
  return menuItem
}

var ingredients = [];
function addIngredients(ingredient, ingredients) {
  if (ingredients.includes(ingredient)) {
  } else {
    ingredients.push(ingredient);
  }
}


function formatPrice(initialPrice) {
  var initialPrice = "$" + menuItem.price;
  return initialPrice
}

function decreasePrice() {
  menuItem.price = menuItem.price - (menuItem.price * 0.10);
  return menuItem.price
}

function createRecipe(title, ingredients, menuItemType) {
  recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


