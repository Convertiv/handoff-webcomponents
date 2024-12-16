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
customElements.define('open-shadow', /** @class */ (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        var _this = _super.call(this) || this;
        var pElem = document.createElement('p');
        pElem.textContent = _this.getAttribute('text');
        var shadowRoot = _this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(pElem);
        return _this;
    }
    return class_1;
}(HTMLElement)));
customElements.define('closed-shadow', /** @class */ (function (_super) {
    __extends(class_2, _super);
    function class_2() {
        var _this = _super.call(this) || this;
        var pElem = document.createElement('p');
        pElem.textContent = _this.getAttribute('text');
        var shadowRoot = _this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(pElem);
        return _this;
    }
    return class_2;
}(HTMLElement)));
document.querySelector('html').addEventListener('click', function (e) {
    console.log(e.composed);
    console.log(e.composedPath());
});
//# sourceMappingURL=main.js.map