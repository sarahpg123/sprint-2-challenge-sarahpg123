# Challenge 3: Booleanize Object

### Objective
Develop the `booleanize` function so it transforms an object's properties based on the criteria listed (see requirements below). This function will loop over each property in the object and apply certain transformations to its values, while also handling edge cases related to property names.

### Function
```javascript
function booleanize(obj)
```

#### Parameters
- **obj:** An object with any number of properties.

## Requirements
1. Transform any value of zero (`0`) into the boolean `false`.
2. Transform any value of one (`1`) into the boolean `true`.
3. If a value is `null`, delete the entire key-value pair from the object.
4. If any _property_ name exceeds 9 characters, return the string `"shorten all prop names to 9 chars or less"`.

### Maintain Original Object Structure
- Ensure no unintended changes are made to the object's structure or other properties.

### Examples

#### Example 1
```javascript
let obj = {
  keyZero: 0,
  keyOne: 1,
  keyNull: null,
  keyTwo: 2
};

let result = booleanize(obj);
console.log(result);
```
Expected Output:
```javascript
{
  keyZero: false,
  keyOne: true,
  keyTwo: 2
}
```

#### Example 2
```javascript
let obj = {
  veryLongPropertyName: 0,
  keyOne: 1
};

let result = booleanize(obj);
console.log(result);
```
Expected Output:
```javascript
"shorten all prop names to 9 chars or less"
```

### Canvas References
- [Objects](https://bloomtech.instructure.com/courses/2785/modules/items/690416)
- [Arrays](https://bloomtech.instructure.com/courses/2785/modules/items/690423)
- [Basic Looping](https://bloomtech.instructure.com/courses/2785/modules/items/690435)
- [Falsiness](https://bloomtech.instructure.com/courses/2784/modules/items/690467)
- [Conditional Code](https://bloomtech.instructure.com/courses/2784/modules/items/690479)


