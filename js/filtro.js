let buttons = document.querySelectorAll(".filter");

function filterProduct(value) {
    //Button class code
    buttons.forEach((button) => {
        //check if value equals innerText
        if (value == button.innerText) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    //select all cards
    let elements = document.querySelectorAll(".cont-work");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "todos") {
            element.classList.remove("hide");
        } else {
            //Check if element contains category class
            if (element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });

}

//Initially display all products
window.onload = () => {
    filterProduct("todos");
};

// constantes  secciones y su id 
let header = document.getElementById("header");
let headerid = `#` + header.getAttribute("id");


let equipo = document.getElementById("equipo");
let equipoid = `#` + equipo.getAttribute("id");

let servicio = document.getElementById("servicio");
let servicioid = `#` + servicio.getAttribute("id");


let trabajo = document.getElementById("trabajo");
let trabajoid = `#` + trabajo.getAttribute("id");

let contacto = document.getElementById("contacto");
let contactoid = `#` + contacto.getAttribute("id");

let sections = document.querySelectorAll("section");



let links = document.querySelectorAll(".btn-header");
for (var i = 0; i < links.length; i++) {
    let link = links[i];

    link.addEventListener("click", function(e) {
        let linkHref = this.getAttribute("href");
        e.preventDefault();
        if (linkHref == headerid) {
            window.scrollTo(0, 0)
        };
        if (linkHref == equipoid) {
            window.scrollTo(0, 700)
        };
        if (linkHref == servicioid) {
            if (screen.width < 400) {
                window.scrollTo(0, 2039)
            } else if (screen.width > 400 && screen.width < 700) {
                window.scrollTo(0, 2165)
            } else {
                window.scrollTo(0, 1350)
            };
        };
        if (linkHref == trabajoid) {
            if (screen.width < 400) {
                window.scrollTo(0, 2775)
            } else if (screen.width < 500) {
                window.scrollTo(0, 2860)
            } else if (screen.width > 500 && screen.width < 700) {
                window.scrollTo(0, 2670)
            } else if (screen.width > 700 && screen.width < 1000) {
                window.scrollTo(0, 1575)
            } else {
                window.scrollTo(0, 1537)
            };
        };
        if (linkHref == contactoid) {
            window.scrollTo(0, 8000)
        };
    });
};