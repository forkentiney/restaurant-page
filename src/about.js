import "./about.css";
import clairePhoto from "./static/images/claire.webp";
import joshuaPhoto from "./static/images/joshua.webp";

function createPerson(name, details, photo) {
  const title = name;
  const body = details;
  const src = photo

  return { title, body, src };
};

const joshua = createPerson("Joshua", "Joshua specializes in our sourdough and makes all the dough in the days preceding the Farmer’s Market. All the bread is baked fresh in the wee hours of the morning. In addition to breads, Joshua has a master’s in philosophy and spends the school year teaching. He is currently working on learning web development.", joshuaPhoto);
const claire = createPerson("Claire", "Claire is our resident bagel expert and spends her time before the Farmer’s Market rolling and boiling bagel after bagel. Claire also plans all our flavours for bagel toppings and cookies alike. Her specialty is granola which she enjoys with vanilla ice cream. She is anticipating attending a master’s program in Ottawa.", clairePhoto);
const people = [claire, joshua,];

function createAbout() {
  console.log("Creating about");

  // Create profiles section 
  const profiles = document.createElement("div");
  profiles.setAttribute("id", "profiles");
  profiles.classList.add("flex-h-centered-row");
  content.appendChild(profiles);

  people.forEach((person) => {
    const container = document.createElement("div");
    container.classList.add("profile", "flex-centered");
    profiles.appendChild(container);

    const photo = document.createElement("img");
    photo.classList.add("profile-pic");
    photo.src = person.src;
    photo.alt = "Profile picture of a baker";
    container.appendChild(photo);

    const title = document.createElement("h2");
    title.textContent = person.title;
    container.appendChild(title);

    const body = document.createElement("p");
    body.textContent = person.body;
    container.appendChild(body);
  });

  // Create about section
  const aboutSection = document.createElement("div");
  aboutSection.setAttribute("id", "aboutSection");
  const aboutTitle = document.createElement("h1");
  aboutTitle.textContent = "About Us";
  const aboutBody = document.createElement("p");
  aboutBody.textContent = "Everything has a story and so does our bakery. It all started in Minneapolis where we developed a healthy habit for a breakfast composed of two eggs on buttered (or avocado'd) toast served with half of a Trader Joe's bagel with cream cheese and everything bagel seasoning. When Claire came back from Minneapolis and we were left without a Trader Joe's, something had to be done. We started with bagels and eventually progressed to sourdough once we got our hands on some starter. Through trial and error we have developed both of these bakes to meet our standards and our breakfasts have not been the only thing to benefit from these developments."

  // Place about section
  content.appendChild(aboutSection);
  aboutSection.appendChild(aboutTitle);
  aboutSection.appendChild(aboutBody);
};

export { createAbout };
