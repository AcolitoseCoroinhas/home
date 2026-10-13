document.addEventListener("DOMContentLoaded", () => {

    const folhetos = [
        { data: "18-Out-26", arquivo: "18-10-26.pdf", ativo: true },
        { data: "25-Out-26", arquivo: "25-10-26.pdf", ativo: true },
    ];

    const coresButtons = [
        "rgb(89, 206, 10)",
        "rgb(89, 206, 10)",
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
