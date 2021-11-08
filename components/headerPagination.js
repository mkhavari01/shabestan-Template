const headerPagination = document.createElement('template');

const headerPaginationStyle = `
    <style>
        li{
            color : blue;
        }
    </style>
`


headerPagination.innerHTML = `
    ${headerPaginationStyle}
    <li>
        <slot name="liName" />
    </li>
`

class HeaderPagination extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        this.shadowRoot.appendChild(headerPagination.content.cloneNode(true));

    }
};

window.customElements.define('pages-co',HeaderPagination);