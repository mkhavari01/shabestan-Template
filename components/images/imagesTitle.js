const imagesTitle = document.createElement('template');

const imagesTitleStyle = `
    <style>
        h2{
            color: #9a0808;
            font-size: 23px;
            font-weight: normal;
        }
        .news-info {
            padding : 0 10px;
            word-break: break-word;
            text-align: justify;
        }
        .news-info p {
            font-size: 15px;
            margin: 10px 0;
        }
        .news-data {
            text-align: left;
            padding: 0 10px;
        }
        @media screen and (max-width: 1024px){
            h2 {
                text-align: center;
            }
            .news-info {
                text-align: center;
            }
            .news-data {
                text-align: center;
            }
        }
    </style>
`;

class ImagesTitle extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});

        imagesTitle.innerHTML = `
            ${imagesTitleStyle}
            <div class="news-info">
                <h2>
                    مراسم تشییع پیکر آیت اللّه مجتهد شبستری در قم
                </h2>
                <p>
                    مراسم وداع با پیکر آیت الله مجتهد شبستری امروز جمعه ۲۸ آبان ماه از مسجد امام حسن عسگری علیه السلام (قم) برگزار و تا حرم حضرت معصومه سلام الله علیها تشییع شد.
                </p>
            </div>
            <div class="news-data">
                ۱۴۰۰/۸/۲۸ - ۱۴:۰۸محمد علی جلالی
            </div>
        `

        this.shadowRoot.appendChild(imagesTitle.content.cloneNode(true));
    }
}

window.customElements.define('imagestitle-co',ImagesTitle);