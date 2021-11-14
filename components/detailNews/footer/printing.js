const printing= document.createElement('template');

printingStyles = `
    <style>
        div{
            border : solid 1px #b8b8b8;
            display: flex;
            align-items: center;
        }
        a{
            display : flex;
        }
        img{
            width : 27px;
            padding : 5px;
        }
    </style>
`

printing.innerHTML = `
    ${printingStyles}
    <div>
        <a href="#">
            <img src="../../assets/images/print.svg" alt="printing-svg"/>
        </a>
    </div>
`

class Printing extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        this.shadowRoot.appendChild(printing.content.cloneNode(true));
    }
}

window.customElements.define('printing-co',Printing);