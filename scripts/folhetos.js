document.addEventListener("DOMContentLoaded", () => {
    const folhetos = [
        { data: "02-Nov-25", arquivo: "02-nov-25.pdf" },
        { data: "09-Nov-25", arquivo: "09-nov-25.pdf" },
        { data: "16-Nov-25", arquivo: "16-nov-25.pdf" },
        { data: "23-Nov-25", arquivo: "23-nov-25.pdf" },
        { data: "30-Nov-25", arquivo: "30-nov-25.pdf" }
    ];

    const coresFolhetos = [
        "#8734beff",
        "#d8ae23ff",
        "#5bf85bff",
        "#d8ae23ff",
        "#8734beff"
    ];

    const container = document.getElementById("folhetosContainer");

    folhetos.forEach((folheto, index) => {
        const div = document.createElement("div");
        div.classList.add("div-folhetos");
        div.style.backgroundColor = coresFolhetos[index % coresFolhetos.length];

        div.innerHTML = `
            <h1 class="text-folhetos">${folheto.data}</h1>
            <a href="folhetos/${folheto.arquivo}" target="_blank">
                <button class="button-folhetos">Baixar</button>
            </a>
        `;

        container.appendChild(div);
    });
});
