const otherSlider = document.createElement('template');

const otherSliderStyle = `
    <style>
        .nav-example {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 15px 7px; 
            width : 675px;
            height : 450px;
        }
        .nav-slider {
            position: absolute;
            top: 0px;
            left: 0px; 
            z-index: 1;
            width : 100%;
            height: 100%;
        }
        .nav-slider img{
            width : 100%;
        }
        #next-button,#prev-button { 
            left: auto;
            right: 10px; 
            width: 32px;
            z-index: 12;
            height: 32px;
            background: white;
            top: auto;
            border-radius: 50%;
        }
        #prev-button{
            left: 10px;
            right: auto;
        }
        a.slide-button{
            position: absolute;
            top: 0px;
            left: 0px;
            width: 150px;
            height: 100%;
            color: #FFF;
            background-color: rgba(0,0,0,0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            font-size: 80px;
            direction: ltr;
            text-decoration: none;
            z-index : 2;
        }
        a img {
            width: 10px;
        }
        @media screen and (max-width: 768px){
            .nav-example {
                width: 320px;
                height: 220px;
            }
        }
    </style>
`;

class OtherSlider extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});

        // dom attaching

        otherSlider.innerHTML = `
            ${otherSliderStyle}
            <div class="nav-example">
                <div id="myslider" class="nav-slider">
                  <img src="http://placekitten.com/g/612/612"/>
                  <img src="https://unsplash.it/612/612"/>
                  <img src="https://unsplash.it/612/612?random=1"/>
                  <img src="https://unsplash.it/612/612?random=2"/>
                </div>
                <a id="prev-button" href="#" class="slide-button">
                    <img src="../assets/images/left-icon.svg" alt="">
                </a>
                <a id="next-button" href="#" class="slide-button">
                    <img src="../assets/images/right-icon.svg" alt="">
                </a>
            </div>
        `
        this.shadowRoot.appendChild(otherSlider.content.cloneNode(true));

        // functionality

        var isNext = true;
        var imgSlider = simpleslider.getSlider({
            container: this.shadowRoot.getElementById('myslider'),
            prop: 'left',
            init: -612,
            show: 0,
            end: 612,
            unit: 'px'
        });
    
        this.shadowRoot.getElementById('prev-button').onclick = function(e) {
            if (isNext) {
                imgSlider.reverse();
                isNext = false;
            }
            imgSlider.next();
            e.preventDefault();
        };
    
        this.shadowRoot.getElementById('next-button').onclick = function(e) {
            if (!isNext) {
                imgSlider.reverse();
                isNext = true;
            }
            imgSlider.next();
            e.preventDefault();
        };
    }
}

window.customElements.define('otherslider-co',OtherSlider);