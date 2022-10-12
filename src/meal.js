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
  ingredients.push(ingredient);
  for (var i = 0; i < ingredients.length - 1; i++) {
    if (ingredient === ingredients[i]) {
      ingredients.pop();
    }
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


