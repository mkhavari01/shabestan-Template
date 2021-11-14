const shortDetail= document.createElement('template');

shortDetailStyles = `
    <style>
        div{
            border : 1px solid #b8b8b8;
        }
        ul{
            display : flex;
            list-style : none;
            justify-content : flex-start;
            margin : 0;
            padding : 0;
        }
        li{
            padding : 0 20px;
            font-size : 12px;
        }
    </style>
`

shortDetail.innerHTML = `
    ${shortDetailStyles}
    <h1>short detail test</h1>
`

class ShortDetail extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        this.shadowRoot.appendChild(shortDetail.content.cloneNode(true));
    }
}

window.customElements.define('shortdetail-co',ShortDetail);