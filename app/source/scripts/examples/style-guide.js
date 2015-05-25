(() => {
  'use strict';

  let i = 0;

  // Needs a space between `while` and `(`
  while(i < 10) {
    console.log('The count is now' + i++);
  }
}).call();
