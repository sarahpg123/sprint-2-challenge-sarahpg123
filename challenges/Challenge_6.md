# Challenge 6: Dice Rolls Until Three Sixes (OPTIONAL)

### Objective
Develop the `diceRolls` function that simulates the rolling of a six-sided die. It should continue rolling until it gets three sixes in a row, and then return the total number of rolls it took to achieve this.

### Function 
```javascript
function diceRolls()
```

#### Parameters
- The function does not take any arguments.

## Requirements
1. Simulate rolling a six-sided die.
2. Continue rolling until three consecutive rolls result in a six.
3. Return the total number of rolls it took to achieve three consecutive sixes.

### Implementation Hints
- Utilize `Math.random` to simulate each die roll, ensuring it returns a number from 1 to 6. You can read about how `Math.random` works [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random).
- Implement a `while(true)` loop to roll the dice indefinitely.
- Keep track of the total number of rolls (`throws`) and the consecutive number of sixes (`counter`).
- Break out of the loop once three consecutive sixes are rolled to avoid an infinite loop.

### Examples

#### Example
```javascript
let result = diceRolls();
console.log(result);
```
Expected Output:
- The output will be a number representing the total number of rolls it took to get three sixes in a row. This number will vary each time the function is run.

- Remember to avoid infinite loops by setting a proper condition to break out of the `while(true)` loop.
