
const products = [
  // CARNES DE RES
  {id:1,name:"Carne molida de res",category:"Res",subcategory:"Res",image:"img/productos/ia/carne-molida.jpg",unit:"libra",price:11000,description:"Carne molida. Precio por libra o kilogramo."},
  {id:2,name:"Bistec de res",category:"Res",subcategory:"Res",image:"img/productos/ia/bistec-res.jpg",unit:"libra",price:15000,description:"Bistec. Precio por libra o kilogramo."},
  {id:3,name:"Costilla de res",category:"Res",subcategory:"Res",image:"img/productos/ia/costilla-res.jpg",unit:"libra",price:14000,description:"Costilla. Precio por libra o kilogramo."},
  {id:4,name:"Churrasco",category:"Res",subcategory:"Res",image:"img/productos/ia/lomo-res.jpg",unit:"libra",price:23000,description:"Precio por libra o kilogramo."},
  {id:5,name:"Lomo de res",category:"Res",subcategory:"Res",image:"img/productos/ia/lomo-res.jpg",unit:"libra",price:23000,description:"Precio por libra o kilogramo."},
  // CARNES DE CERDO
  {id:6,name:"Costilla de cerdo",category:"Cerdo",subcategory:"Cerdo",image:"img/productos/ia/costilla-res.jpg",unit:"libra",price:12000,description:"Precio por libra o kilogramo."},
  {id:7,name:"Chuleta de cerdo",category:"Cerdo",subcategory:"Cerdo",image:"img/productos/chuleta.jpg",unit:"libra",price:12000,description:"Precio por libra o kilogramo."},
  {id:8,name:"Lomo de cerdo",category:"Cerdo",subcategory:"Cerdo",image:"img/productos/ia/chuleta-cerdo.jpg",unit:"libra",price:12000,description:"Precio por libra o kilogramo."},
  {id:9,name:"Tocino de cerdo",category:"Cerdo",subcategory:"Cerdo",image:"img/productos/ia/tocino-cerdo.jpg",unit:"libra",price:9000,description:"Precio por libra o kilogramo."},
  {id:10,name:"Otros cortes de cerdo",category:"Cerdo",subcategory:"Cerdo",image:"img/productos/cerdo.jpg",unit:"libra",price:12000,description:"Consulta los cortes disponibles."},
  // POLLO
  {id:11,name:"Pechuga de pollo",category:"Pollo",subcategory:"Pollo",image:"img/productos/ia/pechuga-pollo.jpg",unit:"libra",price:9000,description:"Precio por libra o kilogramo."},
  {id:12,name:"Alas de pollo",category:"Pollo",subcategory:"Pollo",image:"img/productos/ia/alas-pollo.jpg",unit:"libra",price:5500,description:"Precio por libra o kilogramo."},
  {id:13,name:"Perniles",category:"Pollo",subcategory:"Pollo",image:"img/productos/piernapollo.jpg",unit:"libra",price:6000,description:"Precio por libra o kilogramo."},
  {id:14,name:"Muslos de pollo",category:"Pollo",subcategory:"Pollo",image:"img/productos/cuadros.jpg",unit:"libra",price:6000,description:"Precio por libra o kilogramo."},
  {id:15,name:"Pierna Pernil",category:"Pollo",subcategory:"Pollo",image:"img/productos/piernapernil.jpg",unit:"libra",price:7500,description:"Precio por libra."},
  // EMBUTIDOS
  {id:16,name:"Chorizo",category:"Embutidos",subcategory:"Embutidos",image:"img/productos/ia/chorizo.jpg",unit:"presentación",options:["Unidad","Paquete"],optionPrices:{"Unidad":2200,"Paquete":11000},price:2200,description:"Unidad $2.200 o paquete $11.000."},
  {id:17,name:"Salchicha",category:"Embutidos",subcategory:"Embutidos",image:"img/productos/ia/salchicha.jpg",unit:"unidad",price:3500,description:"Consulta marcas y presentaciones."},
  {id:18,name:"Jamón",category:"Embutidos",subcategory:"Embutidos",image:"img/productos/ia/jamon.jpg",unit:"libra",price:9000,description:"Consulta marcas y presentaciones."},
  {id:19,name:"Costilla ahumada",category:"Embutidos",subcategory:"Embutidos",image:"img/productos/ia/costilla-res.jpg",unit:"libra",price:12000,description:"Precio por libra o kilogramo."},
  // VÍSCERAS
  {id:20,name:"Hígado de res",category:"Vísceras",subcategory:"Res",image:"img/productos/ia/higado-res.jpg",unit:"libra",price:12000,description:"Precio por libra."},
  {id:21,name:"Corazón de res",category:"Vísceras",subcategory:"Res",image:"img/productos/corazon.jpg",unit:"libra",price:7500,description:"Precio por libra."},
  {id:22,name:"Bofe de res",category:"Vísceras",subcategory:"Res",image:"img/productos/bofe.jpg",unit:"libra",price:6500,description:"Precio por libra."},
  {id:23,name:"Molleja de pollo",category:"Vísceras",subcategory:"Pollo",image:"img/productos/mollejas.jpg",unit:"libra",price:6500,description:"Precio por libra."},
  {id:24,name:"Pata de res",category:"Vísceras",subcategory:"Res",image:"img/productos/ia/pata-res.jpg",unit:"unidad",price:10000,description:"Precio por unidad."},
  {id:25,name:"Menudencias de pollo",category:"Vísceras",subcategory:"Pollo",image:"img/productos/menudencia.jpg",unit:"libra",price:3500,description:"Precio por libra."},
  // MERCADO
  {id:26,name:"Huevos",category:"Mercado",subcategory:"Despensa",image:"img/productos/ia/huevos.jpg",unit:"presentación",options:["Unidad","Cubeta de 15","Cubeta de 30"],optionPrices:{"Unidad":500,"Cubeta de 15":7500,"Cubeta de 30":15000},price:500,estimatedOptions:["Cubeta de 15"],description:"Unidad $500 o cubeta de 30 a $15.000."},
  {id:27,name:"Arroz",category:"Mercado",subcategory:"Granos",image:"img/productos/ia/arroz.jpg",unit:"presentación",options:["1 libra","2 libras","5 libras","Arroba","Por kilogramo"],optionPrices:{"1 libra":2500,"2 libras":5000,"5 libras":12500,"Arroba":40000,"Por kilogramo":5000},price:2500,estimatedOptions:["2 libras","5 libras","Arroba","Por kilogramo"],description:"$2.500 la libra. Otras presentaciones calculadas como referencia."},
  {id:28,name:"Aceite",category:"Mercado",subcategory:"Despensa",image:"img/productos/ia/aceite.jpg",unit:"presentación",options:["250 ml","500 ml","900 ml","1 litro","3 litros"],optionPrices:{"250 ml":2800,"500 ml":4500,"900 ml":7000,"1 litro":7500,"3 litros":19000},price:7000,estimated:true,description:"Precios sugeridos; confirmar marca y presentación."},
  {id:29,name:"Azúcar",category:"Mercado",subcategory:"Despensa",image:"img/productos/ia/azucar.jpg",unit:"presentación",options:["1 libra","2 libras","5 libras","Arroba"],optionPrices:{"1 libra":2500,"2 libras":5000,"5 libras":12500,"Arroba":40000},price:2500,estimatedOptions:["2 libras","5 libras","Arroba"],description:"$2.500 la libra. Otras presentaciones calculadas como referencia."},
  {id:30,name:"Pasta",category:"Mercado",subcategory:"Pastas",image:"img/productos/ia/pasta.jpg",unit:"unidad",options:["Espagueti","Macarrones","Tornillos","Conchas","Coditos","Fideos"],optionPrices:{"Espagueti":2500,"Macarrones":2500,"Tornillos":2500,"Conchas":2500,"Coditos":2500,"Fideos":2500},price:2500,description:"$2.500 la unidad, cualquier variedad."},
  {id:31,name:"Leche",category:"Mercado",subcategory:"Lácteos",image:"img/productos/ia/leche.jpg",unit:"unidad",options:["Entera 900 ml","Deslactosada 900 ml","Entera pequeña","Deslactosada pequeña"],optionPrices:{"Entera 900 ml":4500,"Deslactosada 900 ml":4800,"Entera pequeña":2300,"Deslactosada pequeña":2500},price:4500,estimatedOptions:["Deslactosada pequeña"],description:"Entera 900 ml $4.500; deslactosada 900 ml $4.800; pequeña $2.300 (sugerido para deslactosada)."},
  {id:32,name:"Queso",category:"Mercado",subcategory:"Lácteos",image:"img/productos/ia/queso.jpg",unit:"libra",options:["Queso campesino (libra)","Queso costeño (libra)","Queso doble crema (libra)","Cuajada (libra)","Queso mozzarella (libra)","Queso tajado (paquete)","Queso entero (libra)"],optionPrices:{"Queso campesino (libra)":14000,"Queso costeño (libra)":14000,"Queso doble crema (libra)":15000,"Cuajada (libra)":15000,"Queso mozzarella (libra)":16000,"Queso tajado (paquete)":12000,"Queso entero (libra)":12000},price:14000,estimatedOptions:["Queso doble crema (libra)","Cuajada (libra)","Queso mozzarella (libra)"],description:"Campesino y costeño $14.000/libra; tajado y entero $12.000. Otros precios sugeridos."},
  {id:33,name:"Gaseosas y bebidas",category:"Mercado",subcategory:"Bebidas",image:"img/productos/ia/bebidas.jpg",unit:"unidad",options:["Coca-Cola 400 ml","Coca-Cola 1.5 litros","Coca-Cola 2.5 litros","Postobón Manzana 400 ml","Postobón Manzana 1.5 litros","Colombiana 400 ml","Colombiana 2.5 litros","Pepsi 400 ml","Agua personal","Agua 1.5 litros"],optionPrices:{"Coca-Cola 400 ml":3000,"Coca-Cola 1.5 litros":5000,"Coca-Cola 2.5 litros":6500,"Postobón Manzana 400 ml":2800,"Postobón Manzana 1.5 litros":5000,"Colombiana 400 ml":2800,"Colombiana 2.5 litros":6000,"Pepsi 400 ml":2800,"Agua personal":1500,"Agua 1.5 litros":2500},price:3000,estimatedOptions:["Coca-Cola 1.5 litros","Postobón Manzana 400 ml","Postobón Manzana 1.5 litros","Colombiana 400 ml","Pepsi 400 ml","Agua personal","Agua 1.5 litros"],description:"Coca-Cola 400 ml $3.000; Coca-Cola 2.5 L $6.500; Colombiana 2.5 L $6.000. Otros sugeridos."},
  // ASEO
  {id:34,name:"Detergente",category:"Aseo",subcategory:"Lavado de ropa",image:"img/productos/ia/detergente.jpg",unit:"presentación",options:["Polvo 500 g","Polvo 1 kg","Polvo 2 kg","Líquido 1 litro"],optionPrices:{"Polvo 500 g":4500,"Polvo 1 kg":8000,"Polvo 2 kg":14500,"Líquido 1 litro":9000},price:4500,estimated:true,description:"Precios sugeridos; confirmar marca y presentación."},
  {id:35,name:"Jabón",category:"Aseo",subcategory:"Jabones",image:"img/productos/ia/jabon.jpg",unit:"presentación",options:["Barra de baño","Jabón de lavar en barra","Paquete de 3 unidades"],optionPrices:{"Barra de baño":2500,"Jabón de lavar en barra":3000,"Paquete de 3 unidades":7000},price:2500,estimated:true,description:"Precios sugeridos; confirmar marca y presentación."},
  {id:36,name:"Lavaloza",category:"Aseo",subcategory:"Cocina",image:"img/productos/ia/lavaloza.jpg",unit:"presentación",options:["250 ml","500 ml","750 ml","1 litro"],optionPrices:{"250 ml":3000,"500 ml":5000,"750 ml":7000,"1 litro":9000},price:3000,estimated:true,description:"Precios sugeridos; confirmar marca y presentación."},
  {id:37,name:"Desinfectante",category:"Aseo",subcategory:"Limpieza del hogar",image:"img/productos/fabuloso.jpg",unit:"presentación",options:["500 ml","1 litro","2 litros","5 litros"],optionPrices:{"500 ml":3000,"1 litro":5000,"2 litros":8500,"5 litros":18000},price:3000,estimated:true,description:"Precios sugeridos; confirmar marca y presentación."}
];


