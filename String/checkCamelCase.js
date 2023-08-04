/**description // check camelCase
 * 
 * checkCamelCase method returns true if the string in camelCase, else return the false.
 * @param {String} varName the name of the variable to check.
 * @returns `Boolean` return true if the string is in camelCase, else return false.

*/

export default function isCamelCaseWithoutRegex(str) {
  if (str.charAt(0) !== str.charAt(0).toLowerCase()) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (
      !(charCode >= 65 && charCode <= 90) && // not uppercase
      !(charCode >= 97 && charCode <= 122) // not lowercase
    ) {
      return false;
    }
  }

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // uppercase
      return true;
    }
  }

  return false;
}

export const isCamelCase = (str) => {
  if (str.charAt(0) !== str.charAt(0).toLowerCase()) {
    return false;
  }
  // Check if the string contains any non-alphabetic characters
  if (/[^a-zA-Z]/.test(str)) {
    return false;
  }
  // Check if the string contains any uppercase letters
  if (/[A-Z]/.test(str)) {
    return true;
  }
  // If the string passes all checks, it is not camelCase
  return false;
};
console.log(isCamelCase("helloWorld")); // true
console.log(isCamelCase("hello_world")); // false
console.log(isCamelCase("HelloWorld")); // false
console.log(isCamelCase("helloworld")); // false
