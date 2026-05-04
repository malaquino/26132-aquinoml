function ProcesarComando(){
    var parametros = process.argv.slice(2);
    if(parametros.length == 0){
        console.log("No se han ingresado parámetros.");
        return;
    }

    switch(parametros[0].toUpperCase().trim()) {
        case "GET":
            if (parametros.length > 1){
                if (parametros[1].toLowerCase().trim() == "products"){
                    //obtiene todos los productos
                } else if (parametros[1].toLowerCase().trim().startsWith("products/")){
                    //obtiene el productId indicado luego de la barra, un numero
                }
                else {
                    console.log("El segundo parámetro del comando GET debe ser: products ó products/<productId>");
                }
            } else {
                console.log("El comando GET requiere un segundo parámetro: products ó products/<productId>");
            }
            break;
        case "POST":
            if (parametros.length == 5){
                if (parametros[1].toLowerCase().trim() == "products"){
                    if (parametros[2].trim() == "" || isNaN(parametros[3]) || parametros[4].trim() == ""){
                        console.log("Se requiere los parámetros <title> (string no vacío) <price> (número) <category> (string no vacío), alguno de ellos tiene un valor no válido");
                    }
                } else {
                    console.log("El segundo parámetro del comando POST debe ser: products");
                }
            } else {
                console.log("El comando POST requiere 5 parámetros: POST products <title> <price> <category>");
            }
            break;
        case "DELETE":
            if (parametros.length > 1){
                if (parametros[1].toLowerCase().trim().startsWith("products/")){
                    //obtiene el productId indicado luego de la barra, un numero
                } else {
                    console.log("El segundo parámetro del comando DELETE debe ser: products/<productId>");
                }
            } else {
                console.log("El comando DELETE requiere como segundo parámetro: products/<productId>");
            }
            break;
        default:
            console.log(`Parámetro de operación ${parametros[0]} incorrecto`);
            break;
    }
}

ProcesarComando();