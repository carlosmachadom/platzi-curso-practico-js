/* console.log('I\'m a web developer at Accenture');
 */

// Aquí empieza el Código del cuadrado
console.group('Cuadrado')
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();


// Aquí empieza el código del triángulo
console.group('Triángulo')
    // PERIMETRO TRIÁNGULO
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
    
}
    
    // ÁREA TRIÁNGULO
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();


// Aquí empieza el círculo
console.group('Círculos');
    // Diámetro CÍRCULO
function diametroCirculo(radio) {
    return radio * 2;
}
    // PI
const PI = Math.PI;
    // Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI; 
}
    // Área del círculo
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Conection HTML

// Creando una función encargada de dispararse cuando el boton reciba un click
    // CUADRADO
function calcularPerimetroCuadrado() {
        // Tomar el input de mi documento HTML por su ID
    const input = document.getElementById('input-cuadrado');
        // Tomando el contenido o dato que se requiere del input
    const value = input.value;
        // Implementando la fórmula o funciones establecidas anteriormente
    const perimetro = perimetroCuadrado(value);
        // Mostrando el resultado
    alert(perimetro);
}

function calcularAreaCuadrado() {
        // Tomar el input de mi documento HTML por su ID
    const input = document.getElementById('input-cuadrado');
        // Tomando el contenido o dato que se requiere del input
    const value = input.value;
        // Implementando la fórmula o funciones establecidas anteriormente
    const area = areaCuadrado(value);
        // Mostrando el resultado
    alert(area);
}

    // TRIÁNGULO
function calcularPerimetroTriangulo() {
    const inputLI = document.getElementById('input-triangulo-lado-izquierdo');
    const valueLI = parseInt(inputLI.value);
    

    const inputLD = document.getElementById('input-triangulo-lado-derecho');
    const valueLD = parseInt(inputLD.value);
    

    const inputB= document.getElementById('input-triangulo-lado-base');
    const valueB = parseInt(inputB.value);


    const perimetro = perimetroTriangulo(valueLI, valueLD, valueB);

    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputB = document.getElementById('input-triangulo-lado-base');
    const valueB = parseInt(inputB.value);

    const inputA= document.getElementById('input-triangulo-altura');
    const valueA = parseInt(inputA.value);

    const area = areaTriangulo(valueB, valueA);

    alert(area);
}

    // CÍRCULO
function calcularDiametroCirculo() {
    const inputR = document.getElementById('input-circulo');
    const valueR = parseInt(inputR.value);

    const diametro = diametroCirculo(valueR);
    alert(diametro);
}

function calcularPerimetroCirculo() {
    const inputR = document.getElementById('input-circulo');
    const valueR = parseInt(inputR.value);

    const perimetro = perimetroCirculo(valueR);
    alert(perimetro.toFixed(2));
}

function calcularAreaCirculo() {
    const inputR = document.getElementById('input-circulo');
    const valueR = parseInt(inputR.value);

    const area = areaCirculo(valueR);
    alert(area.toFixed(2));
}