// SCROLL HEADER
function scrollHeader() {
  const nav = document.querySelector("#header");

  if (this.scrollY >= 50) nav.classList.add("active-header");
  else nav.classList.remove("active-header");
}

window.addEventListener("scroll", scrollHeader);

// DROPDOWN MENU
function onModal(event) {
  const dropDownMenus = document.querySelectorAll(".active-dropdown-menu");
  dropDownMenus.forEach((menu) => {
    if (
      menu !==
      event.target.closest(".menu-item").querySelector(".dropdown-menu")
    ) {
      menu.classList.remove("active-dropdown-menu");
    }
  });

  const dropDownMenu = event.target
    .closest(".menu-item")
    .querySelector(".dropdown-menu");

  dropDownMenu.classList.toggle("active-dropdown-menu");
}

function closeDropDownMenu(event) {
  const dropDownMenus = document.querySelectorAll(".active-dropdown-menu");
  dropDownMenus.forEach((menu) => {
    menu.classList.remove("active-dropdown-menu");
  });
}

const buttons = document.querySelectorAll(".nav-link-desktop");
buttons.forEach((event) => {
  event.addEventListener("click", onModal);
});

const dropDownMenus = document.querySelectorAll(".dropdown-menu");
dropDownMenus.forEach((menu) => {
  menu.addEventListener("mouseleave", closeDropDownMenu);
});

// MENU MOBILE

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active-menu-mobile");
      toggle.classList.toggle("active-bx");
    });
  }
};

showMenu("bx", "menu-mobile");

