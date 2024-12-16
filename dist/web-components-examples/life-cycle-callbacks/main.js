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
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        var _this = 
        // Always call super first in constructor
        _super.call(this) || this;
        var shadow = _this.attachShadow({ mode: "open" });
        var div = document.createElement("div");
        var style = document.createElement("style");
        shadow.appendChild(style);
        shadow.appendChild(div);
        return _this;
    }
    Object.defineProperty(Square, "observedAttributes", {
        // Specify observed attributes so that
        // attributeChangedCallback will work
        get: function () {
            return ["color", "size"];
        },
        enumerable: false,
        configurable: true
    });
    Square.prototype.connectedCallback = function () {
        console.log("Custom square element added to page.");
        updateStyle(this);
    };
    Square.prototype.disconnectedCallback = function () {
        console.log("Custom square element removed from page.");
    };
    Square.prototype.adoptedCallback = function () {
        console.log("Custom square element moved to new page.");
    };
    Square.prototype.attributeChangedCallback = function (name, oldValue, newValue) {
        console.log("Custom square element attributes changed.");
        updateStyle(this);
    };
    return Square;
}(HTMLElement));
customElements.define("custom-square", Square);
function updateStyle(elem) {
    var shadow = elem.shadowRoot;
    shadow.querySelector("style").textContent = "\n    div {\n      width: " + elem.getAttribute("size") + "px;\n      height: " + elem.getAttribute("size") + "px;\n      background-color: " + elem.getAttribute("color") + ";\n    }\n  ";
}
var add = document.querySelector(".add");
var update = document.querySelector(".update");
var remove = document.querySelector(".remove");
var square;
update.disabled = true;
remove.disabled = true;
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
add.onclick = function () {
    // Create a custom square element
    square = document.createElement("custom-square");
    square.setAttribute("size", "100");
    square.setAttribute("color", "red");
    document.body.appendChild(square);
    update.disabled = false;
    remove.disabled = false;
    add.disabled = true;
};
update.onclick = function () {
    // Randomly update square's attributes
    square.setAttribute("size", random(50, 200));
    square.setAttribute("color", "rgb(" + random(0, 255) + ", " + random(0, 255) + ", " + random(0, 255) + ")");
};
remove.onclick = function () {
    // Remove the square
    document.body.removeChild(square);
    update.disabled = true;
    remove.disabled = true;
    add.disabled = false;
};
//# sourceMappingURL=main.js.map