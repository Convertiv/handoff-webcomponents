'use strict';
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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
(function () {
    var EditableList = /** @class */ (function (_super) {
        __extends(EditableList, _super);
        function EditableList() {
            var _this = 
            // establish prototype chain
            _super.call(this) || this;
            // attaches shadow tree and returns shadow root reference
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
            var shadow = _this.attachShadow({ mode: 'open' });
            // creating a container for the editable-list component
            var editableListContainer = document.createElement('div');
            // get attribute values from getters
            var title = _this.title;
            var addItemText = _this.addItemText;
            var listItems = _this.items;
            // adding a class to our container for the sake of clarity
            editableListContainer.classList.add('editable-list');
            // creating the inner HTML of the editable list element
            editableListContainer.innerHTML = "\n        <style>\n          li, div > div {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n          }\n\n          .icon {\n            background-color: #fff;\n            border: none;\n            cursor: pointer;\n            float: right;\n            font-size: 1.8rem;\n          }\n        </style>\n        <h3>" + title + "</h3>\n        <ul class=\"item-list\">\n          " + listItems.map(function (item) { return "\n            <li>" + item + "\n              <button class=\"editable-list-remove-item icon\">&ominus;</button>\n            </li>\n          "; }).join('') + "\n        </ul>\n        <div>\n          <label>" + addItemText + "</label>\n          <input class=\"add-new-list-item-input\" type=\"text\">\n          <button class=\"editable-list-add-item icon\">&oplus;</button>\n        </div>\n      ";
            // binding methods
            _this.addListItem = _this.addListItem.bind(_this);
            _this.handleRemoveItemListeners = _this.handleRemoveItemListeners.bind(_this);
            _this.removeListItem = _this.removeListItem.bind(_this);
            // appending the container to the shadow DOM
            shadow.appendChild(editableListContainer);
            return _this;
        }
        // add items to the list
        EditableList.prototype.addListItem = function (e) {
            var textInput = this.shadowRoot.querySelector('.add-new-list-item-input');
            if (textInput.value) {
                var li = document.createElement('li');
                var button = document.createElement('button');
                var childrenLength = this.itemList.children.length;
                li.textContent = textInput.value;
                button.classList.add('editable-list-remove-item', 'icon');
                button.innerHTML = '&ominus;';
                this.itemList.appendChild(li);
                this.itemList.children[childrenLength].appendChild(button);
                this.handleRemoveItemListeners([button]);
                textInput.value = '';
            }
        };
        // fires after the element has been attached to the DOM
        EditableList.prototype.connectedCallback = function () {
            var removeElementButtons = __spreadArray([], this.shadowRoot.querySelectorAll('.editable-list-remove-item'));
            var addElementButton = this.shadowRoot.querySelector('.editable-list-add-item');
            this.itemList = this.shadowRoot.querySelector('.item-list');
            this.handleRemoveItemListeners(removeElementButtons);
            addElementButton.addEventListener('click', this.addListItem, false);
        };
        Object.defineProperty(EditableList.prototype, "title", {
            // gathering data from element attributes
            get: function () {
                return this.getAttribute('title') || '';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EditableList.prototype, "items", {
            get: function () {
                var items = [];
                __spreadArray([], this.attributes).forEach(function (attr) {
                    if (attr.name.includes('list-item')) {
                        items.push(attr.value);
                    }
                });
                return items;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EditableList.prototype, "addItemText", {
            get: function () {
                return this.getAttribute('add-item-text') || '';
            },
            enumerable: false,
            configurable: true
        });
        EditableList.prototype.handleRemoveItemListeners = function (arrayOfElements) {
            var _this = this;
            arrayOfElements.forEach(function (element) {
                element.addEventListener('click', _this.removeListItem, false);
            });
        };
        EditableList.prototype.removeListItem = function (e) {
            e.target.parentNode.remove();
        };
        return EditableList;
    }(HTMLElement));
    // let the browser know about the custom element
    customElements.define('editable-list', EditableList);
})();
//# sourceMappingURL=main.js.map