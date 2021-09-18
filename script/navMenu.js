export default function navMenu() {
  const menuSpan = document.querySelectorAll(".box__menu ul span");
  const menuUl = document.querySelectorAll(".nav-list");

  console.log(menuUl);
  if (menuSpan.length) {
    menuSpan.forEach((element) => {
      element.addEventListener("click", handleClickActive);
    });
    function handleClickActive() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("show");
      this.lastElementChild.classList.toggle("icon-rotate");
    }
  }
}
