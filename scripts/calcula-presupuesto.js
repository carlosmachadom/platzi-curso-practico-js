function calcular(num1, num2, num3) {
    return num1 - (num2 + num3);
}

function calcularPresupuesto() {
    const ingresos = document.getElementById('ingresos-totales');
    const valorIngresos = parseInt(ingresos.value);

    const gastosFijos = document.getElementById('gastos-fijos');
    const valorGastosFijos = parseInt(gastosFijos.value);

    const gastosVariables = document.getElementById('gastos-variables');
    const valorGastosVariables = parseInt(gastosVariables.value);

    const presupuestoTotal = calcular(valorIngresos, valorGastosFijos, valorGastosVariables);

    const resultado = document.getElementById('resultado');
    resultado.innerText = presupuestoTotal + ' USD';
}