// Recibiendo un array con objetos
const colSalaries = COLOMBIA.map(
    persona => persona.salary
);

//Organizando el array recibido
const colSalariesSorted = colSalaries.sort(
    (salaryA, salaryB) => salaryA - salaryB
);

// Calculando si un número es par o inpar - Helper function
function esPar(numero) {
    if( numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Calculando media aritmética - Helper function
function calcAritmeticMedian(list) {
    const sumList = list.reduce(
        function (valorAcumulado = 0, newElement) {
            return valorAcumulado + newElement;
    });

    const promedioList = sumList / list.length;
    return promedioList;
}

// Calculando la mediana de salarios
function medianSalaries(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcAritmeticMedian([personaMitad, personaMitad2]);
        return mediana;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const generalMedialCol = medianSalaries(colSalariesSorted);

// Mediana top 10%


const spliceStart = (colSalariesSorted.length * (100 - 10)) / 100;
const spliceCount = colSalariesSorted.length - spliceStart;

const top10Salaries  = colSalariesSorted.splice(
    spliceStart,
    spliceCount
);

const medianTop10 = medianSalaries(top10Salaries);

console.log(
    generalMedialCol,
    medianTop10
);


