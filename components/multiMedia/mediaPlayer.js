const mediaPlayer = document.createElement('template');

const mediaPlayerStyle = `
    <style>
        div {
            position: relative;
            width: 724px;
            height: 413px;
        }
        #caption {
            position: absolute;
            bottom: 0;
            height: 80px;
            background: rgba(0, 0, 0, 0.75);
            color: #fff;
            padding: 10px 20px;
            width: 94.5%;
            opacity: 0;
            transition: all .4s;
            word-break : break-word;
        }
    </style>
`;

class MediaPlayer extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        this.shadowRoot.innerHTML = `
        ${mediaPlayerStyle}
        <div>
            <img src="http://media.shabestan.ir/Larg_ph/1400/08/24/IMG00032420.jpg" alt="news" width="724px" height="413px"/>
            <div id="caption">
                اولین جشنواره ملی هنرهای تجسمی 
            </div>
        </div>
        `;
        this.shadowRoot.querySelector('img').addEventListener('mouseover',()=>{
            this.shadowRoot.querySelector('#caption').style.opacity = 1;
        });
        this.shadowRoot.querySelector('img').addEventListener('mouseout',()=>{
            this.shadowRoot.querySelector('#caption').style.opacity = 0;
        });
    }
}

window.customElements.define('mediaplayer-co',MediaPlayer);