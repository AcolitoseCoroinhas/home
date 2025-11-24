document.addEventListener("DOMContentLoaded", () => {
    const folhetos = [
        { data: "30-Nov-25", arquivo: "30-nov-25.pdf" },
        { data: "07-Dez-25", arquivo: "7-dez-25.pdf" },
        { data: "14-Dez-25", arquivo: "14-dez-25.pdf" },
        { data: "21-Dez-25", arquivo: "21-dez-25.pdf" },
        { data: "24-Dez-25", arquivo: "24-dez-25.pdf" },
        { data: "25-Dez-25", arquivo: "25-dez-25.pdf" },
        { data: "28-Dez-25", arquivo: "28-dez-25.pdf" }
    ];

    const coresFolhetos = [
        "#7127a1ff",
        "#7127a1ff",
        "#7127a1ff",
        "#7127a1ff",
        "#ffcf31ff",
        "#ffcf31ff",
        "#ffcf31ff"
    ];

    const container = document.getElementById("folhetosContainer");

    folhetos.forEach((folheto, index) => {
        const div = document.createElement("div");
        div.classList.add("div-folhetos");
        
        const corDoTexto = coresFolhetos[index % coresFolhetos.length];

        div.innerHTML = `
            <h1 class="text-folhetos" style="color: ${corDoTexto};">${folheto.data}</h1>
            <a href="folhetos/${folheto.arquivo}" target="_blank">
                <button class="button-folhetos">Baixar</button>
            </a>
        `;

        container.appendChild(div);
    });
});
