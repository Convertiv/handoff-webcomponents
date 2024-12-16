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
var WordCount = /** @class */ (function (_super) {
    __extends(WordCount, _super);
    function WordCount() {
        var _this = 
        // Always call super first in constructor
        _super.call(this) || this;
        // count words in element's parent element
        var wcParent = _this.parentNode;
        function countWords(node) {
            var text = node.innerText || node.textContent;
            return text.trim().split(/\s+/g).filter(function (a) { return a.trim().length > 0; }).length;
        }
        var count = "Words: " + countWords(wcParent);
        // Create a shadow root
        var shadow = _this.attachShadow({ mode: 'open' });
        // Create text node and add word count to it
        var text = document.createElement('span');
        text.textContent = count;
        // Append it to the shadow root
        shadow.appendChild(text);
        // Update count when element content changes
        _this.parentNode.addEventListener('input', function () {
            text.textContent = "Words: " + countWords(wcParent);
        });
        return _this;
    }
    return WordCount;
}(HTMLParagraphElement));
// Define the new element
customElements.define('word-count', WordCount, { "extends": 'p' });
//# sourceMappingURL=main.js.map