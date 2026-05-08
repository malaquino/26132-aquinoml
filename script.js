const BASE_URL = 'https://fakestoreapi.com/products';

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
                    ObtenerProductos();
                } else if (parametros[1].toLowerCase().trim().startsWith("products/")){
                    const idProducto = parametros[1].split("/")[1].trim();
                    if (idProducto.length == 0 || isNaN(idProducto)){
                        console.log("El <productId> debe ser un número válido después de products/");
                    } else {
                        ObtenerProducto(idProducto);
                    }
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
                    } else {
                        const [ , , titulo, precio, categoria] = parametros;
                        AgregarProducto(titulo, precio, categoria);
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
                    const idProducto = parametros[1].split("/")[1].trim();
                    if (idProducto.length == 0 || isNaN(idProducto)){
                        console.log("El <productId> debe ser un número válido después de products/");
                    } else {
                        EliminarProducto(idProducto);
                    }
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

async function ObtenerProductos(){
    try {
        const response = await fetch(BASE_URL);
    
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
        }
    
        const data = await response.json();
        console.log("Obteniendo Todos los Productos:")
        console.log(data);
        return data;
    } catch (error) {
        console.error('Falló la solicitud:', error.message);
    }
}

async function ObtenerProducto(idProducto){
    try {
        const response = await fetch(`${BASE_URL}/${idProducto}`);
    
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
        }
    
        const data = await response.json();
        console.log(`Obteniendo el Producto con Id ${idProducto}:`)
        console.log(data);
        return data;
    
    } catch (error) {
        console.error('Falló la solicitud:', error.message);
    }
}

async function AgregarProducto(titulo, precio, categoria){
    try {
        console.log(`Agregando Producto con Titlulo <${titulo}> Precio <${precio}> Categoria <${categoria}>:`);
        const response = await fetch(`${BASE_URL}`,{
            method : "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    title: titulo, 
                    price: precio,
                    category: categoria
                }
            )
        })
    
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
        }
    
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Falló la solicitud:', error.message);
    }
}

async function EliminarProducto(idProducto){
    try {
        console.log(`Eliminando el Producto con Id ${idProducto}:`)
        const response = await fetch(`${BASE_URL}/${idProducto}`,{
            method: "DELETE"
        })
    
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
        }
    
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Falló la solicitud:', error.message);
    }
}