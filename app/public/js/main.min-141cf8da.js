"use strict";(function(){var t=debug("sc:log"),e=debug("sc:verbose");document.addEventListener("click",function(n){var a=n.target;if(e("event.target: "+a.classList.toString()),a.classList.contains("code-toggle__tab")){e("The clicked element was a tab; continuing...");var i=a.getAttribute("aria-controls"),r=document.getElementById(i);e("panelID: "+i),e("#"+i+" "+(r?"was":"was not")+" found in the DOM");for(var s=a,o=!1;s&&s.parentNode&&!o;)s=s.parentNode,e("Parent element class list: "+s.classList.toString()),s.classList&&s.classList.contains("code-toggle")&&(e("Found the container element; continuing..."),o=s);if(r&&o){e("A panel and container were found; continuing...");var c=o.querySelectorAll(".code-toggle__tab"),l=o.querySelectorAll(".code-toggle__panel"),d=Array.from(c),u=Array.from(l);e("Found "+d.length+" tabs and "+u.length+" panels."),d.map(function(t){e(""+t.getAttribute("id")+" deselected."),t.setAttribute("aria-selected",!1)}),u.map(function(t){e(""+t.getAttribute("id")+" hidden."),t.setAttribute("aria-hidden",!0)}),t("Clicked "+a.getAttribute("id")+"; showing "+i+"."),a.setAttribute("aria-selected","true"),r.setAttribute("aria-hidden","false")}}})}).call();
//# sourceMappingURL=../maps/main.min-141cf8da.js.map