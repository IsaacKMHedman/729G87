class ToggleButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: "open"
        });

        const template = document.createElement("template");
//SKapar mallen
        template.innerHTML = /*html*/ `
<style>
    :host {
        display: flex;
        align-items: center;
        margin: 0.3em 0;
    }

    .wrapper {
        display: flex;
        align-items: center;
    }

    p {
        margin: 0;
        margin-right: 0.5em;
    }

    .toggle {
        width: 20px;
        height: 20px;
        border: 2px solid black;
        background: white;
        cursor: pointer;
    }

    .toggle[aria-pressed="true"] {
        background: lightgreen;
    }
</style>

<div class="wrapper">
    <p></p>
    <div class="toggle" role="button" aria-pressed="false"></div>
</div>
`;
//KLonar innehåll från mallen och skickar in i shadowrealmen, gör att html/css endast gäller för detta
        this.shadowRoot.appendChild(template.content.cloneNode(true));
//hämta referenser
        this._label = this.shadowRoot.querySelector("p");
        this._toggle = this.shadowRoot.querySelector(".toggle");
//värde 0 -- avtängd
        this._value = 0;
//textem
        this._label.textContent = this.getAttribute("label") || "";
//händelse ändrar värde
        this._toggle.addEventListener("click", () => {
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

        this._toggle.setAttribute("aria-pressed", num === 1 ? "true" : "false");

        this.dispatchEvent(new Event("input", {
            bubbles: true
        }));
    }
}

customElements.define("toggle-button", ToggleButton);