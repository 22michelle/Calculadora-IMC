// Obtener referencias a los elementos del DOM
var peso = document.getElementById("imcPeso");
var altura = document.getElementById("imcAltura");
var idade = document.getElementById("imcIdade");
var nivelFisico = document.getElementById("imcNivelFisico");
var resultadoContainer = document.getElementById("mensagemFinal");

function mostrarMensaje(mensaje) {
  // Muestra el contenedor de resultados
  resultadoContainer.style.display = "block";
  resultadoContainer.innerHTML = mensaje;
}

function limpiarCampos() {
  // Limpia los campos
  peso.value = "";
  altura.value = "";
  idade.value = "";
  nivelFisico.value = "sedentario";
}

function cerrarContenedor() {
  // Oculta el contenedor de resultados
  resultadoContainer.style.display = "none";
  limpiarCampos();
}

function calculaImc(e) {
  if (!peso.value || !altura.value || !idade.value) {
    mostrarMensaje("Por favor, diligencie todos los datos.");

    // Agrega un botón de cierre
    var cerrarButton = document.createElement("button");
    cerrarButton.textContent = "Cerrar";
    cerrarButton.className = "botaoFechar";
    cerrarButton.addEventListener("click", cerrarContenedor);

    // Agrega el botón de cierre al contenedor
    resultadoContainer.appendChild(cerrarButton);

    e.preventDefault();
    return;
  }

  var pesoValor = parseFloat(peso.value);
  var alturaValor = parseFloat(altura.value);
  var idadeValor = parseInt(idade.value);

  if (isNaN(pesoValor) || isNaN(alturaValor) || isNaN(idadeValor)) {
    mostrarMensaje("Por favor, ingrese valores numéricos válidos.");
    e.preventDefault();
    return;
  }


  var imc = pesoValor / (alturaValor * alturaValor);

  // Redondea el IMC a dos decimales
  imc = Math.round(imc * 100) / 100;

  var mensagem = "";

  const MENSAJE_PESO_BAJO = `Lo siento, tu IMC es de ${imc} kg/m2 y necesitas aumentar de peso. En este momento, puede estar experimentando los siguientes síntomas: pérdida de cabello e infertilidad. Busca un nutricionista.`;
  const MENSAJE_PESO_NORMAL = `Felicitaciones, su IMC es ${imc} kg/m2 y estás dentro del peso adecuado!. Tiene un menor riesgo de enfermedades cardíacas y vasculares.`;

  if (imc <= 16.9 || (imc > 16.9 && imc <= 18.4)) {
    mensagem = MENSAJE_PESO_BAJO;
  } else if (imc <= 24.9) {
    mensagem = MENSAJE_PESO_NORMAL;
  } else if (imc > 24.9 && imc <= 29.9 && nivelFisico.value != "intenso") {
    // Agrega otros casos según sea necesario...
  }

  mostrarMensaje(mensagem);

  // Agrega un botón de reinicio
  var reinicioButton = document.createElement("button");
  reinicioButton.textContent = "Calcular de nuevo";
  reinicioButton.className = "botaoCalcula";
  reinicioButton.addEventListener("click", cerrarContenedor);

  // Agrega el botón de reinicio al contenedor
  resultadoContainer.appendChild(reinicioButton);

  e.preventDefault();
}
