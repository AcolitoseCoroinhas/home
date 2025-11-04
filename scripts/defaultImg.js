document.addEventListener("DOMContentLoaded", () => {

  const imagens = [
    { src: "imagens/DedicaçãodaBasílicadoLatrão.png", 
      alt: "Dedicação da Basílica do Latrão (Catedral de Roma) | Festa | Domingo"
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
