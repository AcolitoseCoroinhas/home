document.addEventListener("DOMContentLoaded", () => {

    const folhetos = [
        { data: "25-Out-26", arquivo: "25-Out-26.pdf", ativo: true },
        { data: "01-Nov-26", arquivo: "1-Nov-26.pdf", ativo: true },
        { data: "02-Nov-26", arquivo: "2-Nov-26.pdf", ativo: true },
        { data: "08-Nov-26", arquivo: "8-Nov-26.pdf", ativo: true },
        { data: "15-Nov-26", arquivo: "15-Nov-26.pdf", ativo: true },
        { data: "22-Nov-26", arquivo: "22-Nov-26.pdf", ativo: true },
    ];

    const coresButtons = [
        "rgb(89, 206, 10)",
        "#FFD700",
        "rgb(203, 44, 235)",
        "rgb(89, 206, 10)",
        "rgb(89, 206, 10)",
        "#FFD700",
    ];
    const container = document.getElementById("folhetosContainer");

    folhetos.forEach((folheto, index) => {
        const div = document.createElement("div");
        div.classList.add("div-folhetos");
        
        const estaAtivo = folheto.ativo;
        
        const corDoButton = estaAtivo ? coresButtons[index % coresButtons.length] : "gray";
        const disabledAttr = estaAtivo ? "" : "disabled";
        const linkHref = estaAtivo ? `folhetos/${folheto.arquivo}` : "javascript:void(0)";
        const pointerEvents = estaAtivo ? "" : "pointer-events: none; opacity: 0.6;";

        div.innerHTML = `
            <h1 class="text-folhetos">${folheto.data}</h1>
            <a href="${linkHref}" target="${estaAtivo ? "_blank" : "_self"}" style="${pointerEvents}">
                <button class="button-folhetos" style="background-color: ${corDoButton}; cursor: ${estaAtivo ? "pointer" : "not-allowed"};" ${disabledAttr}>
                    ${estaAtivo ? "Baixar" : "Indisponível"}
                </button>
            </a>
        `;
        container.appendChild(div);
    });
    document.querySelector("#folhetosContent .content").classList.remove("hidden");
});
