const altura = document.getElementById('input_altura');
const peso = document.getElementById('input_peso');
const resultado = document.getElementById('resultado__valor');
const resultado_texto = document.getElementById('resultado__texto');
const resultado__detalhes = document.getElementById('resultado__detalhes');

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
        const imc = (valorPeso / (valorAltura*valorAltura)).toFixed(2)
        alteraTexto();
        resultado__detalhes.textContent = tipoImc(imc);
        resultado.textContent = imc <= 10 || imc >= 50.00 ? "Inválido": imc;

    } else {
        valorResultado = '';
        resultado.textContent = valorResultado;
        resultado_texto.textContent = 'Bem-vindo';
        resultado__detalhes.textContent = 'Digite sua altura e peso e você verá seu resultado de IMC aqui';
    }
  }

  function alteraTexto(){
    
    resultado_texto.textContent = 'Seu IMC é...'
  }

  function tipoImc(imc) {
    if(imc > 10.00 && imc < 18.5 )
      return imcs[0]
    else if (imc >= 18.5 && imc < 24.9)
      return imcs[1]
    else if (imc >= 25.00 && imc < 29.9)
      return imcs[2]
    else if (imc >= 30.00 && imc < 39.9)
      return imcs[3]
    else if (imc <= 10 || imc >= 50.00){
      tremerParagrafo();
      return imcs[4]
    }
      
  }

  function tremerParagrafo() {

    resultado.classList.add('shake-animacao');
    resultado.style.color = 'red';
  
    // Remover a classe após a animação (caso deseje fazer a animação mais de uma vez)
    setTimeout(function() {
      resultado.classList.remove('shake-animacao');
      resultado.style.color = 'white';
    }, 700); // Tempo deve ser o mesmo valor da duração da animação definida no CSS (0.4s neste caso)
  }

  var imcs = [
    "Seu IMC sugere que você está abaixo do peso ideal.",
    "Seu IMC sugere que você tem um peso saudável.",
    "Seu IMC sugere que você está acima do peso.",
    "Seu IMC sugere que você é obeso.",
    "Informe valores válidos."
  ]

