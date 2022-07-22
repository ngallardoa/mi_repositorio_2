let totalCompra;

function pedirProducto(producto1, cantidad){
    const precioPan = 200;
    const precioTorta = 400;
    const precioGalletitas = 250;
    producto1 = prompt("Bienvenido a Lazaretto Bakery. Por favor, elija el producto que desea comprar: 'a' pan por kilo x $200, 'b' porción de torta x $400, 'c' galletitas por unidad x $250, 'd' para cancelar");

    while (producto1 != 'd'){
        cantidad = parseInt (prompt("Ingrese la cantidad de unidades que quiere comprar"));
        switch (producto1){
            case 'a':
                totalCompra = (precioPan * cantidad);
                alert ("El total a pagar es: $" + totalCompra);
                break;
        
            case 'b':
                totalCompra = (precioTorta * cantidad);
                alert ("El total a pagar es: $" + totalCompra);
                break;
    
            case 'c':
                totalCompra = (precioGalletitas * cantidad);
                alert ("El total a pagar es: $" + totalCompra);
                break;
    
            default:
                break;
    
        }
        producto1 = prompt("Desea hacer algún pedido más? 'a' pan por kilo x $200, 'b' porción de torta x $400, 'c' galletitas por unidad x $250, 'd' para cancelar");
    
    } 
}

pedirProducto();
