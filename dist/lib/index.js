"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var axios_1 = __importDefault(require("axios"));
var fs_1 = __importDefault(require("fs"));
var fetchComponent = function (componentId) { return __awaiter(void 0, void 0, void 0, function () {
    var url, headers, request, response, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "https://stage-ssc.handoff.com/api/";
                headers = {
                    "Content-Type": "application/json"
                };
                request = axios_1["default"].create({
                    baseURL: url,
                    headers: headers
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, request.get("component/" + componentId + ".json")];
            case 2:
                response = _a.sent();
                return [2 /*return*/, response.data];
            case 3:
                e_1 = _a.sent();
                console.error(e_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var buildTemplate = function (componentId) { return __awaiter(void 0, void 0, void 0, function () {
    var data, component, html, name, template;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchComponent(componentId)];
            case 1:
                data = _a.sent();
                component = data.latest;
                html = component["code"];
                name = componentId.replace(/_/g, " ").replace(/\b\w/g, function (c) { return c.toUpperCase(); }).replace(/\s/g, "");
                console.log(name);
                template = "class " + name + " extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        // You can get the attributes set on the custom element just like you would any other HTML element.\n        let firstName = this.getAttribute(\"data-first\");\n        let lastName = this.getAttribute(\"data-last\");\n        let jobTitle = this.getAttribute(\"data-title\");\n        let imageSrc = this.getAttribute(\"data-src\");\n        // Web components are made of the same HTML, and CSS, you're used to. It's just within a self contained space, called the Shadow DOM. We set the inner HTML of the custom element almost the same as you would with any normal HTML element.\n        this.shadowRoot.innerHTML = ` \n      <style>\n        " + component["css"] + "\n      </style>\n\n      " + html + "\n    `;\n    }\n}\nwindow.customElements.define(\"business-card\", businessCard);";
                console.log(template);
                return [2 /*return*/, template];
        }
    });
}); };
var writeToFile = function (template, id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!fs_1["default"].existsSync("components")) {
            fs_1["default"].mkdirSync("components");
        }
        fs_1["default"].writeFile("components/" + id + ".js", template, function (err) {
            if (err) {
                console.error(err);
            }
        });
        return [2 /*return*/];
    });
}); };
buildTemplate("c001_header");
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map