const pages = document.createElement('template');
const pagesStyle = `
    <style>
        ul{
            display : flex;
            list-style: none;
            margin : 0;
            padding : 0;
            align-items : center;
            justify-content : flex-start;
            width: 1024px;
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
            color : #00247e ; 
            background : #02acdd;
            transition : .4s;
        }
        @media screen and (max-width: 960px) {
            ul {
                display : block;
                width : fit-content;
                padding-right : 30px;
            }
        }
    </style>
`



async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

async function main() {
    let html = ``
    let extraHtml = ""
    let jsondata = "";
    let apiUrl = "https://jsonplaceholder.ir/users"
    //OPTION 1
    // getJson(apiUrl)
    //     .then(data => console.log(data));
    html += pagesStyle
    //OPTION 2
    jsondata = await getJson(apiUrl)
    jsondata.forEach((element)=>{
        let htmlSegment = `<li><a href="#">${element.address.city}</a></li>` 
        extraHtml += htmlSegment
    })
    html += `
        ${pagesStyle}
        <ul>
            ${extraHtml}
        </ul>
    `
    pages.innerHTML = html

    class Pages extends HTMLElement{
        constructor(){
            super();
    
            this.attachShadow({mode : 'open'});
            this.shadowRoot.appendChild(pages.content.cloneNode(true));
    
        }
    };
    
    window.customElements.define('pages-co',Pages);
}

main();

function bgChanger(){
    console.log('in here we gonna take the input value to realize which route you are in then we change the color of background');
}