class ELMSLNBase extends HTMLElement {
  constructor() {
    super();
    setTimeout(() => {
      import("./elmsln-base-deps.js");
    }, 0);
  }
}
customElements.define("elmsln-base", ELMSLNBase);
