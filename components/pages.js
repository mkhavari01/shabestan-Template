const headerPagination = document.createElement('template');
const headerPaginationStyle = `
    <style>
        ul{
            display : flex;
        }
        
        li{
            color : blue;
        }
        li a{
            text-decoration : none;
            color : white;
            padding: 0 15px 0 15px;
        }
        li a:hover{
            border : solid .5px black;
            color : #00247e ; 
            background : #02acdd;
        }
    </style>
`

let html = ``
let jsondata = "";
let apiUrl = "https://jsonplaceholder.ir/users"

async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

async function main() {
    //OPTION 1
    // getJson(apiUrl)
    //     .then(data => console.log(data));
    html += headerPaginationStyle
    //OPTION 2
    jsondata = await getJson(apiUrl)
    jsondata.forEach((element)=>{
        let htmlSegment = `<li><a href="#">${element.address.city}</a></li>` 
        html += htmlSegment
    })

    headerPagination.innerHTML = html

    class HeaderPagination extends HTMLElement{
        constructor(){
            super();
    
            this.attachShadow({mode : 'open'});
            this.shadowRoot.appendChild(headerPagination.content.cloneNode(true));
    
        }
    };
    
    window.customElements.define('pages-co',HeaderPagination);
}

main();
