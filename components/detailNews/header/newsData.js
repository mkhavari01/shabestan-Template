const newsData= document.createElement('template');

newsDataStyles = `
    <style>
        div{
            border : 1px solid #b8b8b8;
            margin : 10px 0;
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

newsData.innerHTML = `
    ${newsDataStyles}
    <div>
        <ul>
            <li>
                شناسه خبر : <span>1381</span>
            </li>
            <li>
                زمان : <span>11</span>
            </li>
            <li>
                سرویس : <span>11111111111</span>
            </li>
        </ul>
    </div>
`

class NewsData extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        this.shadowRoot.appendChild(newsData.content.cloneNode(true));
    }
}

window.customElements.define('newsdata-co',NewsData);