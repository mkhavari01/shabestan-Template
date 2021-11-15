const mediadesc = document.createElement('template');

const mediadescStyle = `
    <style>
        .text-holder p{
            font-size: 20px;
            padding: 5px 10px;
            color: #fff;
        }
        .photo-holder a img{
            width: 670px;
            height: 350px;
        }
        .main{
            background: #666666;
            height: 350px;
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
        }
    </style>
`;

class Mediadesc extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        this.shadowRoot.innerHTML = `
            ${mediadescStyle}
            <section class="main">
                <div class="text-holder">
                    <p>کتاب| امام حسن عسکری(ع) را چقدر میشناسیم؟</p>
                </div>
                <div>
                    <section class="photo-holder">
                        <a href="#">
                            <img src="http://media.shabestan.ir/medium_photo/1400/08/24/IMG00075713.jpg" alt="">
                        </a>
                    </section>
                </div>
            </section>
            `
    }
}

window.customElements.define('mediadesc-co',Mediadesc)