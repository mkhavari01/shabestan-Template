const comment= document.createElement('template');

commentStyles = `
    <style>
        div{
            background : #00247E;
            margin : 0 0 10px 0;
            padding : 0 10px;
            color : #fff;
        }
    </style>
`

comment.innerHTML = `
    ${commentStyles}
    <div>
        نظرات
    </div>
    <formcomment-co>
        <!-- seperating form to have functionality -->
    </formcomment-co>
`

class Comment extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        this.shadowRoot.appendChild(comment.content.cloneNode(true));
    }
}

window.customElements.define('comment-co',Comment);