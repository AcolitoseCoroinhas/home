document.addEventListener("DOMContentLoaded", () => {

    const folhetos = [
        { data: "1-Mar-26", arquivo: "1-mar-26.pdf" },
        { data: "8-Mar-26", arquivo: "8-mar-26.pdf" },
        { data: "15-Mar-26", arquivo: "15-mar-26.pdf" },
        { data: "22-Mar-26", arquivo: "22-mar-26.pdf" },
    ];

    const coresFolhetos = [

        "rgb(118, 11, 160)"
    ];

    const coresButtons = [

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
