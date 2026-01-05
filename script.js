// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a") || null;

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    if (scrollBtn) scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    if (scrollBtn) scrollBtn.style.display = "none";
  }
});

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  if (scrollBtn) scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  if (scrollBtn) scrollBtn.style.pointerEvents = "auto";
};

cancelBtn.onclick = hideNavMenu;

// Close menu when link clicked
document.querySelectorAll(".menu li a").forEach(link => {
  link.addEventListener("click", hideNavMenu);
});


window.onscroll = () => {
  if (document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};
