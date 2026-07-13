# Gestión de Productos

Esta API permite gestionar Productos. Aqui se muestra en detalle las maneras de poder realizar las diferentes operaciones.

Tener en cuenta que si el codigo se ejecuta en la pc localmente (ejecutando 'npm start' desde la linea de comando), el host es <localhost:3000>.
Si se va a utilizar la API publicada en Vercel, se debe tomar como host  <https://26132-aquinoml.vercel.app>.

## Login

Para obtener el token (que se utiliza para ciertas operaciones), se debe ejecutar el request a <localhost:3000/auth/login> con el method 'POST'

Si se ejecuta desde Postman ir a la solapa 'Body', seleccionar en los combos 'raw' y 'JSON', y luego debajo colocar un texto con formato JSON como el siguiente ejemplo (con los datos correctos):

```json
{
    "email": "xxx@xxx.com",
    "password": "xxxx"
}
```

Se va a obtener algo similar a esto:
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3ODM5MTI0NDYsImV4cCI6MTc4MzkxNjA0Nn0.x2i1kbDj7vkDENsu0KBojYtYfXxZC-w7XfPw7T0wljM"
}
```

## Obtener Listado de Productos

Ejecutar el request 
<localhost:3000/api/products>
con el method 'GET'


## Obtener Detalle de un Producto Específico

Ejecutar el request
<localhost:3000/api/products/:id>
con el method 'GET'

Si se ejecuta desde Postman, se debe ir a la solapa 'Params' y dentro de la seccion 'Path Variables' colocar:

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

Ir a la solapa Authorization, se debe seleccionar en Auth Type la opcion 'Bearer Token' y en el campo de Texto que se habilita a la derecha pegar el token que devuelve el [Request de Login](#login) (sin las comillas, solo el valor) 

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

Ir a la solapa Authorization, se debe seleccionar en Auth Type la opcion 'Bearer Token' y en el campo de Texto que se habilita a la derecha pegar el token que devuelve el [Request de Login](#login) (sin las comillas, solo el valor) 

## Eliminar un Producto

Ejecutar el request 
<localhost:3000/api/products/:id>
con method 'DELETE'

Si se ejecuta desde Postman, se debe ir a la solapa 'Params' y dentro de la seccion 'Path Variables' colocar:

Key: 'id'\
Value: el valor de Id que se quiere eliminar

Ir a la solapa Authorization, se debe seleccionar en Auth Type la opcion 'Bearer Token' y en el campo de Texto que se habilita a la derecha pegar el token que devuelve el [Request de Login](#login) (sin las comillas, solo el valor) 