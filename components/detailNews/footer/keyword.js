const keyword= document.createElement('template');

keywordStyles = `
    <style>
        div{
            border : solid 1px #d2d2d2;
            margin-top : 10px;
            padding : 10px 0;
        }
        ul{
            display : flex;
            list-style : none;
            margin : 0;
            padding : 0;
            flex-wrap : wrap;
        }
        li{
            padding : 0 10px;
            border : solid 1px gray;
            margin : 5px 10px;
            transition : .4s;
        }
        li:hover{
            background : #00247e;
            color : #fff;
            
        }
        a{
            text-decoration : none;
            color : #00247e;
        }
        li:hover a{
            color : #fff;
        }
    </style>
`

keyword.innerHTML = `
    ${keywordStyles}
    <div>
        <ul>
            <li>
                <a href="#">آیتم یک</a>
            </li>
            <li>
                <a href="#">آیتم یک</a>
            </li>
            <li>
                <a href="#">آیتم یک</a>            
            </li>
        </ul>
    </div>
`

class Keyword extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        this.shadowRoot.appendChild(keyword.content.cloneNode(true));
    }
}

window.customElements.define('keyword-co',Keyword);