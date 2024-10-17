let body1 = document.querySelector("body")
let div1 = document.createElement("div")
let br = document.createElement("br")
let br2 = document.createElement("br")
let lista = document.createElement("ul")

div1.style.width = "300px";
div1.style.height = "300px";
div1.style.border = "1px solid black";

// zadanie 1


let btn1 = document.createElement("button")
btn1.textContent = "zmień kolor na zielony";
btn1.setAttribute("onclick", "kolor1()")

function kolor1() {
    div1.style.background = "green"
}

let btn2 = document.createElement("button")
btn2.textContent = "zmień kolor na czerwony";
btn2.setAttribute("onclick", "kolor2()")

function kolor2() {
    div1.style.background = "red";
}

// zadanie 2

let inpP = document.createElement("input")
inpP.setAttribute("id", "inp")

let btnP = document.createElement("button")
btnP.textContent = "Wstaw paragraf";
btnP.setAttribute("onclick", "par()")

function par(){
    let val = document.getElementById("inp").value 
    let paragra = document.createElement("p")
    paragra.textContent = val
    div1.appendChild(paragra)
}

// zadanie 3

let inp1 = document.createElement("input")
let inp2 = document.createElement("input")
let btnRes = document.createElement("button")
inp1.setAttribute("id", "height")
inp1.setAttribute("placeholder","wysokosc w px")
inp2.setAttribute("id", "width")
inp2.setAttribute("placeholder","szerokosc w px")
btnRes.setAttribute("onclick", "rozmiary()")
btnRes.textContent = "Zmień rozmiar";

function rozmiary() {
    let hei = document.getElementById("height").value
    let wid = document.getElementById("width").value
    div1.style.height = hei+"px";
    div1.style.width = wid+"px";
}

// zadanie 4

let inpList = document.createElement("input")
let btnList = document.createElement("button")
inpList.setAttribute("id", "lis")
btnList.setAttribute("onclick", "list()")
btnList.textContent = "Wstaw do listy";

function list(){
    let li = document.createElement("li")
    let valu = document.getElementById("lis").value
    let delet = document.createElement("button");
    delet.textContent = "Usuń";

    delet.addEventListener("click", ()=>{
        lista.removeChild(li)
    })
        

    li.innerHTML = valu+ " ";
    li.appendChild(delet)
    lista.appendChild(li)
}





body1.appendChild(div1)

div1.appendChild(btn2)
div1.appendChild(btn1)

body1.appendChild(inpP)
body1.appendChild(btnP)
body1.appendChild(br)

body1.appendChild(inp1)
body1.appendChild(inp2)
body1.appendChild(btnRes)
body1.appendChild(br2)


body1.appendChild(inpList)
body1.appendChild(btnList)
body1.appendChild(lista)