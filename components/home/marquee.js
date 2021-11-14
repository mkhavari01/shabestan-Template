const marquee = document.createElement('template');

const marqueeStyles = `
    
`;

class Marquee extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'}); 
        this.shadowRoot.appendChild(marquee.content.cloneNode(true));
        let widthMarqueeWapper = this.getAttribute('width')
        this.shadowRoot.innerHTML = `
            <marquee direction="right" >
                <p>
                    عافی از کاهش ۲۵ درصدی مجوز نشر قرآن از ابتدای سال خبر داد و گفت: از ابتدای سال جاری ۶۷ عنوان مجوز نشر داشتیم که این رقم نسبت به سال قبل با افت ۲۵ درصدی مواجه بوده است.گرانی کاغذ در کاهش چاپ و نشر قرآن تاثیر داشته است.
                </p>
            </marquee>
        `
    }
}

window.customElements.define("marquee-co", Marquee);