class InfoMessage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: "open"
        });

        const template = document.createElement("template");

        template.innerHTML = /*html*/ `
<style>
    :host {
        display: flex;
        margin: 2rem 0;
        font-family: sans-serif;
    }

    .infobox {
        border: 2px solid lightgrey;
        border-radius: 4px;
        background: white;
    }

    .heading {
        display: flex;
        align-items: center;
        background: orange;
        color: white;
        padding: 0.6rem 1rem;
        gap: 0.6rem;
        font-weight: bold;
        font-size: 1.1rem;
    }

    .icon {
        width: 24px;
        height: 24px;
        filter: invert(100%) brightness(200%);
    }

    .message {
        padding: 1rem 1.3rem;
        font-size: 1rem;
    }
</style>

<div class="infobox">
    <div class="heading">
        <div class="icon center">
            <img src="http://leungwensen.github.io/svg-icon/dist/svg/awesome/info-circle.svg" alt="info icon">
        </div>
        <div class="title">
            <p>
                <slot name="title">TITLE</slot>
            </p>
        </div>
    </div>

    <div class="message">
        <slot name="message">MESSAGE</slot>
    </div>
</div>
`;

        this.shadowRoot.appendChild(template.content.cloneNode(true));


    }
}
customElements.define("info-message", InfoMessage);