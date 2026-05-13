# Gestión de Productos

A través de la ejecución del script desarrollado se pueden realizar diferentes operaciones para Gestionar Productos.


## Obtener Listado de Productos

Ejecutar en la consola:

`npm run start GET products`


## Obtener Detalle de un Producto Específico

Ejecutar en la consola:

`npm run start GET products/<productId>`

Donde:

* `<productId>` es el identificador del producto.


## Crear un Nuevo Producto

Ejecutar en la consola:

`npm run start POST products <title> <price> <category>`

Donde:

* `<title>` es el título del Producto.
* `<price>` es el precio del Producto.
* `<category>` es la categoría del Producto.


## Eliminar un Producto

Ejecutar en la consola:

`npm run start DELETE products/<productId>`

Donde:

* `<productId>` es el identificador del Producto.
