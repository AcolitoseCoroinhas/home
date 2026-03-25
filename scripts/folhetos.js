document.addEventListener("DOMContentLoaded", () => {

    const folhetos = [
        
        { data: "Livr. Semana Santa", arquivo: "LIVRETOSEMANASANTA2026.pdf" },
    ];

    const coresFolhetos = [

        "rgb(255, 31, 31)"
    ];

    const coresButtons = [

        "rgb(255, 31, 31)"
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
