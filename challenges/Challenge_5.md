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


NOTES: 

Brainstorm: 
OKay sooooo we need to split it in to a length. Wtih the length you have to define the location of the array in num. so something like
 "(`$num[0] + num[1] + num[2])+" " +"num[3] + num[4] + num[5]" + "-" + "num[6] + num[7] + num[8] + num[9]"
Above is what is needed to be returned but maybe theres a way to simplify the array and place it in as a string. 
If it ony takes 10 digits (and wasnt already assumed) I would need to set the parameters of the number length to 10 (but its already done for me)


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