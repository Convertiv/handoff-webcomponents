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
customElements.define('summary-display', /** @class */ (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        var _this = _super.call(this) || this;
        var template = document.getElementById('summary-display-template');
        var templateContent = template.content;
        var shadowRoot = _this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(templateContent.cloneNode(true));
        var items = Array.from(_this.querySelectorAll('li'));
        var descriptions = Array.from(_this.querySelectorAll('p'));
        items.forEach(function (item) {
            handleClick(item);
        });
        function handleClick(item) {
            item.addEventListener('click', function () {
                items.forEach(function (item) {
                    item.style.backgroundColor = 'white';
                });
                descriptions.forEach(function (description) {
                    updateDisplay(description, item);
                });
            });
        }
        function updateDisplay(description, item) {
            description.removeAttribute('slot');
            if (description.getAttribute('data-name') === item.textContent) {
                description.setAttribute('slot', 'choice');
                item.style.backgroundColor = '#bad0e4';
            }
        }
        var slots = _this.shadowRoot.querySelectorAll('slot');
        slots[1].addEventListener('slotchange', function (e) {
            var nodes = slots[1].assignedNodes();
            console.log("Element in Slot \"" + slots[1].name + "\" changed to \"" + nodes[0].outerHTML + "\".");
        });
        return _this;
    }
    return class_1;
}(HTMLElement)));
//# sourceMappingURL=main.js.map