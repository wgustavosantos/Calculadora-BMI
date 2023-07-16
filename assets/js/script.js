const altura = document.getElementById('input_altura');
const peso = document.getElementById('input_peso');
const resultado = document.getElementById('resultado__valor');
const resultado_texto = document.getElementById('resultado__texto');

let valorAltura = 0;
let valorPeso = 0;
let valorResultado;

altura.addEventListener('input', function(event) {
    const valorDigitado = event.target.value; // Obtém o valor digitado no input
    valorAltura = (parseFloat(valorDigitado) / 100).toFixed(2);
    alteraValor();
  });

  peso.addEventListener('input', function(event) {
    const valorDigitado = event.target.value; // Obtém o valor digitado no input
    valorPeso = parseFloat(valorDigitado);
    alteraValor();
  });



  function alteraValor() {
    if(valorAltura != 0 && !isNaN(valorAltura) && valorPeso != 0 && !isNaN(valorPeso)){
        const imc = valorPeso / (valorAltura*valorAltura)
        alteraTexto();
        resultado.textContent = imc.toFixed(2);
    } else {
        valorResultado = '';
        resultado.textContent = valorResultado;
        resultado_texto.textContent = 'Bem-vindo';
    }
  }

  function alteraTexto(imc){
    
    resultado_texto.textContent = 'Seu IMC é...'
  }

