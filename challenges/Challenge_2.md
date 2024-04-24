# Challenge 2: MineSweeper Game

### Objective
Develop the `mineSweeper` function that evaluates a player's move in a grid-based minefield game. The function should analyze the grid position based on provided coordinates and determine if the player has landed on a safe spot or a mine.

### Function
```javascript
function mineSweeper(grid, x, y)
```

#### Parameters
- **grid:** An array of arrays representing the game grid.
- **x:** The x-coordinate (horizontal position) in the grid.
- **y:** The y-coordinate (vertical position) in the grid.

### Grid Structure
The grid consists of a 3x3 array of strings, where:
- "🟥" represents a mine.
- "🟦" represents a safe spot.

Example:
```javascript
[ 
  ["🟥", "🟦", "🟥"],
  ["🟦", "🟥", "🟥"],
  ["🟥", "🟦", "🟦"]
]
```

The grid is interpreted with `x` and `y` coordinates ranging from 1 to 3.
- `x = 1` and `y = 1` represents the top-left square.
- `x = 3` and `y = 1` represents the top-right square.
- `x = 3` and `y = 3` represents the bottom-right square.

## Requirements
1. If the coordinates land on a red square ("🟥"), return `"🟥 💀"`.
2. If the coordinates land on a blue square ("🟦"), return `"🟦 🥳"`.
3. If `x` _or_ `y` is less than 1 or greater than 3, return `"invalid coordinates"`.

### Examples

#### Example 1: Landing on a Mine
```javascript
let grid = [["🟥", "🟦", "🟥"], ["🟦", "🟥", "🟥"], ["🟥", "🟦", "🟦"]];
let result = mineSweeper(grid, 1, 1);
console.log(result); 
```

#### Expected Output
```
"🟥 💀"
```

#### Example 2: Landing on a Safe Spot
```javascript
let grid = [["🟥", "🟦", "🟥"], ["🟦", "🟥", "🟥"], ["🟥", "🟦", "🟦"]];
let result = mineSweeper(grid, 2, 3);
console.log(result); 
```

#### Expected Output
```
"🟦 🥳"
```

#### Example 3: Invalid Coordinates
```javascript
let grid = [["🟥", "🟦", "🟥"], ["🟦", "🟥", "🟥"], ["🟥", "🟦", "🟦"]];
let result = mineSweeper(grid, 4, 1);
console.log(result);
```

#### Expected Output
```
"invalid coordinates"
```

### Canvas References
- [Arrays](https://bloomtech.instructure.com/courses/2785/modules/items/690423)
- [Basic Looping](https://bloomtech.instructure.com/courses/2785/modules/items/690435)