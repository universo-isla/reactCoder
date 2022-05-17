# Amantes Verdes

Proyecto final para el curso de React JS, Coder House 2022.

### Lenguajes y BIBLIOTECAS

HTML
CSS
JavaScript
Librería React



### Dependencias

React-router-dom - Navegación
React-Firebase - Base de datos [products (importar), orders(exportar)]



## Funcionamiento
Esto es un mapa a grandes rasgos de las rutas y componentes para conocer el funcionamiento de la app.

- index.html (se llama la app en div id="root")
-> app.js 
- -> Routing de COMPONENTES
- - - NavBar
- - - ItemListContenedor
- - - Footer

> NavBar: Logo(Link a ItemListContenedor)
        Obtención de "categories" de colección en Firebase
        Elemento CartWidget en espera 
> ItemListContenedor (despliegue de los productos) alimentado por (Item list: a su vez alimentado por Item), dirige a /detail.

> ItemDetailContainer (detalle del producto): Descripción del producto (ItemDetail) y Counter

> Counter: suma de productos a CartWidget y productos en Cart, se detiene cuando detecta que no hay más elementos en stock (firebase)

>CartWidget: en NavBar, display none hasta que haya elementos, link a Cart

> Cart: opción de borrar productos y regresar a ItemDetailContainer, o generar orden a través de Forms

> Forms: Obtención de datos de usuario, conexión a "orders" en firebase, obtención de ID de orden y re-dirección a pantalla "Tu orden de compra es: "
      

### Visualización navegación

![gif-AnabellEstrada_AmantesVerdes](https://user-images.githubusercontent.com/39147095/168727796-64fe78be-c3cc-4b23-ad4c-e76f6d5ccd6d.gif)


### Retos y espacios de oportunidad
Esta app fue construida a pesar de mis conocimientos básicos de JavaScript, hay problemas con los errores de stock, de ahí aclaración en counter. Los estilos son muy básicos, me concentré en el funcionamiento de la app.
