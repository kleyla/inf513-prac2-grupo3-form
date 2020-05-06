function getParams() {
  var idx = document.URL.indexOf("?");
  var params = new Array();
  if (idx != -1) {
    var pairs = document.URL.substring(idx + 1, document.URL.length).split("&");
    for (var i = 0; i < pairs.length; i++) {
      nameVal = pairs[i].split("=");
      params[nameVal[0]] = nameVal[1];
    }
  }
  return params;
}
params = getParams();
nombre = unescape(params["nombre"]);
email = unescape(params["email"]);
celular = unescape(params["celular"]);
fecha = unescape(params["fecha"]);
pais = unescape(params["pais"]);
document.write("nombre = " + nombre + "<br>");
document.write("email = " + email + "<br>");
document.write("celular = " + celular + "<br>");
document.write("fecha = " + fecha + "<br>");
document.write("pais = " + pais + "<br>");
