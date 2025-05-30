let carouselArr = [];

class Carousel {
    constructor(imagem, titulo, link) {
        this.imagem = imagem;
        this.titulo = titulo;
        this.link = link;
    }

  static Start(arr) {
    if (arr && arr.length > 0) {
      Carousel._sequence = 0;
      Carousel._size = arr.length;
      Carousel.Next(); //start
      Carousel._interval = setInterval(function() {
        Carousel.Next();
      }, 5000);
    } else {
      throw "Method Start need a Array Variable.";
    }
  }

  static Next() {
    const item = carouselArr[Carousel._sequence];

    const carouselDiv = document.querySelector("#carousel");
    const titleDiv = document.querySelector("#carousel-title");

    carouselDiv.innerHTML = `<img src="img/${item.imagem}">`;
    titleDiv.innerHTML = `<a href="${item.link}" target="_blank">${item.titulo}</a>`;

    Carousel._sequence++;
    if(Carousel._sequence >= Carousel._size) {
        Carousel._sequence = 0;
    }
  }
}