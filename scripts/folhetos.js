document.addEventListener("DOMContentLoaded", () => {

    const folhetos = [

        { data: "05-Jul-26", arquivo: "5-jul-26.pdf" },
        { data: "12-Jul-26", arquivo: "12-jul-26.pdf" },
        { data: "19-Jul-26", arquivo: "19-jul-26.pdf" },
        { data: "26-Jul-26", arquivo: "26-jul-26.pdf" },
    ];

    const coresFolhetos = [

        "rgb(89, 206, 10)",
        "rgb(89, 206, 10)",
        "rgb(89, 206, 10)",
        "rgb(89, 206, 10)",

    ];

    const coresButtons = [

        "rgb(89, 206, 10)",
        "rgb(89, 206, 10)",
        "rgb(89, 206, 10)",
        "rgb(89, 206, 10)",
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
