export function splitCamelCase(inputString) {
  // Use a regular expression to split at every capital letter
  let splitString = inputString.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Capitalize the first letter of each word
  splitString = splitString.charAt(0).toUpperCase() + splitString.slice(1);

  return splitString;
}
