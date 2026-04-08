import "./about.css";
import clairePhoto from "./static/images/claire.webp";
import joshuaPhoto from "./static/images/joshua.webp";

function createAbout() {
  console.log("Creating about");

  // Create profiles section 
  const profiles = document.createElement("div");
  profiles.setAttribute("id", "profiles");
  profiles.classList.add("flex-h-centered-row");

  // Create Claire's profile
  const claire = document.createElement("div");
  claire.setAttribute("id", "claire");
  claire.classList.add("profile");
  claire.classList.add("flex-centered");
  const claireProfile = document.createElement("img");
  claireProfile.classList.add("profile-pic");
  claireProfile.src = clairePhoto;
  claireProfile.alt = "claire";
  const claireProfileTitle = document.createElement("h2");
  claireProfileTitle.textContent = "Claire";
  const claireProfileBody = document.createElement("p");
  claireProfileBody.textContent = "Claire is our resident bagel expert and spends her time before the Farmer’s Market rolling and boiling bagel after bagel. Claire also plans all our flavours for bagel toppings and cookies alike. Her specialty is granola which she enjoys with vanilla ice cream. She is anticipating attending a master’s program in Ottawa.";

  // Create Joshua's profile
  const joshua = document.createElement("div");
  joshua.setAttribute("id", "joshua");
  joshua.classList.add("profile");
  joshua.classList.add("flex-centered");
  const joshuaProfile = document.createElement("img");
  joshuaProfile.classList.add("profile-pic");
  joshuaProfile.src = joshuaPhoto;
  joshuaProfile.alt = "joshua";
  const joshuaProfileTitle = document.createElement("h2");
  joshuaProfileTitle.textContent = "Joshua";
  const joshuaProfileBody = document.createElement("p");
  joshuaProfileBody.textContent = "Joshua specializes in our sourdough and makes all the dough in the days preceding the Farmer’s Market. All the bread is baked fresh in the wee hours of the morning. In addition to breads, Joshua has a master’s in philosophy and spends the school year teaching. He is currently working on learning web development. More information can be found ";
  const link = document.createElement("a");
  link.setAttribute("href", "https://www.joshuaseverud.com/");
  link.setAttribute("target", "_blank");
  link.textContent = "here.";
  joshuaProfileBody.appendChild(link);

  // Create about section
  const aboutSection = document.createElement("div");
  aboutSection.setAttribute("id", "aboutSection");
  const aboutTitle = document.createElement("h1");
  aboutTitle.textContent = "About Us";
  const aboutBody = document.createElement("p");
  aboutBody.textContent = "Everything has a story and so does our bakery. It all started in Minneapolis where we developed a healthy habit for a breakfast composed of two eggs on buttered (or avocado'd) toast served with half of a Trader Joe's bagel with cream cheese and everything bagel seasoning. When Claire came back from Minneapolis and we were left without a Trader Joe's, something had to be done. We started with bagels and eventually progressed to sourdough once we got our hands on some starter. Through trial and error we have developed both of these bakes to meet our standards and our breakfasts have not been the only thing to benefit from these developments."

  // Place profiles section 
  content.appendChild(profiles);
  profiles.appendChild(claire);
  profiles.appendChild(joshua);

  claire.appendChild(claireProfile);
  claire.appendChild(claireProfileTitle);
  claire.appendChild(claireProfileBody);

  joshua.appendChild(joshuaProfile);
  joshua.appendChild(joshuaProfileTitle);
  joshua.appendChild(joshuaProfileBody);

  // Place about section
  content.appendChild(aboutSection);
  aboutSection.appendChild(aboutTitle);
  aboutSection.appendChild(aboutBody);
};

export { createAbout };
