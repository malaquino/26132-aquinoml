# Gestión de Productos

Esta API permite gestionar Productos. Aqui se muestra en detalle las maneras de poder realizar las diferentes operaciones.


## Obtener Listado de Productos

Ejecutar el request 
<localhost:3000/api/products>
con el method 'GET'


## Obtener Detalle de un Producto Específico

Ejecutar el request
<localhost:3000/api/products/:id>
con el method 'GET'

Si se ejecuta desde Postman, se debe colocar en la solapa 'Params' dentro de la seccion 'Path Variables' colocar:

Key: 'id'\
Value: el valor de Id que se quiere buscar


## Crear un Nuevo Producto

Ejecutar el request
<localhost:3000/api/products/create>
con el method 'POST'

Si se ejecuta desde Postman ir a la solapa 'Body', seleccionar en los combos 'raw' y 'JSON', y luego debajo colocar un texto con formato JSON como el siguiente ejemplo:

```json
{
    "producto":
    {
        "nombre": "producto 123",
        "precio": 1000,
        "categoria": "categoria 1"
    }
}
```

## Actualizar un Producto

Ejecutar el request
<localhost:3000/api/products/:id>
con method 'PUT'

Si se ejecuta desde Postman, se debe ir a la solapa 'Params' y dentro de la seccion 'Path Variables' colocar:

Key: 'id'\
Value: el valor de Id que se quiere actualizar

Luego se debe ir a la solapa 'Body', seleccionar en los combos 'raw' y 'JSON', y luego debajo colocar un texto con formato JSON como el siguiente ejemplo:

```json
{
    "nombre": "producto 1",
    "precio": 1500,
    "categoria": "categoria"
}
```

## Eliminar un Producto

Ejecutar el request 
<localhost:3000/api/products/:id>
con method 'DELETE'

Si se ejecuta desde Postman, se debe ir a la solapa 'Params' y dentro de la seccion 'Path Variables' colocar:

Key: 'id'\
Value: el valor de Id que se quiere eliminar
