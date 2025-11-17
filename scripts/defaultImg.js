document.addEventListener("DOMContentLoaded", () => {

  const imagens = [
    { src: "imagens/santa_isabel_hungria.png", 
      alt: "Santa Isabel da Hungria"
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
