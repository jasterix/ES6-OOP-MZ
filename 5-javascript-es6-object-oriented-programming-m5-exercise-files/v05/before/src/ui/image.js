import { BaseElement } from "./base-element.js";

export class Image extends BaseElement {
  constructor(fileName) {
    super();
    this.fileName = fileName;
    console.log("123, ", this.fileName);
  }
  getElementString() {
    return `
    <img src="${this.fileName}" style="width:100%"/>
        `;
  }
}
