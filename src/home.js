import "./home.css";
import bagelsPhoto from "./static/images/bagels.webp";
import sourdoughPhoto from "./static/images/sourdough.webp";
import pinkFlowerPhoto from "./static/images/pink-flower.png";
import purpleFlowerPhoto from "./static/images/purple-flower.png";
import yellowFlowerPhoto from "./static/images/yellow-flower.png";

function createHome() {
  console.log("Creating home");

  // Create landing section
  const landing = document.createElement("div");
  landing.setAttribute("id", "landing");
  landing.classList.add("flex-h-centered-row");
  const bagels = document.createElement("img");
  bagels.classList.add("hero");
  bagels.src = bagelsPhoto;
  bagels.alt = "bagels";
  const sourdough = document.createElement("img");
  sourdough.classList.add("hero");
  sourdough.src = sourdoughPhoto;
  sourdough.alt = "sourdough";

  // Place landing section
  content.appendChild(landing);
  landing.appendChild(bagels);
  landing.appendChild(sourdough);

  // Create origin section
  const origin = document.createElement("div");
  origin.setAttribute("id", "origin");
  origin.classList.add("flex-centered");
  const originTitle = document.createElement("h2");
  originTitle.textContent = "Made with Love";
  const originBody = document.createElement("p");
  originBody.textContent = "We are based out of our home kitchens in Grand Forks, North Dakota. Two self-taught bakers driven by a passion for baking and an enjoyment of good food!";

  // Place origin section 
  content.appendChild(origin);
  origin.appendChild(originTitle);
  origin.appendChild(originBody);

  // Create specialties section
  const specialties = document.createElement("div");
  specialties.setAttribute("id", "specialties");
  const specialTitle = document.createElement("h3");
  specialTitle.textContent = "Specialties";
  const specialtyContent = document.createElement("div");
  specialtyContent.setAttribute("id", "specialty-content");
  const specialSection1 = document.createElement("div");
  specialSection1.classList.add("flex-v-centered-row");
  const pinkFlower = document.createElement("img");
  pinkFlower.classList.add("flower");
  pinkFlower.src = pinkFlowerPhoto;
  pinkFlower.alt = "pink flower";
  const sourdoughCard = document.createElement("div");
  sourdoughCard.setAttribute("id", "sourdough");
  sourdoughCard.classList.add("card");
  const sourdoughCardTitle = document.createElement("h4");
  sourdoughCardTitle.textContent = "Sourdough";
  const sourdoughCardBody = document.createElement("p");
  sourdoughCardBody.textContent = "Made with prime sourdough starter (named Florentine) and high quality King Arthur bread flour, our sourdough bakes are a must-have!";
  const specialSection2 = document.createElement("div");
  specialSection2.classList.add("flex-v-centered-row");
  const purpleFlower = document.createElement("img");
  purpleFlower.classList.add("flower");
  purpleFlower.src = purpleFlowerPhoto;
  purpleFlower.alt = "purple flower";
  const bagelCard = document.createElement("div");
  bagelCard.setAttribute("id", "bagels");
  bagelCard.classList.add("card");
  const bagelCardTitle = document.createElement("h4");
  bagelCardTitle.textContent = "New York Style Bagels";
  const bagelCardBody = document.createElement("p");
  bagelCardBody.textContent = "Proofed, rolled, boiled, baked! Our hand-crafted bagels have the same chewy interior and crusty exterior reminiscent of a bagel right out of NYC!";
  const specialSection3 = document.createElement("div");
  specialSection3.classList.add("flex-v-centered-row");
  const yellowFlower = document.createElement("img");
  yellowFlower.classList.add("flower");
  yellowFlower.src = yellowFlowerPhoto;
  yellowFlower.alt = "pink flower";
  const extrasCard = document.createElement("div");
  extrasCard.setAttribute("id", "extras");
  extrasCard.classList.add("card");
  const extrasCardTitle = document.createElement("h4");
  extrasCardTitle.textContent = "Complimentary Additions";
  const extrasCardBody = document.createElement("p");
  extrasCardBody.textContent = "Our classic pesto, \"Oma\'s Recipe\" strawberry jam, and our expertly developed everything bagel seasoning are perfect pairs to our baked bread products!"

  // Place specialties section
  content.appendChild(specialties);
  specialties.appendChild(specialTitle);
  specialties.appendChild(specialtyContent);

  specialtyContent.appendChild(specialSection1);
  specialSection1.appendChild(pinkFlower);
  specialSection1.appendChild(sourdoughCard);
  sourdoughCard.appendChild(sourdoughCardTitle);
  sourdoughCard.appendChild(sourdoughCardBody);

  specialtyContent.appendChild(specialSection2);
  specialSection2.appendChild(purpleFlower);
  specialSection2.appendChild(bagelCard);
  bagelCard.appendChild(bagelCardTitle);
  bagelCard.appendChild(bagelCardBody);

  specialtyContent.appendChild(specialSection3);
  specialSection3.appendChild(yellowFlower);
  specialSection3.appendChild(extrasCard);
  extrasCard.appendChild(extrasCardTitle);
  extrasCard.appendChild(extrasCardBody);
};

export { createHome };
