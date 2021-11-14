const formComment= document.createElement('template');

formCommentStyles = `
    <style>
        div{
            display : flex;
            margin : 10px 0;
        }
        textarea{
            height : 128px;
            width : 100%;
            resize : none;
        }
        button {
            outline : none;
            border : none;
            font-family : yekan;
            background-color: #3D3D3E;
            padding: 5px;
            cursor: pointer;
            float: left;
            text-align: center;
            color: #fff
        }
        label{
            width : 30%;
            padding : 0 10px;
        }
        input{
            width : -webkit-fill-available;
        }
        button < div{
            background : blue;
        }
        #submit{
            justify-content : flex-end;
        }
    </style>
`

formComment.innerHTML = `
    ${formCommentStyles}
    <form>
        <div>
            <label for="name">نام :</label>
            <input id="name" />
        </div>
        <div>
            <label for="email">ایمیل :</label>
            <input id="email" />
        </div>
        <div>
            <label for="comment">متن نظر :</label>
            <textarea id="comment"></textarea>
        </div>
        <div id="submit">
            <button type="submit">ارسال</button>
        </div>
    </form>
`

class FormComment extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        this.shadowRoot.appendChild(formComment.content.cloneNode(true));
    }
}

window.customElements.define('formcomment-co',FormComment);