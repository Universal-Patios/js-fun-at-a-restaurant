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




module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}
