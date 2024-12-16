"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Create a class for the element
var ExpandingList = /** @class */ (function (_super) {
    __extends(ExpandingList, _super);
    function ExpandingList() {
        var _this = this;
        // Always call super first in constructor
        // Return value from super() is a reference to this element
        self = _this = _super.call(this) || this;
        return _this;
    }
    ExpandingList.prototype.connectedCallback = function () {
        // Get ul and li elements that are a child of this custom ul element
        // li elements can be containers if they have uls within them
        var uls = Array.from(self.querySelectorAll("ul"));
        var lis = Array.from(self.querySelectorAll("li"));
        // Hide all child uls
        // These lists will be shown when the user clicks a higher level container
        uls.forEach(function (ul) {
            ul.style.display = "none";
        });
        // Look through each li element in the ul
        lis.forEach(function (li) {
            // If this li has a ul as a child, decorate it and add a click handler
            if (li.querySelectorAll("ul").length > 0) {
                // Add an attribute which can be used  by the style
                // to show an open or closed icon
                li.setAttribute("class", "closed");
                // Wrap the li element's text in a new span element
                // so we can assign style and event handlers to the span
                var childText = li.childNodes[0];
                var newSpan = document.createElement("span");
                // Copy text from li to span, set cursor style
                newSpan.textContent = childText.textContent;
                newSpan.style.cursor = "pointer";
                // Add click handler to this span
                newSpan.addEventListener("click", function (e) {
                    // next sibling to the span should be the ul
                    var nextul = e.target.nextElementSibling;
                    // Toggle visible state and update class attribute on ul
                    if (nextul.style.display == "block") {
                        nextul.style.display = "none";
                        nextul.parentNode.setAttribute("class", "closed");
                    }
                    else {
                        nextul.style.display = "block";
                        nextul.parentNode.setAttribute("class", "open");
                    }
                });
                // Add the span and remove the bare text node from the li
                childText.parentNode.insertBefore(newSpan, childText);
                childText.parentNode.removeChild(childText);
            }
        });
    };
    return ExpandingList;
}(HTMLUListElement));
// Define the new element
customElements.define("expanding-list", ExpandingList, { "extends": "ul" });
//# sourceMappingURL=main.js.map