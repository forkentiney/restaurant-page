import "./menu.css";

function createMenu() {
  console.log("Creating menu");

  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menu");
  menuContainer.classList.add("flex-centered");

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Menu";

  const menuSourdough = document.createElement("div")
  menuSourdough.classList.add("menu-item");
  menuSourdough.classList.add("flex-centered");
  const menuSourdoughTitle = document.createElement("h3");
  menuSourdoughTitle.textContent = "Sourdough";
  const menuSourdoughBody = document.createElement("p");
  menuSourdoughBody.textContent = "Starter, flour, water, salt. Simple and effective.";

  const menuBagel = document.createElement("div")
  menuBagel.classList.add("menu-item");
  menuBagel.classList.add("flex-centered");
  const menuBagelTitle = document.createElement("h3");
  menuBagelTitle.textContent = "Bagels";
  const menuBagelBody = document.createElement("p");
  menuBagelBody.textContent = "Made to emulate the classic NYC bagel, our dough is boiled and baked into an easily recognizable shape.";

  const menuGranola = document.createElement("div")
  menuGranola.classList.add("menu-item");
  menuGranola.classList.add("flex-centered");
  const menuGranolaTitle = document.createElement("h3");
  menuGranolaTitle.textContent = "Granola";
  const menuGranolaBody = document.createElement("p");
  menuGranolaBody.textContent = "Oaty and nutty, a perfect match for your daily yogurt or ice cream.";

  const menuCookies = document.createElement("div")
  menuCookies.classList.add("menu-item");
  menuCookies.classList.add("flex-centered");
  const menuCookiesTitle = document.createElement("h3");
  menuCookiesTitle.textContent = "Cookies";
  const menuCookiesBody = document.createElement("p");
  menuCookiesBody.textContent = "Sweet and perfectly baked, share these cookies with your friends and family or eat them alone. We don't judge.";

  content.appendChild(menuContainer);
  menuContainer.appendChild(menuTitle);
  menuContainer.appendChild(menuSourdough);
  menuContainer.appendChild(menuBagel);
  menuContainer.appendChild(menuGranola);
  menuContainer.appendChild(menuCookies);

  menuSourdough.appendChild(menuSourdoughTitle);
  menuSourdough.appendChild(menuSourdoughBody);

  menuBagel.appendChild(menuBagelTitle);
  menuBagel.appendChild(menuBagelBody);

  menuGranola.appendChild(menuGranolaTitle);
  menuGranola.appendChild(menuGranolaBody);

  menuCookies.appendChild(menuCookiesTitle);
  menuCookies.appendChild(menuCookiesBody);
};

export { createMenu };
