document.addEventListener("DOMContentLoaded", () => {

    const folhetos = [

        { data: "04-Jan-26", arquivo: "04-jan-26.pdf" },
        { data: "11-Jan-26", arquivo: "11-jan-26.pdf" },
        { data: "18-Jan-26", arquivo: "18-jan-26.pdf" },
        { data: "25-Jan-26", arquivo: "25-jan-26.pdf" }

    ];

    const coresFolhetos = [

        "#ffcf31ff",
        "#ffcf31ff",
        "#1cf715ff",
        "#1cf715ff"

    ];

    const coresButtons = [

        "#ffcf31ff",
        "#ffcf31ff",
        "#1cf715ff",
        "#1cf715ff"
        
    ]

    const container = document.getElementById("folhetosContainer");

    folhetos.forEach((folheto, index) => {
        const div = document.createElement("div");
        div.classList.add("div-folhetos");

        const corDoTexto = coresFolhetos[index % coresFolhetos.length];

        const corDoButton = coresButtons[index % coresFolhetos.length];

        div.innerHTML = `
            <h1 class="text-folhetos" style="color: ${corDoTexto};">${folheto.data}</h1>
            <a href="folhetos/${folheto.arquivo}" target="_blank">
                <button class="button-folhetos" style="background-color: ${corDoButton};">Baixar</button>
            </a>
        `;

        container.appendChild(div);
    });
});
