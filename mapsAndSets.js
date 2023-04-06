// create the fruitInventory map
let fruitInventory = new Map([
  ["apple", 10],
  ["banana", 20],
  ["orange", 30],
]);

// update the 'apple' inventory to 15
fruitInventory.set("apple", 15);

// get the 'banana' inventory and store it in a variable
let bananaInventory = fruitInventory.get("banana");

// create the uniqueColors set
let uniqueColors = new Set(["red", "blue", "green"]);

// add the color 'yellow' to the uniqueColors set
uniqueColors.add("yellow");

// check if 'blue' is in the uniqueColors set and store the result in a variable
let hasBlue = uniqueColors.has("blue");
