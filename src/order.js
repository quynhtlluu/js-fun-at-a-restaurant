var deliveryOrders = [];
function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order);
  }
}

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (orderNumber === deliveryOrders[i].orderNumber) {
      deliveryOrders.splice(i, 1)
    }
  }
}

function listItems(deliveryOrders){
  var items = ""
  for (i = 0; i < deliveryOrders.length; i++){
    if (i === deliveryOrders.length - 1){
      items = items + deliveryOrders[i].item
    } else {
      items = items + deliveryOrders[i].item + ", "
    }
  }
  return items
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}