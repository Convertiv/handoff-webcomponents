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
var PopupInfo = /** @class */ (function (_super) {
    __extends(PopupInfo, _super);
    function PopupInfo() {
        // Always call super first in constructor
        return _super.call(this) || this;
    }
    PopupInfo.prototype.connectedCallback = function () {
        // Create a shadow root
        var shadow = this.attachShadow({ mode: "open" });
        // Create spans
        var wrapper = document.createElement("span");
        wrapper.setAttribute("class", "wrapper");
        var icon = document.createElement("span");
        icon.setAttribute("class", "icon");
        icon.setAttribute("tabindex", 0);
        var info = document.createElement("span");
        info.setAttribute("class", "info");
        // Take attribute content and put it inside the info span
        var text = this.getAttribute("data-text");
        info.textContent = text;
        // Insert icon
        var imgUrl;
        if (this.hasAttribute("img")) {
            imgUrl = this.getAttribute("img");
        }
        else {
            imgUrl = "img/default.png";
        }
        var img = document.createElement("img");
        img.src = imgUrl;
        icon.appendChild(img);
        // Apply external styles to the shadow dom
        var linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "style.css");
        // Attach the created elements to the shadow dom
        shadow.appendChild(linkElem);
        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);
    };
    return PopupInfo;
}(HTMLElement));
// Define the new element
customElements.define("popup-info", PopupInfo);
//# sourceMappingURL=main.js.map