document.addEventListener("DOMContentLoaded", () => {

    const folhetos = [

        { data: "01-Fev-26", arquivo: "1-fev-26.pdf" },
        { data: "08-Fev-26", arquivo: "8-fev-26.pdf" },
        { data: "15-Fev-26", arquivo: "15-fev-26.pdf" },
        { data: "18-Fev-26", arquivo: "18-fev-26.pdf" },
        { data: "22-Fev-26", arquivo: "22-fev-26.pdf" },
    ];

    const coresFolhetos = [

        "rgb(69, 243, 63)",
        "rgb(69, 243, 63)",
        "rgb(69, 243, 63)",
        "rgb(118, 11, 160)",
        "rgb(118, 11, 160)"
    ];

    const coresButtons = [

        "rgb(69, 243, 63)",
        "rgb(69, 243, 63)",
        "rgb(69, 243, 63)",
        "rgb(118, 11, 160)",
        "rgb(118, 11, 160)"
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
