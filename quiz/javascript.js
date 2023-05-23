const goTopBtn = document.querySelector(".buttom-sroll");
window.onscroll = function () {
  checkHeight();
};

function checkHeight() {
  if (window.scrollY > 600) {
    goTopBtn.style.display = "flex";
  } else {
    goTopBtn.style.display = "none";
  }
}

function scrollKeatas() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
