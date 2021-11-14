const footerNews= document.createElement('template');

footerNewsStyles = `
    <style>
        div{
            
        }
        
    </style>
`

footerNews.innerHTML = `
    ${footerNewsStyles}
    <div>
        <printing-co></printing-co>
        <keyword-co></keyword-co>
        <comment-co></comment-co>
    </div>
`

class FooterNews extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        this.shadowRoot.appendChild(footerNews.content.cloneNode(true));
    }
}

window.customElements.define('footernews-co',FooterNews);