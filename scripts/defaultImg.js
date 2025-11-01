document.addEventListener("DOMContentLoaded", () => {

  const imagens = [
    { src: "imagens/Missadosfieisdefuntos.png", alt: "Missa dos fiéis defuntos" }
  ];

  const container = document.getElementById("defaultImgContainer");

  imagens.forEach(img => {
    const image = document.createElement("img");
    image.src = img.src;
    image.alt = img.alt;
    image.classList.add("default-img");

    container.appendChild(image);
  });
});
