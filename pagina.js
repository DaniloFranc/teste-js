const b = document.body

const body0=

    "display: flex;"+
    "justify-content: center;"+
    "align-items: center;"+
    "background-image: url('fundo-Netflix-escuro.jpg');"
   

    
b.setAttribute("style",body0)

const logoButtons=
    "display: block;"+
    "text-align: center;"+
    "margin-top: 20px;"

const imagemLogo=
    "width: 148px;"+
    "height: 40px;"+
    "margin-top: 20px;"

const dropdown=
    "position: relative;"+
    "margin-left: 1010px;"+
    "display: inline-block;"+
    "vertical-align: middle;"

const dropdownToggleWorld=
    "width: 148px;"+
    "height: 32px;"+
    "background-color: transparent;"+
    "border: 2px solid #ffffff;"+
    "color: #ffffff;"+
    "padding: 5px 35px;"+
    "font-size: 16px;"+
    "display: flex;"+
    "align-items: center;"
    

const button02=
    "width: 72.42px;"+
    "height: 32px;"+
    "background-color: #f00d1c;"+
    "color: #fff;"+
    "border: none;"+
    "font-size: 16px;"+
    "font-weight: bold;"+
    "cursor: pointer;"+
    "margin-left: 15px;"+
    "border-radius: 5px;"


const hearder=document.createElement("header")
const divTopo=document.createElement("div")
const img=document.createElement("img")
const divTopo1=document.createElement("div")
const button1=document.createElement("button")
const button2=document.createElement("button")
const span=document.createElement("span")

console.log(span)
console.log(divTopo)

b.prepend(hearder)
hearder.prepend(divTopo)


divTopo.prepend(divTopo1)

divTopo1.setAttribute("style",dropdown)
divTopo.setAttribute("style",logoButtons)

divTopo.prepend(img)
divTopo1.prepend(button1)
divTopo.appendChild(button2)

button1.setAttribute("style",dropdownToggleWorld)
button1.innerHTML="Português"

button2.setAttribute("style",button02)

button2.innerHTML="Entrar"


img.setAttribute("style",imagemLogo)
img.setAttribute("src","logo.svg")
img.setAttribute("alt","logo Netflix")

// // divPrinc.setAttribute("src","logo.svg")
// divPrinc.setAttribute("alt","logo Netflix")


// const b=document.getElementById("body")

// b.innerHTML="ffff"

// .body {
//     display: flex;
//   justify-content: center;
//   align-items: center;
//   background-image: url('/static/img/fundo-Netflix-escuro.jpg');  
    
//   }

// .logo-buttons {
//     display: block;
//     text-align: center;
//     margin-top: 20px;
//   }

// .dropdown {
//     position: relative;
//     display: block;
//     margin-left: 1010px;
// }

// .dropdown-toggle.world:before {
//     content: '';
//     display: inline-block;
//     width: 20px;
//     height: 20px;
   
//     background-size: contain;
//     background-repeat: no-repeat;
//     margin-right: 10px;
//   }