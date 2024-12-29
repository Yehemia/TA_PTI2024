document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.getElementById("scroll-btn");
    scrollBtn.addEventListener("click", function (event) {
        event.preventDefault(); 
        const targetSection = document.querySelector("#section2");

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});
