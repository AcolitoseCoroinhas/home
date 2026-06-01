document.addEventListener("DOMContentLoaded", () => {

    const folhetos = [
        
        { data: "04-Jun-26", arquivo: "4-jun-26.pdf" },
        { data: "07-Jun-26", arquivo: "7-jun-26.pdf" },
        { data: "14-Jun-26", arquivo: "14-jun-26.pdf" },
        { data: "21-Jun-26", arquivo: "21-jun-26.pdf" },
        { data: "28-Jun-26", arquivo: "28-jun-26.pdf" },
    ];

    const coresFolhetos = [

        "rgb(255, 213, 25)",
        "rgb(89, 206, 10)",
        "rgb(89, 206, 10)",
        "rgb(89, 206, 10)",
        "rgb(255, 25, 25)",
    ];

    const coresButtons = [

        "rgb(255, 213, 25)",
        "rgb(89, 206, 10)",
        "rgb(89, 206, 10)",
        "rgb(89, 206, 10)",
        "rgb(255, 25, 25)",
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
