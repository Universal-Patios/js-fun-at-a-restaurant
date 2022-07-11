function createRestaurant(restaurantName) {
  return  {
    name: restaurantName,
    menus: {
        breakfast: [],
        lunch: [],
        dinner: []
    }
  }
}

function addMenuItem (restaurantName,itemName) {
    restaurantName.menus.lunch.push(itemName)
}



module.exports = {
  createRestaurant,
   addMenuItem,
  // removeMenuItem
}
