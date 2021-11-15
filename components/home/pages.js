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
            flex-wrap : wrap;
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
    jsondata = await getJson(apiUrl);
    jsondata.length = 5;
    jsondata.forEach((element)=>{
        let htmlSegment = `<li><a href="../pages/test.html">${element.address.city}</a></li>` 
        extraHtml += htmlSegment
    })
    html += `
        ${pagesStyle}
        <ul>
            <li id="home-link"><a href="../pages/home.html">صفحه نخست</a></li>
            <li id="home-link"><a href="../pages/test.html">صفحه های دیگر</a></li>
            <li id="home-link"><a href="../pages/detailNews.html">صفحه خبر</a></li>
            <li id="home-link"><a href="../pages/list.html">لیست مطالب</a></li>
            ${extraHtml}
        </ul>
    `
    pages.innerHTML = html

    class Pages extends HTMLElement{
        constructor(){
            super();
    
            this.attachShadow({mode : 'open'});
            this.shadowRoot.appendChild(pages.content.cloneNode(true));
            
            // bgChanger(this)
        }
    };
    
    window.customElements.define('pages-co',Pages);
}

main();

function bgChanger(x){
    let selectedPage = document.querySelector("body > header-layout-co").shadowRoot.querySelector("nav > pages-co").shadowRoot.querySelector("#home-link > a");
    console.log('selectedPage',selectedPage.style.background="#02acdd")
}

function bgReturn(){
    let selectedPage = document.querySelector("body > header-layout-co").shadowRoot.querySelector("nav > pages-co").shadowRoot.querySelector("#home-link > a");
    selectedPage.style.background="#00247e"
    console.log()
    selectedPage.onmouseover =function(){
        console.log('fgeirugfreui');
        selectedPage.style.background="#02acdd"
    }
    selectedPage.onmouseout = function() {
        selectedPage.style.background="#00247e"
    }
}