class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const producto1 = new Producto("cemento", 1850);
const producto2 = new Producto("aridos", 1000);
const producto3 = new Producto("revestimientos", 4000);
const producto4 = new Producto("desagues", 800);    

const arrayProducto = [];

arrayProducto.push(producto1);
arrayProducto.push(producto2);
arrayProducto.push(producto3);
arrayProducto.push(producto4);



function carrito(){
    alert("bienvenido a Brick Construccion");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Ver listado \n 2) Comprar producto \n 3) Salir \n"));
    return opcion;
}

function listado(){
    let producto = prompt("Nuestros productos son")
    alert(`tenemos \n ${arrayProducto[0].nombre} \n ${arrayProducto[1].nombre} \n ${arrayProducto[2].nombre} \n ${arrayProducto[3].nombre} \n`)
    for (let i= 0; i < numeros.length; i++){

    }
}