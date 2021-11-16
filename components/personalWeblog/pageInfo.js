const pageInfo = document.createElement('template');

const pageInfoStyle = `
    <style>
        .page-info{
            height: 244px;
            margin: 0 0px 10px 0;
            padding-right: 10px;
            border-right: 5px solid #e6dfc0;
        }
        h2,p{
            margin : 0
        }
        h2{
            font-size: 17px;
            color: #0063be;
        }
        p{
            font-size: 13px;
            text-align: justify;
        }
    </style>
`;

class PageInfo extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        pageInfo.innerHTML = `
            ${pageInfoStyle}
            <div class="page-info">
                    <h2>
                        درباره این صفحه
                    </h2>
                    <p>
                        این صفحه به آیت الله حسین نوری همدانی اختصاص داشته و شما می توانید آخرین مطالب و اخبار مرتبط را در این صفحه دنبال کنید.
                    </p>
            </div>
        `;

        this.shadowRoot.appendChild(pageInfo.content.cloneNode(true));
    }
}

window.customElements.define('pageinfo-co',PageInfo);