const mediaList = document.createElement('template');

const mediaListStyle = `
    <style>
        section {
            position: relative;
            width: 320px;
            height: 210px;
            margin: 10px;
        }
        img {
            width: 320px;
            height: 210px;
        }
        div{
            position: absolute;
            width: 100%;
            height: 30px;
            overflow: hidden;
            bottom: 0;
            background: rgba(0, 0, 0, 0.75);
            color: #fff;
            font-size: 14px;
        }
        p{
            padding: 0 10px;
            margin : 0;
        }
        nav{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        h2{
            display: flex;
            align-items: center;
            justify-content: center;
            margin : 0
        }
        h2 span{
            background: #666;
            font-size: 15px;
            text-align: center;
            color: #fff;
            padding: 5px 15px;
            border-radius: 3px;
            font-weight: normal;
        }
        h3{
            display: flex;
            align-items: center;
            justify-content: center;
            margin : 0
        }
        h3 span{
            background: #0063be;
            font-size: 15px;
            text-align: center;
            color: #fff;
            padding: 0px 15px;
            border-radius: 3px;
            font-weight: normal;
            cursor : pointer;
        }
    </style>
`;

class MediaList extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        this.shadowRoot.innerHTML = `
            ${mediaListStyle}
            <h2>
                <span>
                    آخرین مطالب سرویس
                </span>
            </h2>
            <nav>
                <section>
                    <a href="#">
                        <img src="http://media.shabestan.ir/medium_photo/1400/08/24/IMG00075713.jpg" alt="newsImage"/>
                    </a>
                    <div>
                        <p>
                            تیزر جشنواره ملی هنرهای تجسمی
                        </p>
                    </div>
                </section>
                <section>
                    <a href="#">
                        <img src="http://media.shabestan.ir/medium_photo/1400/08/24/IMG00075713.jpg" alt="newsImage"/>
                    </a>
                    <div>
                        <p>
                            تیزر جشنواره ملی هنرهای تجسمی
                        </p>
                    </div>
                </section>
                <section>
                    <a href="#">
                        <img src="http://media.shabestan.ir/medium_photo/1400/08/24/IMG00075713.jpg" alt="newsImage"/>
                    </a>
                    <div>
                        <p>
                            تیزر جشنواره ملی هنرهای تجسمی
                        </p>
                    </div>
                </section>
            </nav>
            <h3>
                <span>
                    بیشتر
                </span>
            </h3>
        `
    }
}

window.customElements.define('medialist-co',MediaList);