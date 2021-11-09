const sideBar = document.createElement('template');
const sideBarStyle = `
    <link rel="stylesheet" href="../styles.css" />
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
    let apiUrl = "https://jsonplaceholder.ir/posts"

    //OPTION 2
    jsondata = await getJson(apiUrl)
    jsondata.length = 10;
    jsondata.forEach((element)=>{
        let htmlSegment = `<li><a href="#">${element.body}</a></li>` 
        extraHtml += htmlSegment
    })
    html += `
        ${sideBarStyle}
        <aside class="sideBar">
            <div>
                <h2 class="sideBar-title"></h2>
            </div>
            ${extraHtml}
        </aside>
    `
    sideBar.innerHTML = html

    class SideBar extends HTMLElement{
        constructor(){
            super();
    
            this.attachShadow({mode : 'open'});
            this.shadowRoot.appendChild(sideBar.content.cloneNode(true));

            this.shadowRoot.querySelector('.sideBar-title').innerText = this.getAttribute('title');
        }
    };
    
    window.customElements.define('sidebar-co',SideBar);
}

main();
