import "./template.css";
import { createHome } from "./home.js";
import { createAbout } from "./about.js";
import { createGallery } from "./gallery.js";
import { createContact } from "./contact.js";
import { createMenu } from "./menu.js";

window.addEventListener("resize", checkState);

const content = document.querySelector("#content");
const home = document.querySelector("#home");
const menu = document.querySelector("#bakes");
const photos = document.querySelector("#photos");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");

const state = { page: "home" };

home.addEventListener("click", () => {
  clearContent();
  createHome();
  state.page = "home";
});

about.addEventListener("click", () => {
  clearContent();
  createAbout();
  state.page = "about";
});

photos.addEventListener("click", () => {
  clearContent();
  createGallery();
  state.page = "gallery";
});

contact.addEventListener("click", () => {
  clearContent();
  createContact();
  state.page = "contact";
});

menu.addEventListener("click", () => {
  clearContent();
  createMenu();
  state.page = "menu";
});

function reloadGallery() {
  clearContent();
  createGallery();
};

function checkState() {
  if (state.page === "gallery") {
    setTimeout(reloadGallery, 500);
  };
};

function clearContent() {
  console.log("Clearing body");
  while (content.childElementCount > 0) {
    content.removeChild(content.firstChild);
  };
};

createHome();
