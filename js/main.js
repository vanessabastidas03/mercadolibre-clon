const featuredProducts = [
  { title: "Audífonos Bluetooth", price: 89900, tag: "OFERTA", image: "https://images.unsplash.com/photo-1518441902110-5bdc6f6d45c1" },
  { title: "Smartwatch Deportivo", price: 149900, tag: "TOP", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" },
  { title: "Teclado Mecánico", price: 219900, tag: "NUEVO", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
  { title: "Mouse Gamer", price: 79900, tag: "HOT", image: "https://images.unsplash.com/photo-1587202372775-989d35c3c1e5" },
  { title: "Laptop 14”", price: 1899900, tag: "ENVÍO", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
  { title: "Silla Ergonómica", price: 499900, tag: "PRO", image: "https://images.unsplash.com/photo-1582582494700-8c321c7e8b3f" },
  { title: "Cámara Web HD", price: 129900, tag: "CLASES", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3" },
  { title: "Parlante Portátil", price: 159900, tag: "MÚSICA", image: "https://images.unsplash.com/photo-1518444028785-8fbdbf6cd9f2" },
  { title: "Tablet 10 pulgadas", price: 899900, tag: "NUEVO", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20" }
];
function formatCOP(value) {
  return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(value);
}

function renderProducts(targetEl, items) {
  targetEl.innerHTML = "";
  if (!items.length) {
    targetEl.innerHTML = `<div class="card">No hay resultados con ese término.</div>`;
    return;
  }

  for (const p of items) {
    const card = document.createElement("article");
    card.className = "card product";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}" class="product__img" />
      <h3 class="product__title">${p.title}</h3>
      <div class="product__meta">
        <span class="product__price">${formatCOP(p.price)}</span>
        <span class="product__tag">${p.tag}</span>
      </div>
    `;
    targetEl.appendChild(card);
  }
}

const featuredGrid = document.getElementById("featuredGrid");
const resultsGrid = document.getElementById("resultsGrid");
const resultsHint = document.getElementById("resultsHint");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

renderProducts(featuredGrid, featuredProducts);

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const q = searchInput.value.trim().toLowerCase();

  const filtered = featuredProducts.filter((p) => p.title.toLowerCase().includes(q));
  resultsHint.textContent = q 
  ? `Resultados encontrados para: "${q}"`
  : "Mostrando todos los productos";
  renderProducts(resultsGrid, q ? filtered : featuredProducts);
  searchInput.value = "";
});