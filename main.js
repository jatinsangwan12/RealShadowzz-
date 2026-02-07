/* =========================
   GLOBAL READY
========================= */
document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     LOADER & INTRO CONTROL
  ========================= */
  const loader = document.getElementById("loader");
  const glitchIntro = document.getElementById("glitchIntro");

  setTimeout(() => {
    if (loader) loader.style.display = "none";
    if (glitchIntro) glitchIntro.style.display = "none";
  }, 4200);


  /* =========================
     TERMINAL HEADER TYPING
  ========================= */
  document.querySelectorAll(".terminal-header").forEach(header => {
    const text = header.getAttribute("data-text");
    header.textContent = "";
    let index = 0;

    const type = () => {
      if (index < text.length) {
        header.textContent += text.charAt(index);
        index++;
        setTimeout(type, 45);
      }
    };
    type();
  });


  /* =========================
     BUTTON RIPPLE EFFECT
  ========================= */
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");

      const rect = this.getBoundingClientRect();
      ripple.style.left = e.clientX - rect.left + "px";
      ripple.style.top = e.clientY - rect.top + "px";

      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });


  /* =========================
     CYBER PAGE TRANSITION
  ========================= */
  document.querySelectorAll("a[href]").forEach(link => {
    const url = link.getAttribute("href");

    if (
      url &&
      !url.startsWith("#") &&
      !url.startsWith("http") &&
      !url.startsWith("mailto")
    ) {
      link.addEventListener("click", e => {
        e.preventDefault();
        document.body.classList.add("page-exit");

        setTimeout(() => {
          window.location.href = url;
        }, 450);
      });
    }
  });

});


/* =========================
   HAMBURGER MENU
========================= */
function toggleMenu() {
  const navList = document.querySelector(".nav ul");
  navList.classList.toggle("active");
}


/* =========================
   PAGE ENTRY ANIMATION
========================= */
window.onload = () => {
  document.body.classList.add("page-enter");
};