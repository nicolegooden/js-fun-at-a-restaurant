function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
  deliveryOrders.push(order);
  }
}

function refundOrder(order, deliveryOrders) {
  deliveryOrders.shift(order);
}

//Pseudocode for test file:
  //should list out all of the order items
  //3 objects are created and assigned to 3 different variables
  //the VAR deliveryOrders is assigned an array containing each of the objects
  //the VAR items is assigned a value of the listItems function
  //this function comes with a parameter of deliveryOrders (containing the array of objects)
  //ASSERT: VAR items

//Pseudocode for passing test:
  //Goal: list out all of the order items when VAR items is called
  //Goal: return the VALUE of the item KEY for each array element (passed into parameter)
  //To do this...
    //PARAMETER of deliveryOrders
    //access the item key inside each object in the three variables
    //

function listItems(deliveryOrders) {
  var allItems = "";
  for (i = 0; i < deliveryOrders.length; i++) {
    allItems += deliveryOrders[i].item;
    if ([i] < 2) {
    allItems += ", ";
    }
  }
  return allItems;
}

function searchOrder(deliveryOrders, itemName) {
  for (i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === itemName) {
      return true;
    }
  }
  return false;
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
