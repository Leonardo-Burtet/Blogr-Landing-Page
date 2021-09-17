const menuMobile = document.querySelector(".box__button");
const menuButton = document.querySelectorAll(".box__button img");
const menuBox = document.querySelector(".box__menu");
const menuUl = document.querySelector(".box__menu ul");
menuMobile.addEventListener("click", handleClickMenu);

const menuSpan = document.querySelectorAll(".box__menu ul li span");
menuSpan.forEach((element) =>
  element.addEventListener("click", handleClickSpan)
);

function handleClickMenu() {
  menuButton.forEach((element) => {
    if (element.className === "icon-open") {
      element.className = "icon-close";
      menuBox.style.opacity = 0;
      menuBox.style.transition = "0.5s";
      menuUl.style.opacity = 0;
      menuUl.style.transition = "0.3s";
    } else {
      element.className = "icon-open";
      menuBox.style.opacity = 1;
      menuUl.style.opacity = 1;
      menuUl.style.transition = "2s";
    }
  });
}

function handleClickSpan(event) {
  menuSpan.forEach((element) => element.classList.remove("active"));
  if (event.target.tagName === "SPAN") {
    event.target.className = "active";
    const menuList = document.querySelector(".active").nextElementSibling;
    const menuSpanIcon = document.querySelector(".active i");
    console.log(menuList);
    if (menuSpanIcon.classList[1] === "fa-chevron-down") {
      menuSpanIcon.classList.add("fa-chevron-up");
      menuSpanIcon.classList.remove("fa-chevron-down");
      menuList.classList.toggle("show");
    } else {
      menuSpanIcon.classList.add("fa-chevron-down");
      menuSpanIcon.classList.remove("fa-chevron-up");
      menuList.classList.toggle("show");
    }
  }
}
