// DESAFIO TÉCNICO

// Função para somar todos os números menores que "number" divisiveis por 3 e 5.
const SumNumbersDividedByThree = (number) => { 
    let sum = 0;
    
    // Verificação se há número e se ele não é 0
    if(number && number != 0){ 
        for(let i = 1; i < number; i++){
            if(i % 3 === 0 || i % 5 === 0){
                sum += i;
            };
        };
    }
    return sum;
};

console.log(SumNumbersDividedByThree(10)); // Resultado 23
console.log(SumNumbersDividedByThree(11)); // Resultado 33
console.log(SumNumbersDividedByThree(81)); // Resultado 1508
console.log(SumNumbersDividedByThree(185)); // Resultado 7833
console.log(SumNumbersDividedByThree(5)); // Resultado 3
console.log(SumNumbersDividedByThree()); // Resultado 0