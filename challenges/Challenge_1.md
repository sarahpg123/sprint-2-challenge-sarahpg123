# Challenge 1: Profile Activation

A company's website has many user profiles. These profiles can either be active (i.e., they can use the website) or inactive. A profile can be set to inactive for a variety of reasons, and the company wants to have the reasons recorded for analytical purposes. If an inactive profile is set back to active, the reason for the inactivity is no longer needed and can be removed.

### Objective 
Implement the profileActivation function to manage the activation status of user profiles on a company's website. This function will toggle a profile's active status and handle reasons for inactivity.

### Function
```
function profileActivation(profile, reason)
```
#### Parameters
- profile: An object representing a user profile.
- reason (optional): A string describing the reason for inactivity.

#### Profile Object Structure
```
{
  active: boolean, // true for active, false for inactive
  reason: string   // description of inactivity reason, if any
}
```

The profile is considered active if the `active` prop is true and inactive if the `active` prop is false. If the `active` prop is false, a `reason` prop must be present (i.e., not undefined)

## Requirements
   1. If the input profile is **active**, set it to **inactive** and assign the provided `reason` to the profile. The updated profile should be returned.
   2. If the input profile is **inactive**, set it to **active** and remove the `reason` property from the profile. The updated profile should be returned.
   3. If a profile passed in is active and no `reason` is provided, return `"confirm status manually"` and do not modify the profile.

### Examples and Expected Outputs

#### Example 1: Activating a Profile
```javascript
let testProfile = {
  active: false,
  reason: "Not logged in for 30 days"
};

let result = profileActivation(testProfile);
console.log(result); 
```

#### Expected Output
```
{ active: true }
```

#### Example 2: Deactivating a Profile
```javascript
let testProfile = {
  active: true,
  reason: undefined
};

let result = profileActivation(testProfile, "Not logged in for 30 days");
console.log(result);
```

#### Expected Output
 ```
 { active: false, reason: "Not logged in for 30 days"}
 ```

#### Example 3: Missing Reason on Active Profile
```javascript
let testProfile = {
  active: true,
  reason: undefined
};

let result = profileActivation(testProfile);
console.log(result); 
```

#### Expected Output
```
"confirm status manually"
```


### Canvas References
- [Objects](https://bloomtech.instructure.com/courses/2785/modules/items/690416)

