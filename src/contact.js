function createContact() {
  console.log("Creating contact page");

  const contactTitle = document.createElement("h2");
  const contactBody = document.createElement("p");
  const email = document.createElement("a");
  email.setAttribute("href", "mailto:contact@bouquetbakery.net");
  email.textContent = "contact@bouquetbakery.net";
  contactTitle.classList.add("flex-centered");
  contactTitle.textContent = "Contact";
  contactBody.classList.add("flex-centered");
  contactBody.textContent = "If you wish to get in touch with us for comments or questions, feel free to send us an email here: "

  content.appendChild(contactTitle);
  content.appendChild(contactBody);
  contactBody.appendChild(email);
};

export { createContact };
