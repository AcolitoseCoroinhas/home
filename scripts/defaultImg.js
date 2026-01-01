document.addEventListener("DOMContentLoaded", () => {

  const imagens = [
    { src: "imagens/Solenidade de Maria, Mãe de Deus.png", 
      alt: "Solenidade de Maria, Mãe de Deus"
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
