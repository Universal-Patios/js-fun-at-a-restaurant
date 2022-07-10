function takeOrder (orderNumber, ordersArray ) {
    if (ordersArray.length < 3) {
    ordersArray.push(orderNumber)
  }
}

function refundOrder(orderID, ordersArray ) {
  for (var i = 0; i < ordersArray.length ; i++) {
    if (ordersArray[i].orderNumber === orderID) {
      ordersArray.splice(i, 1)
    }
  }
}

function listItems(deliveryOrders) {
  var itemName = []
  for (var i = 0; i < deliveryOrders.length; i++) {
    itemName.push(deliveryOrders[i].item);
  }
   return itemName.join(', ')
}


function searchOrder (deliveryOrders, items) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === items) {
      return true
    }
  }
return false
}




module.exports = {
  takeOrder,
  refundOrder,
  listItems,
   searchOrder
}
