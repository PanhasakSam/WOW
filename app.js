const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach(previews => {
    previews.addEventListener('click', () => {
        modal.classList.add("open");
        original.classList.add("open");
        //Dynamic change text and image
        const originalSrc = previews.getAttribute("data-original")
        original.src = `./full/${originalSrc}`;
        const altText = previews.alt;
        caption.textContent = altText
    });
});

modal.addEventListener('click', (e) => {
    if(e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});



const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});

