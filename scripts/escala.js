/*
document.addEventListener("DOMContentLoaded", () => {
    const escalas = [
        { nome: "Fevereiro", arquivo: "" }
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
    document.querySelector("#escalasContent .content").classList.remove("hidden");
});
*/

document.addEventListener("DOMContentLoaded", () => {
    const escalas = [
        { nome: "Fevereiro", arquivo: "escalas/EscaladeFevereiro.jpg" }
    ];

    const container = document.getElementById("escalasContainer");

    escalas.forEach(escala => {
        const div = document.createElement("div");
        div.classList.add("div-escala");

        const link = escala.arquivo || "";

        div.innerHTML = `
            <h1 class="text-escala">${escala.nome}</h1>
            <a href="${link}" target="_blank">
                <button class="button-escala">Baixar</button>
            </a>
        `;

        container.appendChild(div);
    });
    document.querySelector("#escalasContent .content").classList.remove("hidden");
});
