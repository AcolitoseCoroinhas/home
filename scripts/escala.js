document.addEventListener("DOMContentLoaded", () => {
    
    const escalas = [
        { nome: "JULHO", arquivo: "escalas/Escaladejulho.jpg", ativo: true },
        { nome: "AGOSTO", arquivo: "", ativo: false }
    ];

    const container = document.getElementById("escalasContainer");

    escalas.forEach(escala => {
        const div = document.createElement("div");
        div.classList.add("div-escala");

        const estaHabilitado = escala.ativo && escala.arquivo !== "";
        
        const disabledAttr = estaHabilitado ? "" : "disabled";
        const linkHref = estaHabilitado ? escala.arquivo : "javascript:void(0)";
        const cursorStyle = estaHabilitado ? "pointer" : "not-allowed";
        const opacityStyle = estaHabilitado ? "1" : "0.6";

        div.innerHTML = `
            <h1 class="text-escala">${escala.nome}</h1>
            <a href="${linkHref}" target="${estaHabilitado ? "_blank" : "_self"}" style="text-decoration: none; ${estaHabilitado ? "" : "pointer-events: none;"}">
                <button class="button-escala" ${disabledAttr} style="cursor: ${cursorStyle}; opacity: ${opacityStyle};">
                    ${estaHabilitado ? "Baixar" : "Indisponível"}
                </button>
            </a>
        `;

        container.appendChild(div);
    });
    document.querySelector("#escalasContent .content").classList.remove("hidden");
});
