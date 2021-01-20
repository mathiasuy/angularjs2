var app = angular.module("app", ["ngRoute"]);


app.controller("controlador", function($scope){
    $scope.apellido = "Battistella";

    var lista = this;//this va al scope
    var n = 3;
    var nCarrito = 0;

    lista.productos = [
        {id: 1, nombre: "Agua", precio: 15.9},
        {id: 2, nombre: "Cafe", precio: 3.2},
        {id: 3, nombre: "Queso", precio: 45.3}
    ];

    lista.carrito = [];

    lista.addProducto = function(){
        var nombre = lista.nombre;
        var precio = lista.precio;

        if (nombre != "" && precio != "" && !isNaN(precio)){
            n++;
            lista.productos.push({id: n, nombre : nombre, precio: precio});

            lista.nombre = '';
            lista.precio = '';
        }
    }

    lista.addToCarrito = function(){
        n = 1;
        var id = lista.productoSeleccionado;
        var cantidad = lista.cantidad;
        var producto = lista.productos.find(function(obj){
            return obj.id = id;
        });

        if (producto != undefined && cantidad > 0){
            lista.carrito.push({id: n, nombre: producto.nombre, precio: producto.precio, cantidad: cantidad, total: producto.precio 
            * cantidad})
            nCarrito++;
        }
    }

    lista.getTotalCarrito = function(){
        var total = 0;
        lista.carrito.forEach(x => {
            total += x.total;
        })     
    }

});