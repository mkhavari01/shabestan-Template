const headerNews= document.createElement('template');

headerNewsStyles = `
    <style>
        div{
            
        }
        
    </style>
`

headerNews.innerHTML = `
    ${headerNewsStyles}
    <div>
        <newsdata-co></newsdata-co>
        <shortdetail-co></shortdetail-co>
    </div>
`

class HeaderNews extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        this.shadowRoot.appendChild(headerNews.content.cloneNode(true));
    }
}

window.customElements.define('headernews-co',HeaderNews);