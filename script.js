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

const chatBtn = document.getElementById("chatBtn");
const formBtn = document.getElementById("formBtn");
const chatView = document.querySelector(".chat-view");
const formView = document.querySelector(".form-view");

chatBtn.onclick = () => {
  chatBtn.classList.add("active");
  formBtn.classList.remove("active");
  chatView.classList.add("active");
  formView.classList.remove("active");
};

formBtn.onclick = () => {
  formBtn.classList.add("active");
  chatBtn.classList.remove("active");
  formView.classList.add("active");
  chatView.classList.remove("active");
};

function openChat() {
  window.open("https://wa.me/880XXXXXXXXX", "_blank");
}

function sendEmail() {
  window.location.href = "mailto:yourmail@gmail.com";
}


/* =========================
   NAVBAR + MENU SYSTEM
========================= */

/* Sticky nav */
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

/* Open menu */
menuBtn?.addEventListener("click", () => {
  navbar.classList.add("active");
  document.body.style.overflow = "hidden";
});

/* Close menu */
cancelBtn?.addEventListener("click", () => {
  navbar.classList.remove("active");
  document.body.style.overflow = "auto";
});

/* Auto close on link click */
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});


/* =========================
   SMARTSUPP CHAT CONTROL
========================= */

/* Safe open chat */
function openChat() {
  if (typeof smartsupp !== "undefined") {
    smartsupp("chat:open");
  }
}

/* Anti spam click */
let lastChatClick = 0;
window.safeChat = function () {
  const now = Date.now();
  if (now - lastChatClick < 3000) return;
  lastChatClick = now;
  openChat();
};
