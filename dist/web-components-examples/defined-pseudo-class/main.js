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
customElements.define('simple-custom', /** @class */ (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        var _this = _super.call(this) || this;
        var divElem = document.createElement('div');
        divElem.textContent = _this.getAttribute('text');
        var shadowRoot = _this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(divElem);
        return _this;
    }
    return class_1;
}(HTMLElement)));
//# sourceMappingURL=main.js.map