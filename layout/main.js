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
        }
    </style>
`;

mainLayout.innerHTML = `
    ${mainLayoutStyle}
    <div class="sec">
        <section class="left-sidebar">
            <search-co></search-co>
            <sidebar-co title="عناوین خبری" ></sidebar-co>
        </section>
        <section class="main-news">
            <main-news-co></main-news-co>
            <news-suggest-co></news-suggest-co>
        </section>
        <section class="left-sidebar">
            <sidebar-co title="عناوین بسیار مهم" ></sidebar-co>
        </section>
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