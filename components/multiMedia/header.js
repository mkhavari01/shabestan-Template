const multiMediaHeader = document.createElement('template');

multiMediaHeaderStyle = `
    <style>
        nav {
            background: #006db1;
        }
        ul {
            padding : 0;
            margin : 0;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            list-style: none;
        }
        li {
            padding: 5px 15px;
            font-size : 14px;
        }
        li:hover{
            background : #00247e;
        }
        li:hover a{
            color : #ddd;
        }
        a {
            text-decoration: none;
            color: #fff;
        }
    </style>
`;

class MultiMediaHeader extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        this.shadowRoot.innerHTML = `
        ${multiMediaHeaderStyle}
        <nav>
            <ul>
                <li style="background: #00247e;">
                    <a href="../pages/multiMedia.html" style="color: #ddd;">
                        چند رسانه ای 
                    </a>
                </li>
                <li>
                    <a href="../pages/mediaPage.html">
                        چند رسانه ای دیگر
                    </a>
                </li>
                <li>
                    <a href="../pages/imageMedia.html">
                        عکس ها 
                    </a>
                </li>
                <li>
                    <a href="../pages/otherImageMedia.html">
                        عکس های دیگر 
                    </a>
                </li>
                <li>
                    <a href="../pages/images.html">
                        خبر و عکس ها
                    </a>
                </li>
                <li>
                    <a href="../pages/specialPage.html">
                        صفحه های اختصاصی 
                    </a>
                </li>
                <li>
                    <a href="../pages/personalWeblogs.html">
                        وبلاگ های شخصی 
                    </a>
                </li>
                <li>
                    <a href="../pages/home.html">
                        برگشت به صفحه اصلی 
                    </a>
                </li>
            </ul>
        </nav>
        `;
        
    }
}

window.customElements.define("multimedia-header-co",MultiMediaHeader);