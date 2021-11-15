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
                    <a href="#" style="color: #ddd;">
                        ایتم دو 
                    </a>
                </li>
                <li>
                    <a href="#">
                        ایتم یک 
                    </a>
                </li>
                <li>
                    <a href="#">
                        ایتم سه 
                    </a>
                </li>
            </ul>
        </nav>
        `;
        
    }
}

window.customElements.define("multimedia-header-co",MultiMediaHeader);