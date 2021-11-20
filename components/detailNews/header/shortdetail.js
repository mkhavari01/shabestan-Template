const shortDetail= document.createElement('template');

shortDetailStyles = `
    <style>
        section{
            display: flex;
            flex-direction: row-reverse;
            justify-content: flex-end;
        }
        section div{
            display: flex;
            flex-direction: column;
            margin : 0 0 0 30px;
            word-break : break-word;
            text-align : justify;
        }
        img{
            width :312px;
            height : 210px;
        }
        small{
            font-size : 12px;
            padding-right : 10px;
        }
        h2{
            font-size : 22px;
            color : #0063BE;
            padding-right : 10px;
            margin : 0;
        }
        p{
            background : #F2F2F2;
            border : 1px solid #99CCFF;
            text-align : justify;
            margin: 0;
            padding : 10px;
            flex : 1;
        }
        @media screen and (max-width: 768px){
            h2{
                font-size : 20px;
            }
            section{
                flex-direction : column;
            }
            section div{
                margin : 0;
            }
        }
        @media screen and (max-width: 425px){
            section{
                align-items : center;
            }
            img{
                width : 278px;
                height : 176px;
            }
            h2{
                font-size : 16px;
            }
            p{
                font-size : 14px;
            }
        }
    </style>
`

shortDetail.innerHTML = `
    ${shortDetailStyles}
    <section>
        <img src="http://media.shabestan.ir/Original/1399/12/27/IMG13393407.jpg" alt="newsPic"/>
        <div>
            <small> معاون پشتیبانی و توسعه منابع ستاد فهما </small>
            <h2> کارآفرینی نقطه عطف درآمد پایدار برای کانون مساجد است/ ضرورت تاسیس وزارت مسجد </h2>
            <p>
                ریزانه گفت: تولید بر پایه کارآفرینی نقطه عطف درآمد پایدار برای کانون های فرهنگی و هنری مساجد است    
            </p>
        </div>
    </section>
`

class ShortDetail extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        this.shadowRoot.appendChild(shortDetail.content.cloneNode(true));
    }
}

window.customElements.define('shortdetail-co',ShortDetail);