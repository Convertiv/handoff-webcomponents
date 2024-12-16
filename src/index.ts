import axios from "axios";
import fs from "fs";
import Handlebars from "handlebars";
import transpile from "./transpile";


const fetchComponent = async (componentId: string) => {
    const url = "https://stage-ssc.handoff.com/api/";
    const headers = {
        "Content-Type": "application/json",
    };
    const request = axios.create({
        baseURL: url,
        headers,
    });

    try {
        const response = await request.get(`component/${componentId}.json`);
        // Parse response and create a web component from response
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

var camalize = function camalize(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

const camelToDashCase = str => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`).replace(/^-/, '');

const buildTemplate = async (componentId: string) => {
    const data = await fetchComponent(componentId);
    const component = data.latest;
    // TODO: Transpile handlebars to a webcomponent
    let html = transpile(component["code"]);
    // convert component id to class name
    let name = componentId.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()).replace(/\s/g, "");
    let snakeName = camelToDashCase(name);
    const template = `class ${name} extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        ${Object.keys(component["properties"]).map((prop: any) => {
        const def = component["properties"][prop];
        if (def.type === "array") {
            return `let ${prop} = JSON.parse(this.getAttribute("data-${camelToDashCase(prop)}"));`
        } else {
            return `let ${prop} = this.getAttribute("data-${camelToDashCase(prop)}");`
        }
    }).join("\n")}
        this.shadowRoot.innerHTML = \` 
      <style>
        ${component["css"]}
      </style>

      ${html}
    \`;
    }
}
window.customElements.define("${snakeName}", ${name});`;

    writeToFile(template, componentId);
    return template;
}

const writeToFile = async (template: string, id: string) => {
    // ensure dir exists
    if (!fs.existsSync("components")) {
        fs.mkdirSync("components");
    }
    fs.writeFile(`components/${id}.js`, template, (err: any) => {
        if (err) {
            console.error(err);
        }
    });
}


buildTemplate("c001_header");