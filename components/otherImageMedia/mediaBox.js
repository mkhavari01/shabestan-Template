const mediaBox = document.createElement('template');

const mediaBoxStyle = `
    <style>
        section {
            display : flex;
            flex-direction : column;
            justify-content : space-between;
        }
        div {
            width : 320px;
            height : 220px;
            margin : 5px;
            margin-left : 0;
        }
        img{
            width : 100%;
            height : 100%;
        }
    </style>
`;

class MediaBox extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});

        mediaBox.innerHTML = `
            ${mediaBoxStyle}
            <section>
                    <div>
                        <img src="https://unsplash.it/612/612?random=1"/>
                    </div>
                    <div>
                        <img src="https://unsplash.it/612/612?random=2"/>
                    </div>
            </section>
        `

        this.shadowRoot.appendChild(mediaBox.content.cloneNode(true));

    }
}

window.customElements.define('mediabox-co',MediaBox);