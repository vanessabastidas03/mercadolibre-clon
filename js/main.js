const featuredProducts = [
  { title: "Audífonos Bluetooth", price: 89900, tag: "OFERTA", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&q=85&fit=crop&auto=format" },
  { title: "Smartwatch Deportivo", price: 149900, tag: "TOP", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&q=85&fit=crop&auto=format" },
  { title: "Teclado Mecánico", price: 219900, tag: "NUEVO", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&q=85&fit=crop&auto=format" },
  { title: "Mouse Gamer", price: 79900, tag: "HOT", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&q=85&fit=crop&auto=format" },
  { title: "Laptop 14\"", price: 1899900, tag: "ENVÍO", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&q=85&fit=crop&auto=format" },
  { title: "Silla Ergonómica", price: 499900, tag: "PRO", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=400&q=85&fit=crop&auto=format" },
  { title: "Cámara Web HD", price: 129900, tag: "CLASES", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&q=85&fit=crop&auto=format" },
  { title: "Parlante Portátil", price: 159900, tag: "MÚSICA", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&q=85&fit=crop&auto=format" },
  { title: "Tablet 10 pulgadas", price: 899900, tag: "NUEVO", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&q=85&fit=crop&auto=format" }
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