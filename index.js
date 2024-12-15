class Breakfast {
    constructor(food, drink) {
      this.food = food;  
      this.drink = drink; 
    }
  }
  
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;  // Set salad for lunch
      this.soup = soup;    // Set soup for lunch
      this.drink = drink;  // Set drink for lunch
    }
  }

  class Dinner {
    #dessert;  // Declare private field for dessert
  
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;   // Set salad for dinner
      this.soup = soup;     // Set soup for dinner
      this.entree = entree; // Set entree for dinner
      this.#dessert = dessert;  // Set private dessert
    }
  
    // Getter method for dessert (private field)
    get dessert() {
      return this.#dessert;
    }
  }
  