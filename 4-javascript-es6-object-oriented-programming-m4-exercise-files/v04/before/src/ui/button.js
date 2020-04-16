import { BaseElement } from "./base-element";

export class Button extends BaseElement {
  constructor(title) {
    super(title); //title is text that appears in button
    this.title = title;
  }
  getElementString() {
    return `
        <button class = "md1-button m1-js-button>${this.title}</button>
        `;
  }
}
