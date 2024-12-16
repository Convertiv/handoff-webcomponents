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
customElements.define('person-details', /** @class */ (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        var _this = _super.call(this) || this;
        var template = document.getElementById('person-template');
        var templateContent = template.content;
        var shadowRoot = _this.attachShadow({ mode: 'open' });
        var style = document.createElement('style');
        style.textContent = "\n        div { padding: 10px; border: 1px solid gray; width: 200px; margin: 10px; }\n        h2 { margin: 0 0 10px; }\n        ul { margin: 0; }\n        p { margin: 10px 0; }\n        ::slotted(*) { color: gray; font-family: sans-serif; }\n      ";
        shadowRoot.appendChild(style);
        shadowRoot.appendChild(templateContent.cloneNode(true));
        return _this;
    }
    return class_1;
}(HTMLElement)));
//# sourceMappingURL=main.js.map