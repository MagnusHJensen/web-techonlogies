// Make a function called triangle, that takes a number length as an argument, and prints a triangle of that length.
// For example, triangle(5) should print:
// *
// **
// ***
// ****
// *****

function triangle(length, char) {
  for (let i = 1; i <= length; i++) {
    console.log(char.repeat(i));
  }
}

triangle(5, "#");
