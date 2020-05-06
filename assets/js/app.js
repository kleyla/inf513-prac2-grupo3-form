const enviar = document.getElementById("enviar");
const form = document.getElementById("myForm");
// datos

cargarEventListeners();

function cargarEventListeners() {
  enviar.addEventListener("click", verificarDatos);
}

function verificarDatos(e) {
  e.preventDefault();
  console.log("enviando..");
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const celular = document.getElementById("celular");
  const fecha = document.getElementById("fecha");
  const pais = document.getElementById("pais");

  //   console.log(nombre + " " + email + " " + celular + " " + fecha + " " + pais);

  if (vacio(nombre.value)) {
    // console.log("vacio");
    const div = document.createElement("div");
    div.className = "invalid-feedback";
    text = document.createTextNode("Por favor inserta tu nombre");
    div.appendChild(text);
    nombre.className += " is-invalid";
    parent = nombre.parentElement;
    parent.appendChild(div);
  }
  if (vacio(email.value)) {
    const div = document.createElement("div");
    div.className = "invalid-feedback";
    text = document.createTextNode("Por favor inserta tu email");
    div.appendChild(text);
    email.className += " is-invalid";
    parent = email.parentElement;
    parent.appendChild(div);
  }
  if (vacio(celular.value)) {
    const div = document.createElement("div");
    div.className = "invalid-feedback";
    text = document.createTextNode("Por favor inserta tu numero de celular");
    div.appendChild(text);
    celular.className += " is-invalid";
    parent = celular.parentElement;
    parent.appendChild(div);
  }
  if (vacio(fecha.value)) {
    const div = document.createElement("div");
    div.className = "invalid-feedback";
    text = document.createTextNode("Por favor inserta tu fecha de nacimiento");
    div.appendChild(text);
    fecha.className += " is-invalid";
    parent = fecha.parentElement;
    parent.appendChild(div);
  }
  if (vacio(pais.value)) {
    const div = document.createElement("div");
    div.className = "invalid-feedback";
    text = document.createTextNode("Por favor inserta tu pais de origen");
    div.appendChild(text);
    pais.className += " is-invalid";
    parent = pais.parentElement;
    parent.appendChild(div);
  }
  if (
    !vacio(nombre.value) &&
    !vacio(email.value) &&
    !vacio(celular.value) &&
    !vacio(fecha.value) &&
    !vacio(pais.value)
  ) {
    console.log("exito!");
    myForm.submit();
  }
  //   <div class="invalid-feedback">Please choose a username.</div>;
}

function vacio(dato) {
  return dato === "";
}
