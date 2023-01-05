const navbar = document.querySelector(".nav");
const navList = document.querySelector(".nav-list");
const toggle = document.querySelector(".menu-icon");

function main() {
  toggle.addEventListener("click", () => {
    navList.style.display = "block";
  });
}

main();
