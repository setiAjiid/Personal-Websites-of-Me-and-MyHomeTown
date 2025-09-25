// Ambil elemen menu dan tombol
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

// Klik tombol untuk toggle menu
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
