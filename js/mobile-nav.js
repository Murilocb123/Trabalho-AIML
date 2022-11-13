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

const mobileNavbar = new MobileNavbar(
    ".mobile-option",
    ".nav-itens",
    ".nav-itens li",
);
mobileNavbar.init();