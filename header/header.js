// header.js

class Header {

  constructor () {
    this.element = document.createElement("div");
    this.element.className = "header";

    this.img = document.createElement("img");
    this.img.className = "header__img";
    this.img.src = "images/eisenhower-matrix.jpg";
    this.img.alt = "Eisenhower Matrix Diagram"

    this.link = document.createElement("a");
    this.link.className = "header__link";
    this.link.href = "https://goal-life.com/page/method/matrix-eisenhower";
    this.link.innerText = "Want more details?"

    this.element.appendChild(this.img);
    this.element.appendChild(this.link);
  }

  getElement() {
    return this.element;
  }
}

export { Header };
