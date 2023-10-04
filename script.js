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
