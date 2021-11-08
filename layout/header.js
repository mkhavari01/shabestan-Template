const template = document.createElement('template');

const styles = `
    <style>
        nav{
            border : solid;
        }
    </style>
`


template.innerHTML = `
    ${styles}
    <nav>
        <ul>
            <slot name="pages" />
        </ul>
    </nav>
`

class Header extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
};

window.customElements.define('header-co',Header);