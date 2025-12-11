class AccortionComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: "open"
        });

        const template = document.createElement("template");

        template.innerHTML = /*html*/ `
<style>

</style>
<div class="background">
        
</div>
`;

        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
}
customElements.define("accortion-component", AccortionComponent);