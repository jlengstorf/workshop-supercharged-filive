/**
 * # main.js
 *
 * Scripts for the app. We're using some [ES6](http://bit.ly/1HAPes1) features
 * in here, which have to run through a [transpiler](http://bit.ly/1F2iiS8) to
 * ensure they'll work on all but the bleeding-edge of browsers. (See
 * `gulpfile.js` for an idea of how we're handling that automatically here.)
 */

// ES6-style [IIFE](http://bit.ly/1F2mT6T) to keep us scoped properly.
(() => {
  'use strict';

  /*
   * Create some loggers for easy console control.
   *
   * For standard logging, open the console and run:
   *
   *     debug.enable('sc:log');
   *
   * For verbose logging, use:
   *
   *     debug.enable('sc:log,sc:verbose');
   *
   * or:
   *
   *     debug.enable('sc:*');
   *
   * For more information, see the
   * [`debug` README on GitHub](http://git.io/vThJY).
   */
  const log = debug('sc:log');
  const vLog = debug('sc:verbose');

  // ## Add an event listener to handle the code view tab boxes
  document.addEventListener('click', (event) => {

    // - Create a pointer to the clicked element
    const tab = event.target;
    vLog(`event.target: ${tab.classList.toString()}`);

    // ### Ensure the clicked element was a tab
    if (tab.classList.contains('code-toggle__tab')) {

      vLog('The clicked element was a tab; continuing...');

      // - Get the panel ID from the clicked tab, then select it
      const panelID = tab.getAttribute('aria-controls');
      const panel = document.getElementById(panelID);

      vLog(`panelID: ${panelID}`);
      vLog(`#${panelID} ${!!panel ? 'was' : 'was not'} found in the DOM`);

      // ### Find the container
      // - Create variables for use in the `while` loop
      let el = tab;
      let container = false;

      // - Run a loop until the container is found or no parent node is found
      while (el && el.parentNode && !container) {

        // - Climb one step up the DOM tree
        el = el.parentNode;

        vLog(`Parent element class list: ${el.classList.toString()}`);

        // - Check if the current element is the main container
        if (el.classList && el.classList.contains('code-toggle')) {

          vLog('Found the container element; continuing...');

          // - If so, store it in `container`
          container = el;

        }

      }

      // ### Change the tab and panel states
      // - Only continue if a panel and container were found
      if (panel && container) {

        vLog('A panel and container were found; continuing...');

        // - Select all the tabs and all the panels in separate variables
        const tabsObj = container.querySelectorAll('.code-toggle__tab');
        const panelsObj = container.querySelectorAll('.code-toggle__panel');

        // - Convert `tabsObj` & `panelsObj` to arrays from array-like objects
        const tabs = Array.from(tabsObj);
        const panels = Array.from(panelsObj);

        vLog(`Found ${tabs.length} tabs and ${panels.length} panels.`);

        // - Deselect all tabs to start
        tabs.map((currentTab) => {
          vLog(`${currentTab.getAttribute('id')} deselected.`);
          currentTab.setAttribute('aria-selected', false);
        });

        // - Hide all panels next
        panels.map((currentPanel) => {
          vLog(`${currentPanel.getAttribute('id')} hidden.`);
          currentPanel.setAttribute('aria-hidden', true);
        });

        // - Output a message in the console
        log(`Clicked ${tab.getAttribute('id')}; showing ${panelID}.`);

        // - Then set the clicked tab and corresponding panel to active
        tab.setAttribute('aria-selected', 'true');
        panel.setAttribute('aria-hidden', 'false');

      }

    }

  });
}).call();
