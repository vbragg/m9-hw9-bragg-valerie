class Desserts {
  constructor(type, calories) {
    this.type = type;
    this.calories = calories;
  }
}

class Icecream extends Desserts {
  constructor(type, calories, flavor, scoops) {
    super(type, calories);
    this.flavor = flavor;
    this.scoops = scoops;
  }
  includeSpoon() {
    console.log('Here is your spoon!');
  }
}

const vanillaIcecream = new Icecream('Icecream', 340, 'Vanilla', 3);

console.log(vanillaIcecream);
vanillaIcecream.includeSpoon();
