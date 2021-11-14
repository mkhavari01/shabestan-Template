const mainNews= document.createElement('template');

mainNewsStyles = `
    <style>
        div{
            
        }
        
    </style>
`

mainNews.innerHTML = `
    ${mainNewsStyles}
    <div>
        <news-co></news-co>
    </div>
`

class MainNews extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        this.shadowRoot.appendChild(mainNews.content.cloneNode(true));
    }
}

window.customElements.define('mainnews-co',MainNews);