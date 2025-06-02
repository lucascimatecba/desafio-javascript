let carouselArr = [];

class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

  static Start(arr) {
    if (arr && arr.length > 0) {
      Carousel._sequence = 0;
      Carousel._size = arr.length;
      Carousel.Next(); //start
      Carousel._interval = setInterval(function() {
        Carousel.Next();
      }, 2000);
    } else {
      throw "Method Start need a Array Variable.";
    }
  }

  static Next() {
    const item = carouselArr[Carousel._sequence];

    const carouselDiv = document.querySelector("#carousel");
    const titleDiv = document.querySelector("#carousel-title");

    carouselDiv.innerHTML = `<img src="img/${item.image}">`;
    titleDiv.innerHTML = `<a href="${item.url}" target="_blank">${item.title}</a>`;

    Carousel._sequence++;
    if(Carousel._sequence >= Carousel._size) {
        Carousel._sequence = 0;
    }
  }
}