// JavaScript si menu-ga loo qariyo ama loo muujiyo
const toggleBtn = document.getElementById("toggleBtn");
const menuList = document.getElementById("menuList");

toggleBtn.addEventListener("click", () => {
  if (menuList.style.display === "none") {
    menuList.style.display = "block";
  } else {
    menuList.style.display = "none";
  }
});

// Optional: Bilowga ha muujin
menuList.style.display = "none";