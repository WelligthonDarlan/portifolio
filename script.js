// ------------------NAVBAR------------------
// class MobileNavbar{
//     constructor(mobileMenu, navList, navLinks){
//         this.mobileMenu = document.querySelector(mobileMenu)
//         this.navList = document.querySelector(navList)
//         this.navLinks = document.querySelectorAll(navLinks)
//         this.activeClass = 'active'

//         this.handleClick = this.handleClick.bind(this)

//     }

//     animateLinks(){
//         this.navLinks.forEach((link, index) => {
//             link.style.animation
//             ? (link.style.animation = "")
//             : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
//         })
//     }

//     handleClick(){
//         this.navList.classList.toggle(this.activeClass)
//         this.mobileMenu.classList.toggle(this.activeClass)
//         this.animateLinks()
//     }

//     addClickEvent(){
//         this.mobileMenu.addEventListener('click', this.handleClick)
//     }

//     init(){
//         if(this.mobileMenu){
//             this.addClickEvent()
//         }
//         return this
//     }
// }

// const mobileNavbar = new MobileNavbar(
//     ".mobile-menu",
//     ".nav-list",
//     ".nav-list li"
// )

// mobileNavbar.init()

// ------------------NAVBAR------------------

let tabLinks = document.getElementsByClassName('tab-links')

let tabContents = document.getElementsByClassName('tab-contents')

function openTab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove('active-link')
    }
    for(tabContent of tabContents){
        tabContent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add("active-tab")
}

// ------------------ABOUT------------------

document.querySelector('#menu-btn').onclick = () => {
    document.querySelector('#menu-btn').classList.toggle('fa-times')
    document.querySelector('.navbar').classList.toggle('active')
}


function remove(){
    document.querySelector('#menu-btn').classList.remove('fa-times')
    document.querySelector('.navbar').classList.remove('active')
}

// ------------------EFEITO FADE------------------

class Fade {
    constructor(items, delay) {
        this.items = items;
        this.delay = delay || 70;
    }

    fadeIn(el) {
        let opacity = 0;
        const timer = setInterval(() => {
            if (opacity < 1) {
                opacity += 0.1;
                el.style.opacity = opacity;
            } else {
                clearInterval(timer);
            }
        }, this.delay);
    }

    checkFades() {
        this.items.forEach((el) => {
            const wHeight = window.innerHeight * 0.75;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < wHeight) {
                if (el.style.opacity === "" || el.style.opacity === "0") {
                    this.fadeIn(el);
                }
            }
        });
    }

    init() {
        if (this.items.length) {
            this.items.forEach((el) => {
                el.style.opacity = 0;
            });
            this.checkFades();
        }
        return this;
    }
}

const fadeInScroll = document.querySelectorAll(".fadeInScroll");

if (fadeInScroll.length) {
    const fade = new Fade(fadeInScroll);
    fade.init();

    window.addEventListener("scroll", () => {
        let timer;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fade.checkFades();
            timer = null;
        }, 200);
    });
}
