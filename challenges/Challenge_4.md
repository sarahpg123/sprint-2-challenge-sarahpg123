# Challenge 4: Scrub Forbidden Words

### Objective
Develop the `scrub` function that takes a string of text and an array of forbidden words. The function will replace any forbidden word in the text with a string of lowercase "x" characters, each "x" replacing one letter of the forbidden word. The modified text is then returned from the function.

### Function
```javascript
function scrub(text, forbidden)
```

#### Parameters
- **text:** A string representing the text to be scrubbed.
- **forbidden:** An array of strings, each a forbidden word to be replaced in the text.

## Requirements
1. Replace each word in `text` that is included in the `forbidden` array with a string of "x" characters of equal length to the forbidden word.
2. Ensure no punctuation is used in the text.
3. If `text` is empty or there are no forbidden words, return the original text.

### Examples

#### Example 1
```javascript
let result = scrub("out of the silent planet", ["of", "silent"]);
console.log(result);
```
Expected Output:
```javascript
"out xx the xxxxxx planet"
```

#### Example 2
```javascript
let result = scrub("the ghost of the navigator", ["the"]);
console.log(result);
```
Expected Output:
```javascript
"xxx ghost of xxx navigator"
```

#### Example 3
```javascript
let result = scrub("lost somewhere in time", []);
console.log(result);
```
Expected Output:
```javascript
"lost somewhere in time"
```

#### Example 4
```javascript
let result = scrub("aces high", ["high", "aces", "hearts"]);
console.log(result);
```
Expected Output:
```javascript
"xxxx xxxx"
```

#### Example 5
```javascript
let result = scrub("", ["high", "aces"]);
console.log(result);
```
Expected Output:
```javascript
""
```

### Hint
Utilize array methods like `push`, `split`, `indexOf`, and `join` to effectively transform the text.

### Canvas References
- [Basic Array Methods](https://bloomtech.instructure.com/courses/2785/modules/items/690462)