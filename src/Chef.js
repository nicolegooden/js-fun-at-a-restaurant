class Chef {
  constructor(name, restaurant, morning) {
    this.name = name,
    this.restaurant = restaurant,
    this.morning = morning
  }

  greetCustomer(person, morning) {
    if (morning) {
      return `Good morning, ${person}!`;
    } else {
    return `Hello, ${person}!`;
  }
}

  checkForFood(foodItem) {
    if (this.restaurant.menus.breakfast.includes(foodItem)) {
    return `Yes, we're serving ${foodItem.name} today!`;
  } else {
    return `Sorry, we aren't serving ${foodItem.name} today.`;
  }
}
};

module.exports = Chef;
