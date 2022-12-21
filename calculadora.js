let horasDiarias = document.getElementById("horasDiarias");
let diasTrabalhados = document.getElementById("diasTrabalhados");
let despesasFixas = document.getElementById("despesasFixas");
let equipamento = document.getElementById("equipamento");
let resultado = document.getElementById("valorTotal");

let hidden = document.getElementById("resultado");

const enviar = document.getElementById("calcular");

enviar.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    horasDiarias.value == "" ||
    diasTrabalhados.value == "" ||
    despesasFixas.value == "" ||
    equipamento.value == ""
  ) {
    alert("Preencha Campos Vazios");
  } else {
    let equipamentoMes = Number(equipamento.value) / 12;
    let despesasTotais = Number(despesasFixas.value) + equipamentoMes;
    let horasMes = Number(horasDiarias.value) * Number(diasTrabalhados.value);

    const valorHora = (despesasTotais / horasMes / 0.5).toFixed(2);

    hidden.classList.remove("hidden");
    resultado.innerText = `R$ ${valorHora}`;
  }
});
