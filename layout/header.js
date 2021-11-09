const template = document.createElement("template");

const styles = `
    <style>
        nav{
            background : #00247e;
        }
    </style>
`;

template.innerHTML = `
    ${styles}
    <nav>
        <pages-co></pages-co>
    </nav>
`;

class Header extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("header-layout-co", Header);
