const nav = document.querySelector("nav");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

/* sticky nav */
window.addEventListener("scroll", () => {
  nav.classList.toggle("sticky", window.scrollY > 20);
});

/* open menu */
menuBtn.addEventListener("click", () => {
  navbar.classList.add("active");
  document.body.style.overflow = "hidden";
});

/* close menu */
cancelBtn.addEventListener("click", () => {
  navbar.classList.remove("active");
  document.body.style.overflow = "auto";
});

/* auto close on link click */
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});


/* =====================
   AUTO CLOSE ON LINK CLICK
===================== */
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});
