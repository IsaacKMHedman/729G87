class ToggleButton extends HTMLElement {
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
        align-items: center;
        margin: 0.3em 0;
    }

    .label {
        margin-right: 0.5em;
    }

    .box {
        width: 20px;
        height: 20px;
        border: 2px black solid;
        background: white;
        cursor: pointer;
    }

    .box.on {
        background: lightgreen;
    }
</style>

<span class="label"></span>
<div class="box"></div>

`;

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this._label = this.shadowRoot.querySelector(".label");
        this._box = this.shadowRoot.querySelector(".box");

        this._value = 0;

        this._label.textContent = this.getAttribute("label") || "";
        this._box.addEventListener("click", () => {
            this.value = this._value === 0 ? 1 : 0;
        });
    }

    get value() {
        return this._value;
    }

    set value(val) {
        const num = Number(val);
        if (num !== 0 && num !== 1) return;

        this._value = num;

        if (num === 1) {
            this._box.classList.add("on");
        } else {
            this._box.classList.remove("on");
        }

        this._box.setAttribute("aria-pressed", num === 1 ? "true" : "false");

        this.dispatchEvent(new Event("input", {
            bubbles: true
        }));
    }
}
customElements.define("toggle-button", ToggleButton);