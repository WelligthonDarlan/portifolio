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

// ------------------CONTATO------------------

// let sheetName = 'Sheet1'
// let scriptProp = PropertiesService.getScriptProperties()

// function intialSetup () {
//   let activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
//   scriptProp.setProperty('key', activeSpreadsheet.getId())
// }

// function doPost (e) {
//   let lock = LockService.getScriptLock()
//   lock.tryLock(10000)

//   try {
//     let doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
//     let sheet = doc.getSheetByName(sheetName)

//     let headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
//     let nextRow = sheet.getLastRow() + 1

//     let newRow = headers.map(function(header) {
//       return header === 'timestamp' ? new Date() : e.parameter[header]
//     })

//     sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

//     return ContentService
//       .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
//       .setMimeType(ContentService.MimeType.JSON)
//   }

//   catch (e) {
//     return ContentService
//       .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
//       .setMimeType(ContentService.MimeType.JSON)
//   }

//   finally {
//     lock.releaseLock()
//   }
// }

document.querySelector('#menu-btn').onclick = () => {
    document.querySelector('#menu-btn').classList.toggle('fa-times')
    document.querySelector('.navbar').classList.toggle('active')
}


function remove(){
    document.querySelector('#menu-btn').classList.remove('fa-times')
    document.querySelector('.navbar').classList.remove('active')
}
// const div = document.getElementById('nav-bar')
// const menuA = div.children;


// const remover = document.getElementById('remover')

// remover.onclick = () => {
//     document.querySelector('#menu-btn').classList.remove('fa-times')
//     document.querySelector('.navbar').classList.remove('active')
// }