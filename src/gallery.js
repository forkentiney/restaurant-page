import "./gallery.css";
import pic1 from "./static/images/cookies.webp";
import pic2 from "./static/images/cookies1.webp";
import pic3 from "./static/images/cookies2.webp";
import pic4 from "./static/images/cookies3.webp";
import pic5 from "./static/images/cookies4.webp";
import pic6 from "./static/images/cookies-close-up.webp";
import pic7 from "./static/images/cookies-hand.webp";
import pic8 from "./static/images/cookies-top.webp";
import pic9 from "./static/images/bagels.webp";
import pic10 from "./static/images/brioche1.webp";
import pic11 from "./static/images/brioche2.webp";
import pic12 from "./static/images/brioche3.webp";
import pic13 from "./static/images/cinnamon-rolls1.webp";
import pic14 from "./static/images/dough1.webp";
import pic15 from "./static/images/gyros1.webp";
import pic16 from "./static/images/picnic1.webp";
import pic17 from "./static/images/pita1.webp";
import pic18 from "./static/images/pita2.webp";
import pic19 from "./static/images/pita3.webp";
import pic20 from "./static/images/pita4.webp";
import pic21 from "./static/images/sourdough.webp";
import pic22 from "./static/images/sourdough1.webp";
import pic23 from "./static/images/sourdough2.webp";
import pic24 from "./static/images/sourdough3.webp";

function createGallery() {
  console.log("Creating gallery");

  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21, pic22, pic23, pic24,];

  // The number that images.length is divided by
  // determines the number of columns displayed.
  // To find the appropriate number of columns for
  // a screen, we divide the screen width by the
  // optimal width of the images as defined in the CSS.
  const chunkSize = images.length / Math.floor(innerWidth / 400);

  // Create and place gallery container
  const gallery = document.createElement("div");
  gallery.setAttribute("id", "gallery");
  content.appendChild(gallery);

  for (let i = 0; i < images.length; i += chunkSize) {
    const chunk = images.slice(i, i + chunkSize);
    const column = document.createElement("div");
    column.classList.add("column");
    gallery.appendChild(column);
    chunk.forEach((image) => {
      const galleryPhoto = document.createElement("img");
      galleryPhoto.src = image;
      galleryPhoto.alt = "Baked good";
      galleryPhoto.classList.add("gallery-pic");
      column.appendChild(galleryPhoto);
    });
  };

  enlargeImage();
};

function enlargeImage() {
  const galleryPhotos = document.querySelectorAll(".gallery-pic");
  galleryPhotos.forEach((image) => image.addEventListener("click", function() {
    this.classList.toggle("full-size");
  }));
}

export { createGallery };
