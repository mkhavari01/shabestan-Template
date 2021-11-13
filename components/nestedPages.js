const nestedPages = document.createElement("template");

nestedPagesStyle =  `
    <style>
        nav{
            background : #02acdd;
            display: flex;
            align-items: center;
            justify-content: center;
            border-top : solid .5px #fe9e09;
            border-bottom : solid .5px #fe9e09;
        }
        ul{
            display : flex;
            list-style: none;
            margin : 0;
            padding : 0;
            align-items : center;
            justify-content : flex-start;
            width : 1024px;
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
    </style>
`

async function main() {
    let html = ``
    let extraHtml = ""
    let jsondata = "";
    let apiUrl = "https://jsonplaceholder.ir/users"
    //OPTION 1
    // getJson(apiUrl)
    //     .then(data => console.log(data));
    
    //OPTION 2
    jsondata = await getJson(apiUrl)
    jsondata.length = 9 ;
    jsondata.forEach((element)=>{
        console.log(element.id)
        let htmlSegment = `<li><a href="#" onmouseover="bgChanger()">${element.name}</a></li>` 
        extraHtml += htmlSegment
    })
    html += `
        ${nestedPagesStyle}
        <nav>
            <ul>
                ${extraHtml}
            </ul>
        </nav>
    `
    nestedPages.innerHTML = html

    class NestedPages extends HTMLElement{
        constructor(){
            super();
    
            this.attachShadow({ mode: "open" });
            this.shadowRoot.appendChild(nestedPages.content.cloneNode(true));
    
        }
    };
    
    window.customElements.define("nestedpages-co", NestedPages);

}

main();
