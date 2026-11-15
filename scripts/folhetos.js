document.addEventListener("DOMContentLoaded", () => {

    const folhetos = [
        { data: "15-Nov-26", arquivo: "15-Nov-26.pdf", ativo: true },
        { data: "22-Nov-26", arquivo: "22-Nov-26.pdf", ativo: true },
        { data: "29-Nov-26", arquivo: "29-Nov-26.pdf", ativo: true },
        { data: "06-Dez-26", arquivo: "06-Dez-26.pdf", ativo: true },
        { data: "13-Dez-26", arquivo: "13-Dez-26.pdf", ativo: true },
        { data: "20-Dez-26", arquivo: "20-Dez-26.pdf", ativo: true },
        { data: "24-Dez-26", arquivo: "24-Dez-26.pdf", ativo: true },
        { data: "25-Dez-26", arquivo: "25-Dez-26.pdf", ativo: true },
        { data: "27-Dez-26", arquivo: "27-Dez-26.pdf", ativo: true },
    ];

    const coresButtons = [
        "rgb(89, 206, 10)",
        "#FFD700",
        "rgb(174, 10, 224)",
        "rgb(174, 10, 224)",
        "rgb(245, 65, 200)",
        "rgb(174, 10, 224)",
        "#FFD700",
        "#FFD700",
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
