import "./template.css";
import { createHome } from "./home.js";
import { createAbout } from "./about.js";
import { createGallery } from "./gallery.js";
import { createContact } from "./contact.js";
import { createMenu } from "./menu.js";

const content = document.querySelector("#content");
const home = document.querySelector("#home");
const menu = document.querySelector("#bakes");
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

menu.addEventListener("click", () => {
  clearContent();
  createMenu();
});

function clearContent() {
  console.log("Clearing body");
  while (content.childElementCount > 0) {
    content.removeChild(content.firstChild);
  };
};

createHome();
