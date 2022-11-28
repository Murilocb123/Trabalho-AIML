class MobileNavbar{
    constructor(mobileOption, navItens, navlinks){
        this.mobileMenu = document.querySelector(mobileOption);
        this.navItens = document.querySelector(navItens);
        this.navLinks = document.querySelectorAll(navlinks);
        this.activeClass = "active";
        
        this.buttonClick = this.buttonClick.bind(this);
    }
    buttonClick(){
      this.navItens.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animacaoLinks();
    }
    animacaoLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation 
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / this.navLinks.length +0.2}s`);
        });
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.buttonClick);
    }

    init(){
      if(this.mobileMenu){
        this.addClickEvent();
      }
      return this;
    }

}

class SliderItens{
  constructor(id){
     this.slideIndex = 1;
     this.slideId = id;
  }


  init(){
    /*Caso queira retornar algo*/
    return this;
  }

  viewSlide(n){
    let i;
    let slides = document.getElementsByClassName(this.slideId);
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if(n < 1 ){
     this.slideIndex = slides.length;
    }
    for (index = 0; index < slides.length; index++) {
      slides[i].style.display = "none";
    }

    slides[this.slideIndex - 1].style.display = "block";
  }
}


/*Iniciando obj navbar*/
const mobileNavbar = new MobileNavbar(
  ".mobile-option",
  ".nav-itens",
  ".nav-itens li",
);

mobileNavbar.init();

/*Iniciando obj navbar*/
const sliderItens = new SliderItens("slide-item");
sliderItens.init();

function nextSlider(n){
  sliderItens.viewSlide(n);
}






