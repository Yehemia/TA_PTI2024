document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed(".text-animation", {
    strings: ["Back End Developer", "Ultraman", "Guitarist", "EXP Laner", "Sigma", "Mechanic"],
    typeSpeed: 80,
    backSpeed:100,
    backDelay: 1000,
    loop: true
  })
})

document.getElementById("contactForm").addEventListener("submit", function(event){
  event.preventDefault(); 
  alert("Thank you for contacting us!");
});

