const topMedias = document.createElement('template');

const topMediasStyle =`
    <style>
        aside{
            width: 267px;
        }
        h3{
            font-weight: 100;
            font-size: 14px;
            background: #006db1;
            color: #fff;
            padding-right: 8px;
            margin : 0;
        }
        section {
            height: 54px;
            display: flex;
            border-bottom: solid 1px #999;
        }
        img{
            height: 50px;
            width: 90px;
        }
        a{
            display: flex;
        }
        p {
            font-size: 12px;
            padding: 3px 7px;
            text-align: justify;
            margin : 0;
        }
        div{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>
`

class TopMedias extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        topMedias.innerHTML = `
            ${topMediasStyle}
        <aside>
            <h3>
                پربیننده ترین مطالب سرویس
            </h3>
            <section>
                <div>
                    <a href="#">
                        <img src="http://media.shabestan.ir/small/1400/07/28/IMG18171352.jpg" alt="newsMedia"/>
                    </a>
                </div>
                <p>
                    تشرف یک پزشک زن مسیحی برزیلی به دین اسلام
                </p>
            </section>
            <section>
                <div>
                    <a href="#">
                        <img src="http://media.shabestan.ir/small/1400/07/28/IMG18171352.jpg" alt="newsMedia"/>
                    </a>
                </div>
                <p>
                    تشرف یک پزشک زن مسیحی برزیلی به دین اسلام
                </p>
            </section>
            <section>
                <div>
                    <a href="#">
                        <img src="http://media.shabestan.ir/small/1400/07/28/IMG18171352.jpg" alt="newsMedia"/>
                    </a>
                </div>
                <p>
                    تشرف یک پزشک زن مسیحی برزیلی به دین اسلام
                </p>
            </section>
        </aside>
        `;
        this.shadowRoot.appendChild(topMedias.content.cloneNode(true));
        if(this.hasAttribute('sideBar-width')){
            this.shadowRoot.querySelector('aside').style.width = this.getAttribute('sideBar-width');
            this.shadowRoot.querySelector('aside').style.margin = this.getAttribute('sideBar-margin');
        }
    }
}

window.customElements.define('topmedias-co',TopMedias);