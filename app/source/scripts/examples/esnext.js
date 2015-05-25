(() => {
  'use strict';

  // Default parameter values
  function turnRed(querySelector = '*') {

    // `const` instead of var for immutable properties
    const elements = document.querySelectorAll(querySelector);

    // Fat arrow functions
    Array.from(elements).map((element) => {
      element.setAttribute('style', 'color:red;');
    });

  }

  turnRed('p');

})();
