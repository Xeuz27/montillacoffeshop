let nav = document.getElementById("nav");
let menu = document.getElementById("enlaces");
let abrirMenu = document.getElementById("open");
let botones = document.getElementsByClassName("btn-header");
let cerrado = true;


function ChangeMenu() {
    let ActualYOffset = window.pageYOffset;
    if (ActualYOffset <= 350) {
        nav.classList.remove("nav2");
        nav.className = ("nav1");
        nav.style.transition = "0.8s";
        menu.style.top = "75px"
        abrirMenu.style.color = "#fff"
    } else {
        nav.classList.remove("nav1");
        nav.className = ("nav2");
        nav.style.transition = "1s";
        menu.style.top = "95px";
        abrirMenu.style.color = "#000";
    }
}

function apertura() {
    if (cerrado) {
        menu.style.width = "180px";
        cerrado = false;
    } else {
        menu.style.width = "0%";
        menu.style.overflow = "hidden";
        cerrado = true;
    }
}

function OcultarLoader() {
    let Loader = document.getElementById("onload")
    Loader.style.display = "none";
    Loader.style.transition = "1.5s";

}

function HeightResponsive() {
    let filterBgs = Array.from(document.getElementsByClassName("filter-bg"))
    let filterBg = filterBgs[0];
    let filterBg1 = filterBgs[1];

    if (this.screen.width <= 500) {
        filterBg.classList.add("height-responsive")
        filterBg1.classList.add("height-responsive-footer")
    } else {
        filterBg.classList.remove("height-responsive")
        filterBg1.classList.remove("height-responsive-footer")
    }

}


// dom events 

window.addEventListener("load", function() {
    OcultarLoader();
    ChangeMenu();
    HeightResponsive();
});

window.addEventListener("scroll", function() {
    ChangeMenu();
    console.log(this.window.pageYOffset)

});

window.addEventListener("resize", function() {


    if (screen.width >= 700) {
        cerrado = true;
        menu.style.removeProperty("overflow");
        menu.style.removeProperty("width");
    }
    HeightResponsive()


});

window.addEventListener("click", function(e) {
    if (cerrado == false) {
        let span = document.querySelector("span")
        if (e.target !== span && e.target !== abrirMenu) {
            menu.style.width = "0%"
            menu.style.overflow = "hidden";
            cerrado = true
        }
    }
})

abrirMenu.addEventListener("click", function() {
    apertura();

});