const WHATSAPP_NUMBER = "3203816322";

const categories = ["Todos", ...new Set(products.map(p => p.category))];
const productGrid = document.getElementById("productGrid");
const categoryFilters = document.getElementById("categoryFilters");
const searchInput = document.getElementById("searchInput");
const cart = new Map();
let pendingProduct = null;
let activeCategory = "Todos";
let activeSubcategory = "Todas";

const money = value => new Intl.NumberFormat("es-CO", {
  style: "currency", currency: "COP", maximumFractionDigits: 0
}).format(value);

function renderFilters(){
  const mainFilters = categories.map(category =>
    `<button class="filter-btn ${category===activeCategory?"active":""}" data-category="${category}">${category}</button>`
  ).join("");
  const subcategories = activeCategory === "Todos"
    ? []
    : ["Todas", ...new Set(products.filter(p => p.category === activeCategory).map(p => p.subcategory).filter(Boolean))];
  const subFilters = subcategories.length
    ? `<div class="subcategory-filters"><span class="filter-label">Filtrar:</span>${subcategories.map(sub =>
        `<button class="filter-btn sub-filter ${sub===activeSubcategory?"active":""}" data-subcategory="${sub}">${sub}</button>`
      ).join("")}</div>`
    : "";
  categoryFilters.innerHTML = mainFilters + subFilters;
  categoryFilters.querySelectorAll("[data-category]").forEach(button => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      activeSubcategory = "Todas";
      renderFilters();
      renderProducts();
    });
  });
  categoryFilters.querySelectorAll("[data-subcategory]").forEach(button => {
    button.addEventListener("click", () => {
      activeSubcategory = button.dataset.subcategory;
      renderFilters();
      renderProducts();
    });
  });
}

