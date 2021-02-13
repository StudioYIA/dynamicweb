const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);
//in the URL grab id and store its value in id

//const id = 1163;
const url = "https://kea-alt-del.dk/t7/api/products/" + id;

//fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));
//populate the page

function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs .brand").textContent = product.brandname;
  document.querySelector(".breadcrumbs .productname").textContent =
    product.productdisplayname;

  document.querySelector(
    "img.productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.productimage").alt = product.productdisplayname;

  document.querySelector(".purchaseBox h3").textContent =
    product.productdisplayname;

  document.querySelector(
    ".purchaseBox p"
  ).textContent = `${product.articletype} | ${product.brandname}`;

  document.querySelector(".info .modelname").textContent =
    product.productdisplayname;

  document.querySelector(".info .seasontype").textContent = product.season;

  document.querySelector(".info .inventory").textContent = product.id;

  document.querySelector(".info h1").textContent = product.brandname;
}

//
