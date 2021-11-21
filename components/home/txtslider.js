const marqueee = document.createElement('template');

const marqueeeStyles = `
    <style>
    .content-holder {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .icon-holder {
        display: flex;
    }
    .icon-holder span {
        margin: 0 10px;
    }
    span {
        width: 15px;
        height: 15px;
        background: chocolate;
        border-radius: 50%;
        display: flex;
        align-items: center;
        cursor: pointer;
        justify-content: center;
    }
    img {
        width: 7px;
    }
    a {
        text-decoration: none;
        color: #000;
        font-size: 12px;
        width: 100%;
        margin: 0 -20px;
    }
    #txtContent {
        width: 773px;
        height: 24px;
    }
    .container {
        width: 80%;
        border-bottom: 5px solid #e6dfc0;
    }
    @media screen and (max-width: 960px) {
        .container {
            display : none;
        }
    }
    </style>
`;


class TxtSlider extends HTMLElement {
    constructor(){
        super();

        this.attachShadow({mode : "open"});
        marqueee.innerHTML = `
        ${marqueeeStyles}
        <section class="container">
            <div class="content-holder">
                <div id="txtContent">
                    <a href="#">تاکید اسماعیلی بر تقویت پیشرانی مرکز توسعه فرهنگ و هنر در فضای مجازی    </a>
                    <a href="#">استفاده از ظرفیت مساجد محلات در طرح محله اسلامی بسیج مستضعفین</a>
                    <a href="#">از ۱۵۱ دستگاه اصلی ۱۷ ارگان هیچ اطلاعاتی از کارکنان خود ثبت نکردند</a>
                </div>
                <div class="icon-holder">
                    <span id="next-button">
                        <img src="../assets/images/right-icon.svg" alt="">
                    </span>
                    <span id="prev-button">
                        <img src="../assets/images/left-icon.svg" alt="">
                    </span>
                </div>
            </div>
        </section>
        `
        this.shadowRoot.appendChild(marqueee.content.cloneNode(true));

        const txtSlider = simpleslider.getSlider({
            container: this.shadowRoot.getElementById('txtContent'),
            prop: 'top',
            init: -612,
            show: 0,
            end: 612,
            unit: 'px',
            delay: 3,
        });
        this.shadowRoot.getElementById('prev-button').onclick = function(e) {
            txtSlider.next();
            e.preventDefault();
        };
    
        this.shadowRoot.getElementById('next-button').onclick = function(e) {
            txtSlider.prev();
            e.preventDefault();
        };
    }
}

window.customElements.define('txtslider-co',TxtSlider);