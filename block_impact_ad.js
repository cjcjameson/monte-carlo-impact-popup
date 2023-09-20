// Define the pattern using a regular expression
const idPattern = /^hs-overlay-cta-\d+$/;

// Get all elements with an ID attribute
const elementsWithId = document.querySelectorAll('[id]');

// Iterate over the elements
elementsWithId.forEach((element) => {
  // Check if the ID matches the pattern
  if (idPattern.test(element.id)) {
    // Remove the element
    element.remove();
  }
});
