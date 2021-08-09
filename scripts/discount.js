// Calcular descuento normal

function calcularDescuento(price, discount) {
    const calcDiscount = 100 - discount;
    const totalPrice = (price * calcDiscount) / 100;
    
    return totalPrice;
}

function buttonPriceDiscount() {
    const inputPrice = document.getElementById('input-price');
    const valuePrice = inputPrice.value;

    const inputDiscount = document.getElementById('input-discount');
    const valueDiscount = inputDiscount.value;

    const valorTotal = calcularDescuento(valuePrice, valueDiscount);

    const resultPrice = document.getElementById('result-price');
    resultPrice.innerText = 'El precio con descuento es: $' + valorTotal + 'USD';
}

/* 
// Calcular descuento con cupones

const cupones = [
    'cuponA',
    'cuponB',
    'cuponC'
];
*/

/* 
//Calculando decuento cupones con SWITCH

function buttonCuponDiscount() {
    const inputCuponPrice = document.getElementById('input-price-cupon');
    const valueCuponPrice = inputCuponPrice.value;

    const inputCupon = document.getElementById('input-cupon');
    const valueCupon = inputCupon.value;

    let discount;

    switch(valueCupon) {
        case "cuponA":
            discount = 20;
        break;

        case "cuponB":
            discount = 30;
        break;

        case "cuponC":
            discount = 15;
        break;
    }

    const priceCuponDiscount = calcularDescuento(valueCuponPrice, discount);

    const resultCuponDiscount = document.getElementById('result-cupon-price');
    resultCuponDiscount.innerText = 'El precio con descuento de cupon es: $' + priceCuponDiscount;
}
*/

/*
// Calculando decuento cupones con CONDITIONALS IF ELSE 

function buttonCuponDiscount() {
    const inputCuponPrice = document.getElementById('input-price-cupon');
    const valueCuponPrice = inputCuponPrice.value;

    const inputCupon = document.getElementById('input-cupon');
    const valueCupon = inputCupon.value;

    let discount;

    if(!cupones.includes(valueCupon)) {
        alert(`El cupón ${valueCupon} no es válido`);
    }else if( valueCupon === 'cuponA') {
        discount = 20;
    }else if( valueCupon === 'cuponB' ) {
        discount = 30;
    }else if ( valueCupon === 'cuponC') {
        discount = 15;
    }

    const priceCuponDiscount = calcularDescuento(valueCuponPrice, discount);

    const resultCuponDiscount = document.getElementById('result-cupon-price');
    resultCuponDiscount.innerText = 'El precio con descuento de cupon es: $' + priceCuponDiscount;
}
*/

// Calculando descuento cupones con objetos, arrays y condicionales más eficientes


// Se establecen los cupones dentro de un objeto
const cupones = [
    {
        name: 'cuponA',
        discount: 20
    },
    {
        name: 'cuponB',
        discount: 25
    },
    {
        name: 'cuponC',
        discount: 30
    }
];

function buttonCuponDiscount() {
    // Se adquiere el valor del input de precio del documento HTML
    const inputCuponPrice = document.getElementById('input-price-cupon');
    const valueCuponPrice = inputCuponPrice.value;

    // // Se adquiere el valor del input de cupon del documento HTML
    const inputCupon = document.getElementById('input-cupon');
    const valueCupon = inputCupon.value;

    // Establecemos una variable que va a almacenar el valor de descuento de cada objeto
    let discount;

    // Estableciendo una función anónima para hacer la valudación del valor parametro ingresado
    /*    
    const userValidation = function(cupon) {        
        return valueCupon === cupon.name;
    };
    */
   
    const userValidation = cupon => valueCupon === cupon.name;    

    const userCoupon = cupones.find(userValidation);

    if (!userCoupon) {
        alert('El cupón ' + userCoupon + ' no es válido');
    } else {
        discount = userCoupon.discount;
        const priceCuponDiscount = calcularDescuento(valueCuponPrice, discount);

        const resultCuponDiscount = document.getElementById('result-cupon-price');
        resultCuponDiscount.innerText = 'El precio con descuento de cupon es: $' + priceCuponDiscount;
    }
}





