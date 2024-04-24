# Challenge 5: Normalize Phone Number (OPTIONAL)

### Objective
Create the `normalizePhoneNumber` function that takes a string representing a ten-digit number and returns it formatted in a specific phone number format.

### Function
```javascript
function normalizePhoneNumber(num)
```

#### Parameters
- **num:** A string representing a ten-digit phone number.

## Requirements
1. Format the input string `num` into the phone number format: "(XXX) XXX-XXXX".
2. You can assume that all entries will be exactly 10 digits long.

### Examples

#### Example 1
```javascript
let result = normalizePhoneNumber("9876543210");
console.log(result);
```
Expected Output:
```javascript
"(987) 654-3210"
```

#### Example 2
```javascript
let result = normalizePhoneNumber("1111111111");
console.log(result);
```
Expected Output:
```javascript
"(111) 111-1111"
```

### Edge Cases
- Ensure that the function accurately checks for the length of the input string and validates each character.

### Hints
- Consider using a template "(XXX) XXX-XXXX" and loop backwards, replacing 'X' with digits from the input number.

## Canvas References
- [Arrays](https://bloomtech.instructure.com/courses/2785/pages/arrays?module_item_id=690423)
- [Basic Array Methods](https://bloomtech.instructure.com/courses/2785/modules/items/690462)