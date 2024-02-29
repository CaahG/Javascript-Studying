function calcularIngredientes(pessoas) {

    const farinha = 50; // gramas
    const açucar = 30; // gramas
    const ovos = 0.5; // meio ovo por pessoa

 const quantidadeFarinha = farinha * pessoas;
  const quantidadeAçucar = açucar * pessoas;
  const quantidadeOvos = Math.ceil(ovos * pessoas);
  return {
    farinha: quantidadeFarinha,
    açucar: quantidadeAçucar,
    ovos: quantidadeOvos
  };
}

const ingredientesPara4Pessoas = calcularIngredientes(4);

console.log("Ingredientes necessários para 4 pessoas:");
console.log("Farinha: " + ingredientesPara4Pessoas.farinha + "g");
console.log("Açúcar: " + ingredientesPara4Pessoas.açucar + "g");
console.log("Ovos: " + ingredientesPara4Pessoas.ovos);