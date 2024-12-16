import Handlebars from 'handlebars';
import { it } from 'node:test';

const iterator = [];
const transpile = (code) => {
    const parsed = Handlebars.parse(code);
    return program(parsed);
}

const block = (node) => {
    const variable = node.params[0].original.split('.').pop();
    switch (node.path.original) {
        case "if":
            // check to see if the block has an else block
            if (node.inverse) {
                return `\${${variable} ? \`${program(node.program)}\` : \`${program(node.inverse)}\`}`;
            } else {
                return `\${${variable} ?? \`${program(node.program)}\` }`;
            }
            break;
        case "each":
            const current = variable[0];
            iterator.push(current);
            return `\${${variable}.map((${current}) => \`${program(node.program)}\`)}`;
            break;
        default:
            throw new Error(`Unknown block type: '${node.path.original}'`);
    }
}

const program = (program) => {
    const buffer = [];
    for (let node of program.body) {
        switch (node.type) {
            case "Program":
                buffer.push(program(node));
            case "MustacheStatement":
                let value = node.path.original;
                if (value === 'this') {
                    value = iterator[iterator.length - 1];
                } else if (value.includes('this')) {
                    value = value.replace('this.', iterator[iterator.length - 1] + '.');
                } else if (value.includes('.')) {
                    value = value.split('.').pop();
                }
                buffer.push(`\${${value}}`);
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
                throw new Error(`Unknown node type`);
        }
    }
    return buffer.join('');
}


export default transpile;