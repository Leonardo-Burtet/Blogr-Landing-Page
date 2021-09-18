export default function btnMobile() {
  const menuMobile = document.querySelector(".box__button");
  const menuButton = document.querySelectorAll(".box__button img");
  const menuBox = document.querySelector(".box__menu");
  const menuUl = document.querySelector(".box__menu ul");

  menuMobile.addEventListener("click", handleClickMenu);

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
}
