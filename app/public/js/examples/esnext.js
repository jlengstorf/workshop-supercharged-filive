'use strict';

(function () {
  'use strict';

  // Default parameter values
  function turnRed() {
    var querySelector = arguments[0] === undefined ? '*' : arguments[0];

    // `const` instead of var for immutable properties
    var elements = document.querySelectorAll(querySelector);

    // Fat arrow functions
    Array.from(elements).map(function (element) {
      element.setAttribute('style', 'color:red;');
    });
  }

  turnRed('p');
})();