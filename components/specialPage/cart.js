const cart = document.createElement('template');

const cartStyles = `
    <style>
        .weblogItem{
            width: 320px;
            height: 130px;
            background: cornflowerblue;
            margin: 10px 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .weblogItem h2 {
            text-align: center;
            font-size: 16px;
            background:rgba(255, 255, 255, 1) ;
            width: 100%;
            font-weight: normal;
            margin : 0;
        }
        .weblogItem h2 a{
            text-decoration: none;
            color: #00247e;
        }
    </style>
`;

class Cart extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        cart.innerHTML = `
            ${cartStyles}
            <div class="weblogItem">
                    <img src="http://media.shabestan.ir/larg/1394/04/18/IMG18225733.jpg" width="100%" height="80%">
                    <h2>
                        <a href="#">
                            حسین همدانی
                        </a>
                    </h2>
            </div>
        `;
        
        this.shadowRoot.appendChild(cart.content.cloneNode(true));

    }
}

window.customElements.define('cart-co',Cart);