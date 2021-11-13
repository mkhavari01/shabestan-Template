const template = document.createElement("template");

const styles = `
    <style>
        div img{
            width : 24px;
            margin : 10px 20px 0;
        }
        nav{
            background : #00247e;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .menu{
            display : none
        }
        @media screen and (max-width: 960px) {
            nav {
                display : none
            }
            .menu{
                display : block;
            }
        }
    </style>
`;

template.innerHTML = `
    ${styles}
    <div class="menu">
        <img src="../assets/images/menu.svg" width="100px"/>
    </div>
    <nav>
        <pages-co></pages-co>
    </nav>
    <nestedpages-co></nestedpages-co>
`;


class Header extends HTMLElement {
  constructor() {
    super();
    this.state = {
        isShown : false
    }

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('div img').addEventListener('click',(e)=>{
        this.state.isShown = !this.state.isShown

        if(this.state.isShown){
            this.shadowRoot.querySelector('nav').style.display = 'block';
        }else{
            this.shadowRoot.querySelector('nav').style.display = 'none';
        }
    })

  }
}

window.customElements.define("header-layout-co", Header);
