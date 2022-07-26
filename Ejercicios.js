function Obtener(Object) {
    var persona = {
      edad: 35,
      nombre: 'Bruno',
      apellido: 'Perez',
      email: 'bruno@mail.com',
    };
    for (let propiedad in persona) {
      console.log(propiedad);
    }
  }
  
function Fecha(num) {
    var date = new Date();
    console.log(date);

}

function verificarPassword(usuario, password) {
    var usuario = {
        nombre,
        email,
        password
    }
    if (usuario.password !== undefined){
        return true
    } else {
        return false
    }
}


function crearGato(nombre, edad) {
    var objeto {
        nombre: Cato

    }
    function agregarPropiedad(objeto,property) {

        objeto[property] = null
    
        return objeto
    
    }
    
    console.log(agregarPropiedad({},"edad"))

    console.log(objeto)


}


function agregarMetodoCalculoDescuento(producto) {

    producto.calcularPrecioDescuento = function(){
        let descuento;
        descuento = this.precio * this.porcentajeDeDescuento;
        return this.precio - descuento;
      }
      return producto;
    }console.log(agregarMetodoCalculoDescuento({"precio": 20, "porcentajeDeDescuento": .1}))


function ordenar(array) {
  let numbers = [-7, -5, -3, 2, 73, 24, 60, 89, 6, 44, 1];
numbers.sort((a, b) => {
  if(a == b) {
    return 0; 
  }
  if(a < b) {
    return -1;
  }
  return 1;
});
}
console.log(numbers)