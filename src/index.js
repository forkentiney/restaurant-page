import "./template.css";
import { createHome } from "./home.js";
import { createAbout } from "./about.js";
import { createGallery } from "./gallery.js";
import { createContact } from "./contact.js";

const content = document.querySelector("#content");
const home = document.querySelector("#home");
const bakes = document.querySelector("#menu");
const photos = document.querySelector("#photos");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");

home.addEventListener("click", () => {
  clearContent();
  createHome();
});

about.addEventListener("click", () => {
  clearContent();
  createAbout();
});

photos.addEventListener("click", () => {
  clearContent();
  createGallery();
});

contact.addEventListener("click", () => {
  clearContent();
  createContact();
});

function clearContent() {
  console.log("Clearing body");
  while (content.childElementCount > 0) {
    content.removeChild(content.firstChild);
  };
};

createHome();
