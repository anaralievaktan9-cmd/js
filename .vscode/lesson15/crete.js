let inTitle = document.getElementById("intitle");
let inImage = document.getElementById("inimage");
let inPrice = document.getElementById("inprice");
let createBtn = document.querySelector(".inbutton");

const API = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";

async function createProduct() {
  const payload = {
    name: inTitle.value,
    avatar: inImage.value,
    price: inPrice.value,
  };

  try {
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error(error);
  }
}

createBtn.addEventListener("click", createProduct); 