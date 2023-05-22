/* class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}
 */
const productos = [
{  id: 1, nombre: "cemento", precio: 1850}, 
{  id: 2, nombre: "ceramico", precio: 3000},  
{  id: 3, nombre: "caños", precio: 800},  
{  id: 4, nombre: "griferias", precio: 20000},     

];


let carrito = []



let elegir = prompt("Desea ver y comprar nuestros productos?")

while(elegir != "si" && elegir != "no"){
    alert("por favor ingrese si o no")
    elegir = prompt("Desea comprar?")
}

if(elegir === "si"){
    alert("tenemos en stock lo siguiente")
    let todoslosProductos = productos.map((producto) => producto.nombre + "" + producto.precio + "$")
    alert(todoslosProductos.join(" - "))
    

} else if(elegir === "no"){
    alert("Te esperamos en otro momento")
}

    











