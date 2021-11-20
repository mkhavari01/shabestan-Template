const slider = document.createElement('template');

const sliderStyle = `
    <style>
        .nav-example {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 15px 0; 
        }
        .nav-slider {
            position: absolute;
            top: 0px;
            left: 0px; 
            z-index: 1;
        }
        #myslider {
            width:612px;
            height:612px; 
        }
        #next-button { 
            left: auto;
            right: 0px; 
            
        }
        a.slide-button{
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100px;
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
        }
        a img {
            width: 50px;
        }
        @media screen and (max-width: 768px){
            #myslider {
                width : 300px ;
                height : 324px;
            }
            #next-button{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                z-index: 12;
                right: 25px;
                top: auto;
                background: gray;
            }
            #prev-button{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                z-index: 12;
                left: 25px;
                top: auto;
                background: gray;
            }
            a img {
                width : 10px;
            }
        }
    </style>
`;

class Slider extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});

        // dom attaching

        slider.innerHTML = `
            ${sliderStyle}
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
        this.shadowRoot.appendChild(slider.content.cloneNode(true));

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

window.customElements.define('slider-co',Slider);