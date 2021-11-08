const searchBox = document.createElement('template');

const searchBoxStyle = `
    <style>
        form{
            display: flex;
            align-items: center;
            justify-content: center;
        }

        form input[type="text"]{
            border: solid 0.5px gray;
            border-left: none;
            outline: none;
            height : 25px;
            font-family : yekan;
            width : -webkit-fill-available;
        }

        form img{
            border: solid 0.5px gray;
            width: 27px;
        }
        form img:hover{
            cursor : pointer;
        }
    </style>
`;

searchBox.innerHTML = `
    ${searchBoxStyle}
    <form>
        <input type="text" />
        <img src="../assets/images/search.svg" alt="search" />
    </form>
`;

class SearchBox extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        this.shadowRoot.appendChild(searchBox.content.cloneNode(true));
        
        // search event click
        this.shadowRoot.querySelector('img').addEventListener('click',(e)=>{
            console.log('search box clicked')
        })

    }
};

window.customElements.define('search-co',SearchBox );