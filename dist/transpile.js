"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var handlebars_1 = __importDefault(require("handlebars"));
var iterator = [];
var transpile = function (code) {
    var parsed = handlebars_1.default.parse(code);
    return program(parsed);
};
var block = function (node) {
    var variable = node.params[0].original.split('.').pop();
    switch (node.path.original) {
        case "if":
            // check to see if the block has an else block
            if (node.inverse) {
                return "${".concat(variable, " ? `").concat(program(node.program), "` : `").concat(program(node.inverse), "`}");
            }
            else {
                return "${".concat(variable, " ?? `").concat(program(node.program), "` }");
            }
            break;
        case "each":
            var current = variable[0];
            iterator.push(current);
            return "${".concat(variable, ".map((").concat(current, ") => `").concat(program(node.program), "`)}");
            break;
        default:
            throw new Error("Unknown block type: '".concat(node.path.original, "'"));
    }
};
var program = function (program) {
    var buffer = [];
    for (var _i = 0, _a = program.body; _i < _a.length; _i++) {
        var node = _a[_i];
        switch (node.type) {
            case "Program":
                buffer.push(program(node));
            case "MustacheStatement":
                var value = node.path.original;
                if (value === 'this') {
                    value = iterator[iterator.length - 1];
                }
                else if (value.includes('this')) {
                    value = value.replace('this.', iterator[iterator.length - 1] + '.');
                }
                else if (value.includes('.')) {
                    value = value.split('.').pop();
                }
                buffer.push("${".concat(value, "}"));
                break;
            case "TextNode":
                buffer.push(node.chars);
                break;
            case 'ContentStatement':
                buffer.push(node.value);
                break;
            case 'BlockStatement':
                buffer.push(block(node));
                break;
            default:
                throw new Error("Unknown node type");
        }
    }
    return buffer.join('');
};
exports.default = transpile;
