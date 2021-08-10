/* 
// Recorriendo un array para calcular mediana con ciclo for

function calcAritmeticMedian(list) {
    let sumList = 0;
    for(let i = 0; i < list.length; i++) {
    sumList = sumList + list[i];
    };

    const promedioList = sumList / list.length;
    return promedioList;
} 
*/

// Calculando el promedio de una lista de números
// Recorriendo un array para calcular mediana con metodos array
// Calculando la mediana de una lista de números

/* 

const listM = [
    100,
    200,
    300,
    500,
    800,
    1100,
    1150,
    60000000000
];

const midListM = parseInt(listM.length / 2);

function esPar(numero) {
    if ( numero % 2 === 0 ) {
        return true;
    } else {
        return false;
    }

}

let mediana;

if (esPar(listM.length)) {
    const element1 = listM[midListM - 1];
    const element2 = listM[midListM];
    console.log(element1, element2);

    const promElements = calcAritmeticMedian([element1, element2]);
    mediana = promElements;

} else {
    mediana = listM[midListM];
} 
*/


function calcAritmeticMedian(list) {
    const sumList = list.reduce(
        function (valorAcumulado = 0, newElement) {
            return valorAcumulado + newElement;
    });

    const promedioList = sumList / list.length;
    return promedioList;
} 

function esPar(numero) {
    if ( numero % 2 === 0 ) {
        return true;
    } else {
        return false;
    }    
}

function calculandoMediana(lista) {
    
    const mitad = parseInt(lista.length / 2);
    
    let mediana;

    if (esPar(lista.length)) {
        const element1 = lista[mitad - 1];
        const element2 = lista[mitad];
    
        const promedio = calcAritmeticMedian([element1, element2]);
        mediana = promedio;
    
    } else {
        mediana = lista[mitad];
    }

    console.log(mediana);
}

calculandoMediana([100, 100, 100, 100]);
