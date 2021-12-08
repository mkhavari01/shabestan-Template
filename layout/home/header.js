const template = document.createElement("template");
const nestedValue = document.querySelector('.pageValue').value

const styles = `
    <style>
        div img{
            width : 24px;
            margin : 10px 16px 0;
        }
        nav{
            background : #00247e;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index : 1;
        }
        .menu{
            display : none;
            position: absolute;
            top: 37px;
        }
        @media screen and (max-width: 960px) {
            nav {
                opacity : 0;
                transition : .4s;
                position : absolute;
            }
            .menu{
                display : block;
            }
        }
    </style>
`;

template.innerHTML = `
    ${styles}
    <slot name="pageValue"></slot>
    <div class="menu">
        <img src="../assets/images/menu.svg" width="100px"/>
    </div>
    <nav>
        <pages-co></pages-co>
    </nav>
    <div class="nested-wrapper">

    </div>
`;

console.log()

class Header extends HTMLElement {
  constructor() {
    super();
    this.state = {
        isShown : false,
        isNested : nestedValue
    }

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('div img').addEventListener('click',(e)=>{
        this.state.isShown = !this.state.isShown

        if(this.state.isShown){
            this.shadowRoot.querySelector('nav').style.opacity = '1';
        }else{
            this.shadowRoot.querySelector('nav').style.opacity = '0';
        }
    });
    
    if(this.state.isNested == "true"){
        this.shadowRoot.querySelector('.nested-wrapper').innerHTML = "<nestedpages-co></nestedpages-co>"
    }
  }
  
}

window.customElements.define("header-layout-co", Header);
