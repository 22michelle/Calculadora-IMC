var peso = document.getElementById('imcPeso');
var altura = document.getElementById('imcAltura');
var idade = document.getElementById('imcIdade');
var nivelFisico = document.getElementById('imcNivelFisico');
var mensagemResultado = document.getElementById('mensagemFinal')



function calculaImc(e){
  var imc= peso.value / (altura.value*altura.value).toFixed(2);
  imc= imc.toFixed(2);
  var mensagem = 'Por favor, diligencie todos los datos.'
  
  
    if(imc <= 16.9){
      mensagem = 'Lo siento, tu IMC es de' + imc + 'kg/m2' + ' y necesitas aumentar de peso. En este momento, puede estar experimentando los siguientes síntomas: pérdida de cabello, infertilidad. Busca un nutricionista.'
    }else if(imc > 16.9 && imc <= 18.4 ){
    mensagem = 'Lo siento, tu IMC es de ' + imc + 'kg/m2' + ' y necesitas aumentar de peso. En este momento, puede estar experimentando los siguientes síntomas: pérdida de cabello, infertilidad. Busca un nutricionista.'
    }else if(imc > 18.4 && imc <= 24.9){
    mensagem = 'Felicitaciones, su IMC es ' + imc + 'kg/m2' + ' y estás dentro del peso adecuado!. Tiene un menor riesgo de enfermedades cardíacas y vasculares.'
    }else if(imc > 24.9 && imc <= 29.9 && nivelFisico.value != 'intenso'){
    mensagem = 'Lo siento, tu IMC es de ' + imc + 'kg/m2' + ' entonces tienes sobrepeso!. En este momento, puede estar experimentando los siguientes síntomas: fatiga, mala circulación, venas varicosas. Busca un nutricionista.'
    }else if(imc > 24.9 && imc <= 29.9 && nivelFisico.value == 'intenso'){
    mensagem = 'Su IMC indica ' + imc + 'kg/m2,' + 'pero como haces mucha actividad física, tu peso podría deberse a tus músculos, lo cual es bueno. Para confirmarlo, lo ideal es que busques al nutricionista o médico para que evalúe tu composición corporal.'
    }else if(imc > 29.9 && imc <= 34.9 && nivelFisico.value != 'intenso'){
    mensagem = 'Lo siento, tu IMC es de ' + imc + 'kg/m2' + ' entonces tienes sobrepeso!. En este momento, puede estar experimentando los siguientes síntomas: diabetes, angina de pecho, ataque al corazón, aterosclerosis. Busca un nutricionista.'
    }else if(imc > 29.9 && imc <= 34.9 && nivelFisico.value == 'intenso'){
    mensagem = 'Su IMC indica ' + imc + 'kg/m2,' + ' pero como haces mucha actividad física, tu peso podría deberse a tus músculos, lo cual es bueno. Para confirmarlo, lo ideal es que busques al nutricionista o médico para que evalúe tu composición corporal.'
    }else if(imc > 34.9 && imc <= 40 && nivelFisico.value != 'intenso'){
    mensagem = 'Lo siento, tu IMC es de ' + imc + 'kg/m2' + ' entonces tienes sobrepeso!. En este momento, es posible que esté experimentando los siguientes síntomas: apnea del sueño y dificultad para respirar, consulte a un nutricionista.'
    }else if(imc > 34.9 && imc <= 40 && nivelFisico.value == 'intenso'){
    mensagem = 'Su IMC indicaa ' + imc + 'kg/m2,' + ' pero como haces mucha actividad física, tu peso podría deberse a tus músculos, lo cual es bueno. Para confirmarlo, lo ideal es que busques al nutricionista o médico para que evalúe tu composición corporal.'
    }else if(imc > 40 && nivelFisico.value != 'intenso'){
    mensagem = 'Lo siento, tu IMC es de ' + imc + 'kg/m2' + ' entonces tienes sobrepeso!. En este momento, puede estar experimentando los siguientes síntomas: reflujo, dificultad para moverse, úlceras de decúbito, diabetes, ataque cardíaco, accidente cerebrovascular. Busca un nutricionista.'
    }else if(imc > 40 && nivelFisico.value == 'intenso'){
    mensagem = 'Su IMC indica ' + imc + 'kg/m2,' + ' pero como haces mucha actividad física, tu peso podría deberse a tus músculos, lo cual es bueno. Para confirmarlo, lo ideal es que busques al nutricionista o médico para que evalúe tu composición corporal.'
    }
  
  mensagemResultado.innerHTML = mensagem;
  e.preventDefault()
}
