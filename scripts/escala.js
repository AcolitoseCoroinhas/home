document.addEventListener("DOMContentLoaded", () => {
    const escalas = [
        { nome: "NOVEMBRO", arquivo: "" }
    ];

    const container = document.getElementById("escalasContainer");

    escalas.forEach(escala => {
        const div = document.createElement("div");
        div.classList.add("div-escala");

        const disabled = escala.arquivo === "" ? "disabled" : "";
        const link = escala.arquivo || "#";

        div.innerHTML = `
            <h1 class="text-escala">${escala.nome}</h1>
            <a href="${link}">
                <button class="button-escala" ${disabled}>Baixar</button>
            </a>
        `;

        container.appendChild(div);
    });
});
