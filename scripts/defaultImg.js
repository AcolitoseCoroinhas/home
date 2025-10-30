document.addEventListener("DOMContentLoaded", () => {

  const imagens = [
    { src: "imagens/DiadeTodososSantos.png", alt: "Dia de todos os Santos" }
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
