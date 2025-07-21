let numberOfGuest = 4;

let pizzaSize;
//  small <= 2
// medium <= 5
// large

if(numberOfGuest <= 5) {
                pizzaSize = "medium";
 } else if(numberOfGuest <= 2) {
                pizzaSize = "small";
 } else {
                pizzaSize = "large";
 }
 console.log(pizzaSize)