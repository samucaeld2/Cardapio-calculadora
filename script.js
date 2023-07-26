document.getElementById('btnAdicionar').addEventListener('click', function () {
  const diaDaSemana = document.getElementById('diaDaSemana').value;
  const itemCardapio = document.getElementById('itemCardapio').value;
  const listaCardapio = document.getElementById('listaCardapio');

  if (diaDaSemana && itemCardapio) {
      const listItem = document.createElement('li');
      const listItemText = document.createElement('span');
      listItemText.textContent = `${diaDaSemana}: ${itemCardapio}`;
      listItem.appendChild(listItemText);

      const btnEditar = document.createElement('button');
      btnEditar.textContent = 'Editar';
      btnEditar.addEventListener('click', function () {
          const novoItem = prompt('Editar item do cardápio:', listItemText.textContent);
          if (novoItem) {
              listItemText.textContent = novoItem;
          }
      });
      listItem.appendChild(btnEditar);

      const btnExcluir = document.createElement('button');
      btnExcluir.textContent = 'Excluir';
      btnExcluir.addEventListener('click', function () {
          listaCardapio.removeChild(listItem);
      });
      listItem.appendChild(btnExcluir);

      listaCardapio.appendChild(listItem);

      document.getElementById('itemCardapio').value = '';
  }
});

document.getElementById('btnCalcularIMC').addEventListener('click', function() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const resultadoIMC = document.getElementById('resultadoIMC');

  if (peso && altura) {
      const imc = (peso / (altura * altura)).toFixed(1);
      let classificacao;

      if (imc < 18.5) {
          classificacao = 'Abaixo do peso';
      } else if (imc >= 18.5 && imc < 24.9) {
          classificacao = 'Peso normal';
      } else if (imc >= 25 && imc < 29.9) {
          classificacao = 'Sobrepeso';
      } else if (imc >= 30 && imc < 34.9) {
          classificacao = 'Obesidade grau 1';
      } else if (imc >= 35 && imc < 39.9) {
          classificacao = 'Obesidade grau 2';
      } else {
          classificacao = 'Obesidade grau 3';
      }

      resultadoIMC.textContent = `Seu IMC é ${imc} (${classificacao})`;
  } else {
      resultadoIMC.textContent = 'Por favor, insira seu peso e altura para calcular o IMC.';
  }
});