function renderProducts(){
  const term = searchInput.value.trim().toLocaleLowerCase("es");
  const filtered = products.filter(p =>
    (activeCategory === "Todos" || p.category === activeCategory) &&
    (activeSubcategory === "Todas" || p.subcategory === activeSubcategory) &&
    (p.name.toLocaleLowerCase("es").includes(term) || p.description.toLocaleLowerCase("es").includes(term))
  );
  productGrid.innerHTML = filtered.length ? filtered.map(p => `
    <article class="product-card">
      <div class="product-image">
       <img src="${p.image || ''}" alt="${p.name}">
       </div>
      <div class="product-info">
        <span class="product-category">${p.category}</span>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="product-bottom">
          <span class="product-price">${p.estimated ? "Precio sugerido desde " : "Desde "}${p.optionPrices ? money(Math.min(...Object.values(p.optionPrices))) : (p.price == null ? "Precio por confirmar" : money(p.price)+" / "+p.unit)}</span>
          <button class="add-btn" data-add="${p.id}">Agregar al pedido</button>
        </div>
      </div>
    </article>`).join("") : `<p class="no-results">No encontramos productos con esa búsqueda.</p>`;
  productGrid.querySelectorAll("[data-add]").forEach(button => {
    button.addEventListener("click", () => addToCart(Number(button.dataset.add)));
  });
}

