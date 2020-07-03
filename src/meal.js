function nameMenuItem(name) {
  return `Delicious ${name}`;
}

function createMenuItem(name, price, type) {
  var myItem = {
  name: name,
  price: price,
  type: type
};
  return myItem;
}

function addIngredients(newElement, ingredients) {
  if (!ingredients.includes(newElement)) {
    return ingredients.push(newElement);
  }
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`;
}

function decreasePrice(initialPrice) {
  var discount = (initialPrice * .10);
  var newPrice = (initialPrice - discount);
  return newPrice;
}

function createRecipe(menuItemName, ingredients, menuItemType) {
  var recipe = {
    title: menuItemName,
    ingredients: ingredients,
    type: menuItemType
  };
  return recipe;
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
