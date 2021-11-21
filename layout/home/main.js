const mainLayout = document.createElement('template') ;

const mainLayoutStyle = `
    <style>
        .left-sidebar{
            width: 20%;
        }
        
        .main-news{
            width: 60%;
        }
        
        .sec{
            display: flex;
            width: 100%;
            max-width : 1024px;
            flex-direction : row-reverse;
        }
        .sec-wrapper{
            display : flex;
            justify-content : center;
            align-items : center;
            margin-top : 20px;            
        }
        @media screen and (max-width: 960px) {
            .sec{
                flex-direction : column;
            }
            section:nth-child(2){
                order : 1
            }
            section:nth-child(1){
                order : 2
            }
            section:nth-child(3){
                order : 3
            }
            .left-sidebar{
                width : 100%
            }
            .main-news{
                width : 100%;
            }
        }
        
    </style>
`;

mainLayout.innerHTML = `
    ${mainLayoutStyle}
    <div class="sec-wrapper">
        <div class="sec">
            <section class="left-sidebar">
                <search-co></search-co>
                <sidebar-co title="عناوین خبری" ></sidebar-co>
            </section>
            <section class="main-news">
                <div><txtslider-co></txtslider-co></div>
                <main-news-co></main-news-co>
                <news-suggest-co></news-suggest-co>
                <topnews-co title="عناوین خبری امروز" ></topnews-co>
            </section>
            <section class="left-sidebar">
                <sidebar-co title="عناوین بسیار مهم" ></sidebar-co>
            </section>
        </div>
    </div>
`


class MainLayout extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        this.shadowRoot.appendChild(mainLayout.content.cloneNode(true));

    }
};

window.customElements.define('main-layout-co',MainLayout);