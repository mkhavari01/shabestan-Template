const boxes = document.createElement('template');

const boxesStyles = `
    <style>
        .wrapper {
            width: 1024px;
            display: flex;
            justify-content: space-between;
        }
        .tree-box {
            width: 49%;
            margin : 10px 15px;
        }
        h1 {
            font-size: 16px;
            width: 100%;
            background: #00247e;
            color: #fff;
            text-align: center;
            padding: 5px 0px;
            font-weight: normal;
            margin: 0;
            border-radius : 5px 5px 0px 0px;
        }
        .weblog-tree {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            align-items: center;
            background: #EAEAEA;
        }
        .content{
            width : 48%;
            margin : 15px 0;
            border-left : solid 5px #e6dfc0;
            border-right : solid 5px #e6dfc0;
            border-radius : 5px;
            height : fit-content;
        }
        @media screen and (max-width: 1024px){
            .wrapper {
                width : 100%;
                flex-direction : column;
                align-items : center;
            }
            .content {
                width : 90%;
            }
        }
    </style>
`;

class Boxes extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        boxes.innerHTML = `
            ${boxesStyles}
            <div class="wrapper">
                <section class="content">
                    <h1>
                        شخصیت ها
                    </h1>
                    <div class="weblog-tree">
                        <slot name="item1" />
                    </div>
                </section>
                <section class="content">
                    <h1>
                        شخصیت ها
                    </h1>
                    <div class="weblog-tree">
                        <slot name="item2" />
                    </div>
                </section>
            </div>
        `;
        
        this.shadowRoot.appendChild(boxes.content.cloneNode(true));

    }
}

window.customElements.define('boxes-co',Boxes);