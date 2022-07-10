function nameMenuItem(item) {
  return `Delicious ${item}`
  }


function createMenuItem(name, price, type) {
  var newItem = {
    name: name,
    price: price,
    type:type
  }
  return newItem
}


function addIngredients(item, ingredients) {
  if (!ingredients.includes(item)) {
    ingredients.push(item)
  }
}


function formatPrice(price) {
  return '$' + price
}


function decreasePrice (itemPrice) {
  return itemPrice * .90
}


function createRecipe(recipeTitle, recipeIngredients, recipeType) {
  return {
    title: recipeTitle,
    ingredients: recipeIngredients,
    type: recipeType
  }
}







module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
