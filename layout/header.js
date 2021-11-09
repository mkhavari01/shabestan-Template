const template = document.createElement("template");

const styles = `
    <style>
        nav{
            background : #00247e;
        }
        ul{
            display : flex;
            list-style: none;
            margin : 0;
            align-items : center;
            justify-content : center;
        }
    </style>
`;

template.innerHTML = `
    ${styles}
    <nav>
        <ul>
            <pages-co></pages-co>
        </ul>
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
