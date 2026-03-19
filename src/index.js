import "./template.css";
import { createHome } from "./home.js";
import { createAbout } from "./about.js";

const home = document.querySelector("#home");
const bakes = document.querySelector("#menu");
const photos = document.querySelector("#photos");
const about = document.querySelector("#about");
const content = document.querySelector("#content");

home.addEventListener("click", () => {
  clearContent();
  createHome();
});

about.addEventListener("click", () => {
  clearContent();
  createAbout();
})

function clearContent() {
  console.log("Clearing body");
  while (content.childElementCount > 0) {
    content.removeChild(content.firstChild);
  };
};

createHome();
