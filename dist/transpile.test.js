"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var transpile_1 = __importDefault(require("./transpile"));
var test = "\n<div>\n    <h1>{{title}}</h1>\n    {{#if show}}\n        <p>Nothing to show</p>\n    {{/if}}\n\n    {{#if show}}\n        <p>{{description}}</p>\n    {{else}}\n        <p>Nothing to show</p>\n    {{/if}}\n\n    {{#each items}}\n        <p>{{this}}</p>\n    {{/each}}\n</div>";
var testJS = "\n<div>\n    <h1>{{title}}</h1>\n    $\n        <p>{{description}}</p>\n    {{#else}}\n        <p>Nothing to show</p>\n    {{/if}}\n\n    {{#each items}}\n        <p>{{this}}</p>\n    {{/each}}\n</div>";
var ifTest = "\n{{#if show}}\n    <p>Nothing to show</p>\n{{/if}}";
console.log((0, transpile_1.default)(test));
