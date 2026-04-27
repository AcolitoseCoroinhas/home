document.addEventListener("DOMContentLoaded", () => {

    const folhetos = [
        
        { data: "03-Mai-26", arquivo: "3-mai-26.pdf" },
        { data: "10-Mai-26", arquivo: "10-mai-26.pdf" },
        { data: "17-Mai-26", arquivo: "17-mai-26.pdf" },
        { data: "23-Mai-26", arquivo: "23-mai-26.pdf" },
        { data: "24-Mai-26", arquivo: "24-mai-26.pdf" },
        { data: "31-Mai-26", arquivo: "31-mai-26.pdf" },
    ];

    const coresFolhetos = [

        "rgb(255, 213, 25)",
        "rgb(255, 213, 25)",
        "rgb(255, 213, 25)",
        "rgb(255, 25, 25)",
        "rgb(255, 25, 25)",
        "rgb(255, 213, 25)",
    ];

    const coresButtons = [

        "rgb(255, 213, 25)",
        "rgb(255, 213, 25)",
        "rgb(255, 213, 25)",
        "rgb(255, 25, 25)",
        "rgb(255, 25, 25)",
        "rgb(255, 213, 25)",
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
