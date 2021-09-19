export default function btnMobile() {
  const menuMobile = document.querySelector(".box__btn");
  const menuButton = document.querySelectorAll(".box__btn img");
  const menuBox = document.querySelector(".box__menu");
  const menuList = document.querySelector(".box__menu__list");

  menuMobile.addEventListener("click", handleClickMenu);

  function handleClickMenu() {
    menuButton.forEach((element) => {
      if (element.className === "icon-open") {
        element.className = "icon-close";
        menuBox.style.opacity = 0;
        menuBox.style.transition = "0.5s";
        menuList.style.opacity = 0;
        menuList.style.transition = "0.3s";
      } else {
        element.className = "icon-open";
        menuBox.style.opacity = 1;
        menuList.style.opacity = 1;
        menuList.style.transition = "2s";
      }
    });
  }
}
