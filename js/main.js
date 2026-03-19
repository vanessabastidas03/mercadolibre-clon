const featuredProducts = [
  { title: "Audífonos Bluetooth", price: 89900, tag: "OFERTA" },
  { title: "Smartwatch Deportivo", price: 149900, tag: "TOP" },
  { title: "Teclado Mecánico", price: 219900, tag: "NUEVO" },
  { title: "Mouse Gamer", price: 79900, tag: "HOT" },
  { title: "Laptop 14”", price: 1899900, tag: "ENVÍO" },
  { title: "Silla Ergonómica", price: 499900, tag: "PRO" },
  { title: "Cámara Web HD", price: 129900, tag: "CLASES" },
  { title: "Parlante Portátil", price: 159900, tag: "MÚSICA" },
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
  resultsHint.textContent = q ? `Resultados para: "${q}"` : "Mostrando todo (sin filtro).";
  renderProducts(resultsGrid, q ? filtered : featuredProducts);
});