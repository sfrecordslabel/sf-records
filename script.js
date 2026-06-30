// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";

    setTimeout(() => {
      loader.style.display = "none";
    }, 800);

  }, 1800);
});

// Hero parallax
const hero = document.querySelector(".hero");

document.addEventListener("mousemove", (e) => {

  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  hero.style.transform =
    `translate(${x}px, ${y}px)`;

});

// Fade sections
const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

    }

  });

});

document.querySelectorAll("section,footer").forEach(el => {

  el.style.opacity = "0";
  el.style.transform = "translateY(60px)";
  el.style.transition = "1s";

  observer.observe(el);

});
