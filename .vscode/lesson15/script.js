const API = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";
const list = document.querySelector(".result");

const PLACEHOLDER =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='250'><rect width='100%' height='100%' fill='%23eee'/><text x='50%' y='50%' text-anchor='middle' fill='%23999' font-size='20'>no image</text></svg>";

function fixImg(img) {
  img.onerror = null;
  img.src = PLACEHOLDER;
}
async function getProducts() {
  try {
    const response = await fetch(API);
    if (!response.ok) throw new Error("Ката: " + response.status);

    const products = await response.json();

    list.innerHTML = "";
    products.forEach((item) => {
      const img = item.avatar;
      const src =
        typeof img === "string" && img.startsWith("http") ? img : PLACEHOLDER;

      list.innerHTML += `
        <div class="servise">
          <img src="${src}" alt="${item.name}" onerror="fixImg(this)" />
          <div class="info">
            <b>${item.name}</b>
            <span>${item.price}</span>
          </div>
          <div class="btns">
            <button onclick="openEdit(${item.id})" class="update">update</button>
            <button onclick="deleteService(${item.id})" class="delete">delete</button>
          </div>
        </div>`;
    });
  } catch (error) {
    console.error(error);
  }
}
getProducts();

async function deleteService(id) {
  let check = confirm("сиз очурууну каалайсызбы");
  if (!check) {
    return;
  }
  try {
    const res = await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      getProducts();
    }
  } catch (error) {}
}

const modal = document.getElementById("modal");
let editId = null;

async function openEdit(id) {
  editId = id;

  const res = await fetch(`${API}/${id}`);
  const p = await res.json();

  document.getElementById("editTitle").value = p.name;
  document.getElementById("editImage").value = p.avatar;
  document.getElementById("editPrice").value = p.price;

  modal.classList.add("active");
}

document.getElementById("saveBtn").onclick = async () => {
  try {
    const res = await fetch(`${API}/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: document.getElementById("editTitle").value,
        avatar: document.getElementById("editImage").value,
        price: document.getElementById("editPrice").value,
      }),
    });

    if (!res.ok) throw new Error("Ката: " + res.status);

    modal.classList.remove("active");
    getProducts();
  } catch (error) {
    console.error(error);
  }
};

document.getElementById("closeBtn").onclick = () =>
  modal.classList.remove("active");

modal.onclick = (e) => {
  if (e.target === modal) modal.classList.remove("active");
};
