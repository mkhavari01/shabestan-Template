const newsSuggest = document.createElement('template');

const newsSuggestStyle = `
    <style>
        .test-wrapper{
            display: flex;
            justify-content: space-around;
        }
      
        .test{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding : 0 16px;
        }
      
        .test img{
            width: 160px;
            height: 97px;
        }
      
        .test h2{
            font-size: 14px;
        }
        @media screen and (max-width: 560px){
            .test-wrapper{
                flex-direction : column;
            }
        }
    </style>
`
newsSuggest.innerHTML =`
        ${newsSuggestStyle}
        <div class="test-wrapper">
            <div class="test">
                <img src="http://media.shabestan.ir/Medium2/1400/08/06/IMG13401220.jpg" />
                <h2>
                    حسن ظن به خداوند موفقیت و پیروزی به دنبال دارد
                </h2>
            </div>
            <div class="test">
                <img src="http://media.shabestan.ir/Medium2/1400/08/06/IMG13401220.jpg" />
                <h2>
                    حسن ظن به خداوند موفقیت و پیروزی به دنبال دارد
                </h2>
            </div>
            <div class="test">
                <img src="http://media.shabestan.ir/Medium2/1400/08/06/IMG13401220.jpg" />
                <h2>
                    حسن ظن به خداوند موفقیت و پیروزی به دنبال دارد
                </h2>
            </div>
        </div>
`;

class NewsSuggest extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        this.shadowRoot.appendChild(newsSuggest.content.cloneNode(true));

    }
};

window.customElements.define('news-suggest-co',NewsSuggest);