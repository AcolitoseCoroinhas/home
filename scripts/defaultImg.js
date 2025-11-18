document.addEventListener("DOMContentLoaded", () => {

  const imagens = [
    { src: "imagens/NossoSenhorJesusCristoReidoUniverso.png", 
      alt: "Nosso Senhor Jesus Cristo Rei do Universo"
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
