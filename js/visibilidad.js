var reveals = document.getElementsByClassName("reveal");

function reveal() {
    // mostrar los elementos en scroll
    // show elements on scroll 
    Array.from(reveals).forEach((revealobj) => {
        var elementTop = revealobj.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        var elementVisible = 200;

        if (elementTop < (windowHeight - elementVisible)) {
            revealobj.classList.add("active");
        } else {
            revealobj.classList.remove("active");
        };
    });


}
window.addEventListener("scroll", reveal);