// Calculando Media aritmética o promedio
function calcAritmeticMedian(list) {
    const sumList = list.reduce(
        function (valorAcumulado = 0, newElement) {
            return valorAcumulado + newElement;
    });

    const promedioList = sumList / list.length;
    return promedioList;
} 

// Calculando si una lista es par o inpar para poder sacar un mejor promedio
function esPar(numero) {
    if ( numero % 2 === 0 ) {
        return true;
    } else {
        return false;
    }    
}

// Calculando la mediana de un array y ordenar dicho array
function calculandoMediana(lista) {
    console.log(`La lista ingresada es: ${lista}`);

    const orderedList = lista.sort();
    console.log(`La lista ordenada es: ${orderedList}`);
    
    const mitad = orderedList.length / 2;
    console.log(`La mitad de la lista es de: ${mitad}`);
    
    let mediana;

    if (esPar(orderedList.length)) {
        const element1 = orderedList[mitad - 1];
        const element2 = orderedList[mitad];
        console.log(`La mitad de la lista es en los números: ${element1} y ${element2}`);
    
        const promedio = calcAritmeticMedian([element1, element2]);
        mediana = promedio;
        console.log(`La media aritmética o promedio de una lista que es par es ${mediana}`);
    
    } else {
        mediana = orderedList[mitad - .5];
        console.log(`La media o promedio de una lista que es inpar es de: ${mediana}`);
    }
}

// Calculando la moda dentro de un conjunto de datos
function calcularModa(lista) {
    console.log(lista);

    const listaCounter = {};

    lista.map( element => {
        if(listaCounter[element]) {
            listaCounter[element] = listaCounter[element] + 1;
        } else {
            listaCounter[element] = 1;
        }
    });
    console.log(listaCounter);

    const listaArray = Object.entries(listaCounter).sort( 
        function(valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
    });
    console.log(listaArray);

    const moda = listaArray[listaArray.length - 1];
    console.log(moda);
}

// Calculando el promedio ponderado
const notasFinales = [
    {
        curso: 'Pensamiento Histórico',
        nota: 3.8,
        creditos: 3,
    },
    {
        curso: 'Pensamiento Geográfico',
        nota: 4.8,
        creditos: 3,
    },
    {
        curso: 'Constitución y democrácia',
        nota: 4,
        creditos: 1,
    },
    {
        curso: 'Teorías del aprendizaje',
        nota: 4.2,
        creditos: 3,
    },
    {
        curso: 'Grancolombianidad',
        nota: 4.8,
        creditos: 1,
    },
    {
        curso: 'Competecias comunicativas',
        nota: 4,
        creditos: 2,
    }
];
console.log(notasFinales);

const notasXcreditos = notasFinales.map(materia => materia.nota * materia.creditos);
console.log(notasXcreditos);

const sumaNuevoArray = notasXcreditos.reduce(
    function (valorAcumulado = 0, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }
);
console.log(sumaNuevoArray);

const creditos = notasFinales.map(materia => materia.creditos);
console.log(creditos);

const totalCreditos = creditos.reduce( 
    function (valorAcumulado = 0, nuevoValor) {
        return valorAcumulado + nuevoValor;
});
console.log(totalCreditos);

const promedioNotas = sumaNuevoArray / totalCreditos;
console.log(promedioNotas.toFixed(2));