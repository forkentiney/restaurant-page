import "./menu.css";

function createItem(item, description) {
  const name = item;
  const details = description;
  return { name, details };
};

const sourdough = createItem("Sourdough", "Starter, flour, water, salt. Simple and effective.");
const bagels = createItem("Bagels", "Made to emulate the classic NYC bagel, our dough is boiled and baked into an easily recognizable shape.");
const granola = createItem("Granola", "Oaty and nutty, a perfect match for your daily yogurt or ice cream.");
const cookies = createItem("Cookies", "Sweet and perfectly baked, share these cookies with your friends and family or eat them alone. We don't judge.");

const menuItems = [sourdough, bagels, granola, cookies,];

function createMenu() {
  console.log("Creating menu");

  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menu");
  menuContainer.classList.add("flex-centered");
  content.appendChild(menuContainer);

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Menu";
  menuContainer.appendChild(menuTitle);

  menuItems.forEach((item) => {
    const menu = document.createElement("div");
    menu.classList.add("menu-item", "flex-centered");

    const title = document.createElement("h3");
    title.textContent = item.name;

    const body = document.createElement("p");
    body.textContent = item.details;

    menuContainer.appendChild(menu);
    menu.appendChild(title);
    menu.appendChild(body);
  });
};

export { createMenu };
