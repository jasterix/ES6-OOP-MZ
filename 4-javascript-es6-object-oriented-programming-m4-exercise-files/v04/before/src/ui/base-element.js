import $ from "jquery";

export class BaseElement {
  constructor() {
    this.element = null; //jquery wrapped object
  }
  appendToElement(el) {
    console.log("append ", this);
    this.createElement();
    el.append(this.element);
  }
  createElement() {
    console.log("create element ", this);
    let s = getElementString();
    this.element = $(s);
  }
  getElementString() {
    throw "Please override getElementString() in base element";
  }
}
