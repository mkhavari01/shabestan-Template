const bookslider = document.createElement('template');

const booksliderStyles = `
    <style>
    body{
        display: flex;
        justify-content: center;
    }
    section {
        display: flex;
        flex-direction: column;
        width: 165px;
        height: 375px;
        padding: 20px;
        border: solid .5px gray;
        padding-top : 0;
    }
    .slider-icons {
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
        align-items: center;
        margin: 0 0 20px 0;
    }
    .title {
        font-size: 14px;
    }
    #slider-holder {
        width: 165px;
        height: 320px;
        overflow: hidden;
    }
    .icons {
        display: flex;
        flex-direction: row-reverse;
    }
    .icons a{
        margin: 0 10px;
        width: 20px;
        height: 20px;
        background: chocolate;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h3 {
        font-size: 16px;
        color: #0063be;
        font-weight: normal;
    }
    p {
        font-size: 13px;
    }
    #slider-holder div {
        word-break : break-word;
        width : 100%
    }
    </style>
`;


class Bookslider extends HTMLElement {
    constructor(){
        super();

        this.attachShadow({mode : "open"});
        bookslider.innerHTML = `
        ${booksliderStyles}
        <section>
            <div class="slider-icons">
                <div class="icons">
                    <a href="#" id="prev-btn"><img src="../assets/images/left-icon.svg" alt="" width="10px" ></a>
                    <a href="#" id="next-btn"><img src="../assets/images/right-icon.svg" alt="" width="10px" ></a>
                </div>
                <h2 class="title">
                    معرفی کتاب
                </h2>
            </div>
            <div id="slider-holder">
                <div>
                    <img src="http://media.shabestan.ir/Medium2/1400/07/05/IMG20024114.jpg" alt="" width="105px" height="130px">
                    <h3>
                        «قصه کربلا» به چاپ ششم رسید
                    </h3>
                    <p>
                        اپ ششم «قصه کربلا» برش هایی از زندگانی امام حسین(ع) از آغاز تا پرواز، نوشته مهدی قزلی توسط انتشارات شهید کاظمی منتشر شد
                    </p>
                </div>
                <div>
                    <img src="http://media.shabestan.ir/Medium2/1400/08/04/IMG14252635.jpg" alt="" width="105px" height="130px">
                    <h3>
                        «قصه کربلا» به چاپ ششم رسید
                    </h3>
                    <p>
                        اپ ششم «قصه کربلا» برش هایی از زندگانی امام حسین(ع) از آغاز تا پرواز، نوشته مهدی قزلی توسط انتشارات شهید کاظمی منتشر شد
                    </p>
                </div>
                <div>
                    <img src="http://media.shabestan.ir/Medium2/1400/08/15/IMG09214255.jpg" alt="" width="105px" height="130px">
                    <h3>
                        «قصه کربلا» به چاپ ششم رسید
                    </h3>
                    <p>
                        اپ ششم «قصه کربلا» برش هایی از زندگانی امام حسین(ع) از آغاز تا پرواز، نوشته مهدی قزلی توسط انتشارات شهید کاظمی منتشر شد
                    </p>
                </div>
            </div>
        </section>
        `
        this.shadowRoot.appendChild(bookslider.content.cloneNode(true));

        const bookSlider = simpleslider.getSlider({
            container : this.shadowRoot.getElementById('slider-holder'),
            prop: 'left',
            init: 1000,
            show: 0,
            end: -1000,
            unit: 'px',
            delay: 2,
            duration: 1
        });


        this.shadowRoot.getElementById('prev-btn').onclick = function(e) {
            bookSlider.next();
            e.preventDefault();
        };
    
        this.shadowRoot.getElementById('next-btn').onclick = function(e) {
            bookSlider.prev();
            e.preventDefault();
        };
    }
}

window.customElements.define('bookslider-co',Bookslider);