const banner = document.createElement('template');

const bannerStyle = `
    <style>
        h1{
            text-align: center;
            font-size: 30px;
            color: #0062be;
        }
        div {
            display : flex;
            align-item : center;
            justify-content : center;
            margin : 10px;
        }
        @media screen and (max-width: 768px){
            h1 {
                font-size : 20px;
            }
        }
    </style>
`;

class Banner extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        banner.innerHTML = `
            ${bannerStyle}
            <h1>
                صفحه اختصاصی آیت الله نوری همدانی
            </h1>
            <div>
                <img src="http://media.shabestan.ir/Original/1394/04/18/IMG18225733.jpg" alt="" width="100%">
            </div>
        `;

        this.shadowRoot.appendChild(banner.content.cloneNode(true));
    }
}

window.customElements.define('banner-co',Banner);