document.addEventListener("DOMContentLoaded", () => {
    const escalas = [
        { nome: "OUTUBRO", arquivo: "EscalaOutubro.PNG" }
    ];

    const container = document.getElementById("escalasContent");

    escalas.forEach(escala => {
        const div = document.createElement("div");
        div.classList.add("div-escala");

        div.innerHTML = `
            <h1 class="text-escala">${escala.nome}</h1>
            <a href="escalas/${escala.arquivo}" target="_blank">
                <button class="button-escala">Baixar</button>
            </a>
        `;

        container.appendChild(div);
    });
});
