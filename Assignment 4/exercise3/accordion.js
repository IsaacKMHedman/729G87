class Accordion extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {

        this.shadowRoot.innerHTML = /*html*/ `
        <style>
            .accordion {
                width: 100%;
            }
        
            ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }
        
            li {
                margin-bottom: 0.5rem;
            }
        
            button {
                width: 100%;
                text-align: left;
                padding: 1rem 1.5rem;
                background-color: #6b8399;
                border: none;
                cursor: pointer;
                font-size: 1rem;
                font-weight: bold;
                color: white;
                transition: background-color 0.2s;
                position: relative;
            }
        
            button::before {
                content: "▶";
                position: absolute;
                left: 0.5rem;
                transition: transform 0.2s;
            }
        
            button[aria-expanded="true"]::before {
                transform: rotate(90deg);
            }
        
            button:hover {
                background-color: #5a7188;
            }
        
            button:focus {
                outline: 2px solid #333;
                outline-offset: 2px;
            }
        
            div[role="region"] {
                padding: 1rem;
                border: 1px solid #ccc;
                background-color: #fff;
                margin-bottom: 0.5rem;
            }
        
            div[role="region"] p {
                font-size: 0.95rem;
                line-height: 1.6;
                margin-bottom: 0.75rem;
                color: #333;
            }
        
            div[role="region"] p:last-child {
                margin-bottom: 0;
            }
        </style>
        <div class="accordion">
            <ul></ul>
        </div>
        `;

        const ul = this.shadowRoot.querySelector("ul");

        const children = Array.from(this.children);

        for (let i = 0; i < children.length; i += 2) {
            const heading = children[i];
            const content = children[i + 1];
            if (!heading || !content) continue;
            const li = document.createElement("li");
            const button = document.createElement("button");
            button.innerHTML = heading.innerHTML;
            button.setAttribute("aria-expanded", "false");
            const contentDiv = document.createElement("div");
            contentDiv.setAttribute("role", "region");
            contentDiv.setAttribute("hidden", '');
            contentDiv.innerHTML = content.innerHTML;
            button.addEventListener("click", () => {
                const isExpanded = button.getAttribute("aria-expanded") === "true";

                if (isExpanded) {
                    button.setAttribute("aria-expanded", "false");
                    contentDiv.setAttribute("hidden", '');
                } else {
                    button.setAttribute("aria-expanded", "true");
                    contentDiv.removeAttribute("hidden");
                }
            });

            li.appendChild(button);
            li.appendChild(contentDiv);
            ul.appendChild(li);
        }
    }
}
customElements.define("accordion-component", Accordion);