async function cargarProductos() {
  try {
    const res = await fetch("products.json");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const productos = await res.json();

    const cont = document.getElementById("grid-productos");
    cont.innerHTML = productos.map(p => `
      <article class="card">
        <img src="${p.img}" alt="${p.nombre}" loading      <h3>${p.nombre}</h3>
          <p class="categoria">${p.categoria ?? ""}</p>
          <p class="precio">$ ${Number(p.precio).toLocaleString("es-CO")}</p>
          ${p.url ? `<a class="btn" href` : ``}
        </div>
      </article>
    `).join("");
  } catch (e) {
    console.error("Error cargando JSON:", e);
    const cont = document.getElementById("grid-productos");
    if (cont) cont.innerHTML = `<p>No se pudo cargar el catálogo. Recarga la página.</p>`;
  }
}
document.addEventListener("DOMContentLoaded", cargarProductos);
