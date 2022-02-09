class MagnifyAsset extends HTMLElement {
  constructor() {
    super();
    this.src = "";
  }

  connectedCallback() {
    this.src = this.getAttribute("src");
    this.render();
  }

  render() {
    this.outerHTML = `
      <img src="${this.src}" class="image"/>
    `;
  }
}

class ctaButton extends HTMLElement {
  constructor() {
    super();
    this.src = "";
  }

  connectedCallback() {
    this.src = this.getAttribute("src");
    this.render();
  }

  render() {
    this.innerHTML = `
        <img src="${this.src}"/>
    `;
  }
}

customElements.define("cta-button", ctaButton);

customElements.define("magnify-asset", MagnifyAsset);
