document.addEventListener("DOMContentLoaded", () => {

  const imagens = [
    { src: "imagens/sao_davi_rei.png", 
      alt: "São Davi"
    }
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
