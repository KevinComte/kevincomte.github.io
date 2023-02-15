// Función para menu hamburguesa en mobile
function openMenu() {
  const menu = document.getElementById("menu");
  menu.classList.add("is-active");
}

function closeMenu() {
  const menu = document.getElementById("menu");
  menu.classList.remove("is-active");
}

const abrirMenu = document.getElementsByClassName("menu-icono");

if (abrirMenu) {
  for (let i = 0; i < abrirMenu.length; i++) {
    abrirMenu[i].addEventListener("click", openMenu);
  }
}

const cerrarMenu = document.getElementsByClassName("cerrar-menu");
if (cerrarMenu) {
  for (let j = 0; j < cerrarMenu.length; j++) {
    cerrarMenu[j].addEventListener("click", closeMenu);
  }
}

// Función para botón "más información"

// Sección certificados //
// Certificado 1 //
// function abrirInfo1() {
//   const info = document.getElementById("certi-info-1");
//   info.classList.add("active");
// }

// function cerrarInfo1() {
//   const info = document.getElementById("certi-info-1");
//   info.classList.remove("active");
// }

// const botonInfo1 = document.getElementById('btn-info-abrir-1');
// botonInfo1.addEventListener('click',abrirInfo1);
// const botonInfoCerrar1 = document.getElementById("btn-info-cerrar-1");
// botonInfoCerrar1.addEventListener("click", cerrarInfo1);

// // Certificado 2//
// function abrirInfo2() {
//   const info = document.getElementById("certi-info-2");
//   info.classList.add("active");
// }

// function cerrarInfo2() {
//   const info = document.getElementById("certi-info-2");
//   info.classList.remove("active");
// }

// const botonInfo2 = document.getElementById('btn-info-abrir-2');
// botonInfo2.addEventListener('click',abrirInfo2);
// const botonInfoCerrar2 = document.getElementById("btn-info-cerrar-2");
// botonInfoCerrar2.addEventListener("click", cerrarInfo2);

// Proyecto 1 //
function abrirInfo1() {
  const info = document.getElementById("proyecto-1");
  info.classList.add("active");
}

function cerrarInfo1() {
  const info = document.getElementById("proyecto-1");
  info.classList.remove("active");
}

const botonInfo1 = document.getElementById('btn-info-abrir-1');
botonInfo1.addEventListener('click',abrirInfo1);
const botonInfoCerrar1 = document.getElementById("btn-info-cerrar-1");
botonInfoCerrar1.addEventListener("click", cerrarInfo1);


// Proyecto 2 //
function abrirInfo2() {
  const info = document.getElementById("proyecto-2");
  info.classList.add("active");
  
}

function cerrarInfo2() {
  const info = document.getElementById("proyecto-2");
  info.classList.remove("active");
}

const botonInfo2 = document.getElementById('btn-info-abrir-2');
botonInfo2.addEventListener('click',abrirInfo2);
const botonInfoCerrar2 = document.getElementById("btn-info-cerrar-2");
botonInfoCerrar2.addEventListener("click", cerrarInfo2);

// Proyecto 3 //
function abrirInfo3() {
  const info = document.getElementById("proyecto-3");
  info.classList.add("active");
  
}

function cerrarInfo3() {
  const info = document.getElementById("proyecto-3");
  info.classList.remove("active");
}

const botonInfo3 = document.getElementById('btn-info-abrir-3');
botonInfo3.addEventListener('click',abrirInfo3);
const botonInfoCerrar3 = document.getElementById("btn-info-cerrar-3");
botonInfoCerrar3.addEventListener("click", cerrarInfo3);



// Sección Contacto - Form //
function abrirInfo4() {
  const info = document.getElementById("certi-info-4");
  info.classList.add("active");
}

function cerrarInfo4() {
  const info = document.getElementById("certi-info-4");
  info.classList.remove("active");
}
const botonInfoCerrar4 = document.getElementById("btn-info-cerrar-4");
botonInfoCerrar4.addEventListener("click", cerrarInfo4);

const $form = document.querySelector('#formulario');
$form.addEventListener('submit', recibirForm);

async function recibirForm(event){
  event.preventDefault();
  const form = new FormData(this);
  const respuesta = await fetch(this.action,{
    method: this.method,
    body: form,
    headers: {'Accept': 'application/json'}

  })

  if (respuesta.ok){
    this.reset();
    abrirInfo4();
  }
}



