const house = {
name: "My Home",
mood: "Scandinavian Boho",
}

//grab the template
const template = document.querySelector("template").content;

//clone it
const clone = template.cloneNode(true);

//change some content
clone.querySelector("h1").textContent = house.name;
clone.querySelector("p").textContent = house.mood;

//find the daddy
const parent = document.querySelector("main");

//append it
parent.appendChild(clone);