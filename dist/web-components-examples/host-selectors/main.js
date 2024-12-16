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
var ContextSpan = /** @class */ (function (_super) {
    __extends(ContextSpan, _super);
    function ContextSpan() {
        var _this = _super.call(this) || this;
        var style = document.createElement('style');
        var span = document.createElement('span');
        span.textContent = _this.textContent;
        var shadowRoot = _this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(style);
        shadowRoot.appendChild(span);
        style.textContent = "\n        span:hover { text-decoration: underline; }\n        :host-context(h1) { font-style: italic; }\n        :host-context(h1):after { content: \" - no links in headers!\" }\n        :host(.footer) { color : red; }\n        :host { background: rgba(0,0,0,0.1); padding: 2px 5px; }\n      ";
        return _this;
    }
    return ContextSpan;
}(HTMLElement));
// Define the new element
customElements.define('context-span', ContextSpan);
//# sourceMappingURL=main.js.map