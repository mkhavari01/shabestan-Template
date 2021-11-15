const topNews = document.createElement('template');
const topNewsStyle = `
    <style>
    .sideBar {
        width: -webkit-fill-available;
        /* border: solid 0.5px gray; */
        border-top: 5px solid #e6dfc0;
        padding: 10px 15px;
        word-break : break-word;
    }
    .sideBar div {
        border-bottom: 1px solid #f3f3f3;
    }
    .sideBar small{
        font-size : 12px;
    }
    .sideBar h3{
        font-size : 16px;
        color : #0063be;
        margin : 5px 0;
    }
    .sideBar h3 a{
        color : #0063be;
        text-decoration : none;
    }
    .sideBar section{
        display : flex;

    }
    .sideBar p{
        font-size : 13px;
        padding : 0 10px 0 10px;
        text-align : justify;
    }
    .sideBar .info:hover{
        background : #f3f3f3;
    }
    .info section a{
        display : flex;
    }
    .sideBar img{
        width : 150;
        height : 150px;
    }
    </style>
`


async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

async function main() {
    //OPTION 1
    // getJson(apiUrl)
    //     .then(data => console.log(data));
    let extraHtml = ``
    let html = ``
    let jsondata = "";
    let apiUrl = "https://jsonplaceholder.ir/photos"
    //OPTION 2
    jsondata = await getJson(apiUrl)
    jsondata.length = 5;
    jsondata.forEach((element)=>{
        let htmlSegment = `
            <div class="info">
                <small>${element.title} </small>
                <h3><a href="#">${element.title}</a></h3>
                <section>
                    <a href="#"><img src=${element.thumbnailUrl}/></a>
                    <p>محفل انس و معارف قرآن کریم با حضور نماینده ولی فقیه در امور حج و زیارت و با رعایت پروتکل های بهداشتی در کانون طه گرگان برگزار شد.</p>
                </section>
            </div>
        ` 
        extraHtml += htmlSegment
    })
    html += `
        ${topNewsStyle}
        <aside class="sideBar">
            <div>
                <h2 class="sideBar-title"></h2>
            </div>
            ${extraHtml}
        </aside>
    `
    topNews.innerHTML = html

    class TopNews extends HTMLElement{
        constructor(){
            super();
    
            this.attachShadow({mode : 'open'});
            this.shadowRoot.appendChild(topNews.content.cloneNode(true));

            this.shadowRoot.querySelector('.sideBar-title').innerText = this.getAttribute('title');

            
            if(this.hasAttribute('sideBar-width')){
                this.shadowRoot.querySelector('.sideBar').style.width = this.getAttribute('sideBar-width');
            }
            
        }
    };
    
    window.customElements.define('topnews-co',TopNews);
}

main();
