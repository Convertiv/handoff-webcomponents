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
var template = document.getElementById("tabbed-custom-element");
globalThis.customElements.define(template.id, /** @class */ (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        var _this = _super.call(this) || this;
        _this.attachShadow({ mode: "open" });
        _this.shadowRoot.appendChild(template.content);
        var tabs = [];
        var children = _this.shadowRoot.children;
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var elem = children_1[_i];
            if (elem.getAttribute('part')) {
                tabs.push(elem);
            }
        }
        tabs.forEach(function (tab) {
            tab.addEventListener('click', function (e) {
                tabs.forEach(function (tab) {
                    tab.part = 'tab';
                });
                e.target.part = 'tab active';
            });
            console.log(tab.part);
        });
        return _this;
    }
    return class_1;
}(HTMLElement)));
//# sourceMappingURL=main.js.map