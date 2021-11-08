const mainNews = document.createElement('template');

const mainNewsStyle = `
    <style>
        .main-news {
            padding: 5px 15px;
            word-break: break-word;
        }
        
        .main-news h2 {
            font-size: 20px;
            margin: 0 0 7px 0;
            color: #0063be;
        }
        
        .main-news div{
            display: flex;
        }
        
        .main-news div img {
            width: 280px;
            height: 172px;
        }
        
        .main-news div p {
            font-size: 13px;
            padding: 0 10px;
            text-align: justify;
        }
    </style>
`
mainNews.innerHTML =`
        ${mainNewsStyle}
        <div class="main-news">
            <small>
                معاون نظارت بر چاپ و نشر قرآن سازمان دارالقرآن
            </small>
            <h2>
                کاهش ۲۵ درصدی مجوز نشر قرآن از ابتدای سال/ «گرانی کاغذ» در کاهش چاپ و نشر قرآن تاثیر داشته است
            </h2>
            <div>
                <img src="http://media.shabestan.ir/Larg/1400/08/10/IMG10523931.jpg"/>
                <p>
                    عافی از کاهش ۲۵ درصدی مجوز نشر قرآن از ابتدای سال خبر داد و گفت: از ابتدای سال جاری ۶۷ عنوان مجوز نشر داشتیم که این رقم نسبت به سال قبل با افت ۲۵ درصدی مواجه بوده است.گرانی کاغذ در کاهش چاپ و نشر قرآن تاثیر داشته است.
                </p>
            </div>
        </div>
`;

class MainNews extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        this.shadowRoot.appendChild(mainNews.content.cloneNode(true));

    }
};

window.customElements.define('main-news-co',MainNews);