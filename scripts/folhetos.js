document.addEventListener("DOMContentLoaded", () => {

    const folhetos = [

        { data: "18-Jan-26", arquivo: "18-jan-26.pdf" },
        { data: "25-Jan-26", arquivo: "25-jan-26.pdf" }

    ];

    const coresFolhetos = [

        "#1cf715ff",
        "#1cf715ff",
        "#1cf715ff",
        "#1cf715ff"

    ];

    const coresButtons = [

        "#1cf715ff",
        "#1cf715ff",
        "#1cf715ff",
        "#1cf715ff"

    ];

    const container = document.getElementById("folhetosContainer");

    folhetos.forEach((folheto, index) => {
        const div = document.createElement("div");
        div.classList.add("div-folhetos");

        const corDoButton = coresButtons[index % coresFolhetos.length];

        div.innerHTML = `
            <h1 class="text-folhetos">${folheto.data}</h1>
            <a href="folhetos/${folheto.arquivo}" target="_blank">
                <button class="button-folhetos" style="background-color: ${corDoButton};">Baixar</button>
            </a>
        `;

        container.appendChild(div);
    });
    document.querySelector("#folhetosContent .content").classList.remove("hidden");
});
