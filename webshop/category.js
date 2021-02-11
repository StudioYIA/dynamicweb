//create navigation
const letters = "abcdefghijklmnopqrstuvwxyz";
const letterArray = letters.split("");
console.log(letterArray);
letterArray.forEach(handleLetter);

function handleLetter(letter) {
  createNavLink(letter);

  //create section
  createBrandSection(letter);
}

function createBrandSection(letter) {
  const template = document.querySelector("#sectionTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h2").textContent = letter;
  copy.querySelector("section").id = `letter_${letter}`;
  document.querySelector(".brandList").appendChild(copy);
}

function createNavLink(letter) {
  //grab the template, copy, add content, append
  const template = document.querySelector("#linkTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector("a").textContent = letter;
  copy.querySelector("a").href = `#letter_${letter}`;
  document.querySelector(".letterLinks ol").appendChild(copy);
}

//fetch data
fetch("https://kea-alt-del.dk/t7/api/brands")
  .then((res) => res.json())
  .then(gotData);

//loop through
function gotData(data) {
  console.log(data);
  data.forEach(showBrand);
}
function showBrand(brand) {
  console.log(brand.brandname);
  const template = document.querySelector("#linkTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector("a").textContent = brand.brandname;
  copy.querySelector(
    "a"
  ).href = `productlist.html?brandname=${brand.brandname}`;
  const firstLetter = brand.brandname[0].toLowerCase();
  console.log(firstLetter);
  const topParent = document.querySelector(`#letter_${firstLetter}`);
  const elemParent = topParent.querySelector("ol");
  elemParent.appendChild(copy);
}
//grab template
//clone it
//change content
//grab parent
//append
