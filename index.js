class Carousel {
  #arrowPrevious = document.querySelector("#back");
  #arrowNext = document.querySelector("#forward");
  #carouselContainer = document.querySelector(".carousel__container");
  #carouselShowFrame = document.querySelectorAll(".carousel__show-frame img");
  #allPagesList = document.querySelectorAll(".carousel__pages-page");
  #pagesContainer = document.querySelector(".carousel__pages-container");
  #arrowPosition = 0;
  #pageNumber = 1;

  arrowsControler() {
    this.updateCurrentPage();
    this.#carouselContainer.addEventListener("click", (item) => {
      if (item.target == this.#arrowNext) {
        this.nextImg();
      } else if (item.target == this.#arrowPrevious) {
        this.previousImg();
      }

      this.updateCurrentPage();
    });
  }

  pageSwitchController() {
    this.#pagesContainer.addEventListener("click", (item) => {
      let pageId = item.target.id;

      // Switch for different pages
      switch (pageId) {
        case "page1":
          this.#pageNumber = 1;
          this.#arrowPosition = 0;
          this.updateCurrentPage();
          break;
        case "page2":
          this.#pageNumber = 2;
          this.#arrowPosition = -600;
          this.updateCurrentPage();

          break;
        case "page3":
          this.#pageNumber = 3;
          this.#arrowPosition = -1200;
          this.updateCurrentPage();
          break;
      }

      this.#carouselShowFrame.forEach((item, index) => {
        item.style.transform = `translateX(${this.#arrowPosition}px)`;
        console.log(this.#arrowPosition);
      });
    });
  }

  updateCurrentPage() {
    // Clean old data foreach
    this.#allPagesList.forEach((element) => {
      element.innerHTML = "()";
      element.style.color = "black"
    });
    // Add new (X)
    const currentPage = document.querySelector(`#page${this.#pageNumber}`);
    currentPage.textContent = "(X)";
    currentPage.style.color = "red";
  }

  previousImg() {
    if (this.#arrowPosition < 0) {
      this.#arrowPosition += 600;
      this.#pageNumber--;
    } else {
      this.#arrowPosition = -1200;
      this.#pageNumber = 3;
    }
    this.#carouselShowFrame.forEach((item, index) => {
      item.style.transform = `translateX(${this.#arrowPosition}px)`;
      console.log(this.#arrowPosition);
    });
  }

  nextImg() {
    if (this.#arrowPosition > -1200) {
      this.#arrowPosition -= 600;
      this.#pageNumber++;
    } else {
      this.#arrowPosition = 0;
      this.#pageNumber = 1;
    }
    this.#carouselShowFrame.forEach((item, index) => {
      item.style.transform = `translateX(${this.#arrowPosition}px)`;
      console.log(this.#arrowPosition);
    });
  }
}

// APP HERE
const carousel = new Carousel();

carousel.arrowsControler();
carousel.pageSwitchController();