function addToCart(id){
  const product = products.find(p => p.id === id);
  if (!product) return;
  if (product.options && product.options.length) {
    pendingProduct = product;
    const select = document.getElementById("productOption");
    document.getElementById("optionProductName").textContent = product.name;
    document.getElementById("optionQuestion").textContent = getOptionQuestion(product);
    select.innerHTML = product.options.map(option => `<option value="${option}">${option}</option>`).join("");
    document.getElementById("optionQuantity").value = 1;
    document.getElementById("productOptionModal").classList.add("is-open");
    document.getElementById("productOptionModal").setAttribute("aria-hidden", "false");
    return;
  }
  addCartEntry(product, product.unit);
}
function getOptionQuestion(product){
  if(product.id===32) return "¿Qué variedad de queso deseas?";
  if(product.id===30) return "¿Qué tipo de pasta deseas?";
  if(product.id===33) return "¿Qué gaseosa o bebida y tamaño prefieres?";
  if(product.id===31) return "¿Qué tipo de leche y presentación deseas?";
  if(product.category==="Aseo") return "¿Qué tipo o presentación necesitas?";
  if(product.id===26) return "¿Los quieres por unidad o por cubeta?";
  return "Elige la presentación que deseas:";
}
function addCartEntry(product, variant, quantity=1){
  const key = `${product.id}::${variant}`;
  const current = cart.get(key);
  const price = product.optionPrices?.[variant] ?? product.price ?? null;
  const estimated = Boolean(product.estimated || product.estimatedOptions?.includes(variant));
  cart.set(key, {id:product.id, variant, price, estimated, qty:(current?.qty || 0)+quantity});
  closeProductOption();
  renderCart();
  openCart();
}
function closeProductOption(){
  document.getElementById("productOptionModal").classList.remove("is-open");
  document.getElementById("productOptionModal").setAttribute("aria-hidden", "true");
  pendingProduct = null;
}
document.getElementById("cancelProductOption").addEventListener("click", closeProductOption);
document.getElementById("cancelProductOptionSecondary").addEventListener("click", closeProductOption);
document.getElementById("productOptionBackdrop").addEventListener("click", closeProductOption);
document.getElementById("confirmProductOption").addEventListener("click", () => {
  if (!pendingProduct) return;
  const variant = document.getElementById("productOption").value;
  const quantity = Math.max(1, parseInt(document.getElementById("optionQuantity").value, 10) || 1);
  addCartEntry(pendingProduct, variant, quantity);
});
function changeQuantity(key, delta){
  const item = cart.get(key);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) cart.delete(key);
  else cart.set(key,item);
  renderCart();
}
function renderCart(){
  const entries = [...cart.values()];
  document.getElementById("cartCount").textContent = entries.reduce((sum,item)=>sum+item.qty,0);
  const container = document.getElementById("cartItems");
  if(!entries.length){
    container.innerHTML = '<p class="empty-cart">Todavía no has agregado productos.</p>';
  } else {
    container.innerHTML = entries.map(item => {
      const p = products.find(product=>product.id===item.id);
      const key = `${item.id}::${item.variant}`;
      return `<div class="cart-row"><div><strong>${p.name}</strong><small>${item.variant} · ${item.price==null?"Precio por confirmar":(item.estimated?"Sugerido: ":"")+money(item.price)}</small></div><div class="quantity-controls"><button data-change="${key}" data-delta="-1" aria-label="Quitar uno">−</button><strong>${item.qty}</strong><button data-change="${key}" data-delta="1" aria-label="Agregar uno">+</button></div></div>`;
    }).join("");
    container.querySelectorAll("[data-change]").forEach(button => button.addEventListener("click",()=>changeQuantity(button.dataset.change,Number(button.dataset.delta))));
  }
  const hasUnknown = entries.some(item=>item.price==null);
  const hasEstimates = entries.some(item=>item.estimated);
  const total = entries.reduce((sum,item)=>sum+(item.price||0)*item.qty,0);
  document.getElementById("cartTotal").textContent = hasUnknown ? "Por confirmar" : (hasEstimates ? "Estimado: " : "")+money(total);
}
function openCart(){
  document.body.classList.add("cart-open");
  document.getElementById("cartPanel").setAttribute("aria-hidden","false");
}
function closeCart(){
  document.body.classList.remove("cart-open");
  document.getElementById("cartPanel").setAttribute("aria-hidden","true");
}
document.getElementById("openCart").addEventListener("click",openCart);
document.getElementById("closeCart").addEventListener("click",closeCart);
document.getElementById("cartBackdrop").addEventListener("click",closeCart);
searchInput.addEventListener("input",renderProducts);
document.getElementById("sendOrder").addEventListener("click",()=>{
  const entries = [...cart.values()];
  if(!entries.length){alert("Agrega al menos un producto a tu pedido.");return;}
  if(WHATSAPP_NUMBER.includes("X")){alert("Primero configura el número de WhatsApp del negocio en js/script.js.");return;}
  const lines = entries.map(item=>{
    const p=products.find(product=>product.id===item.id);
    return `• ${p.name} — ${item.variant}: ${item.qty} × ${item.price==null?"precio por confirmar":money(item.price)+(item.estimated?" (sugerido)":"")}`;
  });
  const message = `Hola, Carnes Finas Buenavista. Quiero consultar y realizar este pedido:\n\n${lines.join("\n")}\n\nPor favor confirmen disponibilidad y precios.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,"_blank","noopener");
});
document.getElementById("contactWhatsApp").addEventListener("click",event=>{
  if(WHATSAPP_NUMBER.includes("X")){event.preventDefault();alert("Configura el número de WhatsApp del negocio en js/script.js.");}
  else event.currentTarget.href=`https://wa.me/${WHATSAPP_NUMBER}`;
});
document.getElementById("menuToggle").addEventListener("click",()=>{
  const nav=document.getElementById("mainNav");
  const open=nav.classList.toggle("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded",String(open));
});
document.querySelectorAll('.main-nav a').forEach(link=>link.addEventListener("click",()=>document.getElementById("mainNav").classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
renderFilters();
renderProducts();
renderCart();
