import "./gallery.css";
import pic1 from "./static/images/cookies.webp";
import pic2 from "./static/images/cookies1.webp";
import pic3 from "./static/images/cookies2.webp";
import pic4 from "./static/images/cookies3.webp";
import pic5 from "./static/images/cookies4.webp";
import pic6 from "./static/images/cookies-close-up.webp";
import pic7 from "./static/images/cookies-hand.webp";
import pic8 from "./static/images/cookies-top.webp";

function createGallery() {
  console.log("Creating gallery");

  const gallery = document.createElement("div");
  gallery.setAttribute("id", "gallery");
  const cookie1 = document.createElement("img");
  cookie1.classList.add("gallery-pic");
  cookie1.src = pic1;
  cookie1.alt = "cookies";
  const cookie2 = document.createElement("img");
  cookie2.classList.add("gallery-pic");
  cookie2.src = pic2;
  cookie2.alt = "cookies";
  const cookie3 = document.createElement("img");
  cookie3.classList.add("gallery-pic");
  cookie3.src = pic3;
  cookie3.alt = "cookies";
  const cookie4 = document.createElement("img");
  cookie4.classList.add("gallery-pic");
  cookie4.src = pic4;
  cookie4.alt = "cookies";
  const cookie5 = document.createElement("img");
  cookie5.classList.add("gallery-pic");
  cookie5.src = pic5;
  cookie5.alt = "cookies";
  const cookie6 = document.createElement("img");
  cookie6.classList.add("gallery-pic");
  cookie6.src = pic6;
  cookie6.alt = "cookies";
  const cookie7 = document.createElement("img");
  cookie7.classList.add("gallery-pic");
  cookie7.src = pic7;
  cookie7.alt = "cookies";
  const cookie8 = document.createElement("img");
  cookie8.classList.add("gallery-pic");
  cookie8.src = pic8;
  cookie8.alt = "cookies";

  content.appendChild(gallery);
  gallery.appendChild(cookie1);
  gallery.appendChild(cookie2);
  gallery.appendChild(cookie3);
  gallery.appendChild(cookie4);
  gallery.appendChild(cookie5);
  gallery.appendChild(cookie6);
  gallery.appendChild(cookie7);
  gallery.appendChild(cookie8);
}

export { createGallery };
