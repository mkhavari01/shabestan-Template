const newsInfo = document.createElement('template');

const newsInfoStyle = `
    <style>
        h1{
            text-align: center;
            font-size: 30px;
            color: #0062be;
        }
        h2{
            font-size: 17px;
            color: #0063be;
            margin : 0;
        }
        p{
            font-size: 13px;
            text-align: justify;
            margin : 0;
        }
        .newsInfo{
            display: flex;
            width: 98%;
            text-align: justify;
        }
        .newsInfo div {
            display: flex;
            flex-direction: column;
            padding: 0 10px 0 0;
            word-break: break-word;
        }
        .newsInfo div span{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            direction: ltr;
            font-size: 12px;
        }
        .content-holder{
            display: flex;
            justify-content: space-between;
        }
    </style>
`;

class NewsInfo extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        newsInfo.innerHTML = `
        ${newsInfoStyle}
                <div>
                    <section class="newsInfo">
                        <img src="http://media.shabestan.ir/Larg/1399/12/20/IMG13244540.jpg" alt="">
                        <div>
                            <small>
                                آیت‌الله نوری همدانی:
                            </small>
                            <h2>
                                اساس و قوام کشور، مردم هستند/مردم را به سلاح بصیرت مجهز کنیم
                            </h2>
                            <p>
                                آیت‌الله نوری همدانی با اشاره به اینکه در سیاست الهی ستون دین مردم هستند گفت:‌ اساس و قوام کشور را مردم تشکیل می دهند و برای مساله دفاع نیز ما باید مردم را بیدار کنیم.
                            </p>
                            <span>
                                تاریخ: ۱۴۰۰/۸/۶سرویس: قم
                            </span>
                        </div>
                    </section>
                    <div>
                        <topnews-co></topnews-co>
                    </div>
                </div>
        `;

        this.shadowRoot.appendChild(newsInfo.content.cloneNode(true));
    }
}

window.customElements.define('newsinfo-co',NewsInfo);