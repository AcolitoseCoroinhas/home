document.addEventListener("DOMContentLoaded", () => {

  const imagens = [
    { src: "imagens/santissimo_nome_jesus.png", 
      alt: "Santissimo Nome de Jesus"
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
