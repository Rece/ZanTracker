function addTrackingLink(n,t){"use strict";var c=n.selectionText;addNewTrackingLink(c)}var contexts=["selection"];chrome.contextMenus.create({title:"Add tracking link",contexts:[contexts[0]],onclick:addTrackingLink});