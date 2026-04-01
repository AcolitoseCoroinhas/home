document.addEventListener("DOMContentLoaded", () => {

    const folhetos = [
        
        { data: "Livr. Semana Santa", arquivo: "LIVRETOSEMANASANTA2026.pdf" },
        { data: "12-Abr-26", arquivo: "12-abr-26.pdf" },
        { data: "19-Abr-26", arquivo: "19-abr-26.pdf" },
        { data: "26-Abr-26", arquivo: "26-abr-26.pdf" },
    ];

    const coresFolhetos = [

        "rgb(31, 173, 255)",
        "rgb(245, 212, 67)",
        "rgb(245, 212, 67)",
        "rgb(245, 212, 67)"
    ];

    const coresButtons = [

        "rgb(31, 173, 255)",
        "rgb(245, 212, 67)",
        "rgb(245, 212, 67)",
        "rgb(245, 212, 67)"
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
