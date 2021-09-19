export default function navMenu() {
  const menuSpan = document.querySelectorAll(".box__menu ul span");
  const menuUl = document.querySelectorAll(".box__menu ul li ul");
  const menuIcon = document.querySelectorAll(".box__menu ul li i");

  menuSpan.forEach((element) => {
    element.addEventListener("click", handleClickDesktop);
  });
  function handleClickDesktop() {
    console.log(this.classList);
    if (this.classList[0] === "ativo") {
      this.classList.remove("ativo");
      this.nextElementSibling.classList.remove("show");
      this.lastElementChild.classList.remove("icon-rotate");
    } else {
      menuSpan.forEach((e) => e.classList.remove("ativo"));
      menuUl.forEach((e) => e.classList.remove("show"));
      menuIcon.forEach((e) => e.classList.remove("icon-rotate"));
      this.classList.add("ativo");
      this.nextElementSibling.classList.add("show");
      this.lastElementChild.classList.add("icon-rotate");
    }
  }
}
