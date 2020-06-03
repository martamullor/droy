# Droy

* * *

## Description 

Herramienta online que te permite construir tu propia página web de forma visual y sin tener conocimientos de programación.
![](img/Prueba1.gif)

* * *

## User Stories 

* El individuo, visualiza una página de inicio donde puede empezar un proyecto.
* Al individuo, antes de empezar un proyecto, le aparece un modal donde se le pregunta el nombre y el estilo base (theme) que querrá que tenga (Clásico o Moderno). Una vez confirmado, se le redirige a la "Builder” page para poder empezar.
* Durante la construccion de la pagina web, el individuo tiene dos modos disponibles: Edición y Visualización, que puede intercambiar en cualquier momento.
  - **Modo edicion**:
    - Permite añadir una seccion (componente) a la pagina web del usuario, mediante un menú lateral en scroll que muestra todos los componentes específicos disponibles para este estilo. Para incluir un componente, el usuario tiene que seleccionarlo y añadirlo mediante un botón +. El componente se añade en la última posición.
    - Permite cambiar la posicion de un componente mediante unos botones de subir/bajar.
    - Permite editar el contenido de un componente (textos e imágenes) realizando un doble click sobre la informacion a actualizar.
    - Permite eliminar un componente.
  - **Modo visualización**:
    - Sirve para que el usuario puedo visualizar sin distracciones como esta quedando su página web.
    - Oculta el menú lateral en scroll para que no pueda añadir nuevos componentes.
    - Bloquea al usuario todas las funcionalidades de edicion de un componente (eliminar, editar y cambiar de posicion)
    - Oculta el navbar propio de Droy así como otros elementos prescindibles.
    

* * *

## Backlog 

* El individuo, pasa a ser usuario: puede registrarse, hacer log-in y log-out.
* El usuario, puede guardar el progreso de su página web en cualquier momento para poder seguir en otro momento.
* El usuario puede tener varios proyectos, no solo uno. En la página inicial, visualiza todos los proyectos empezados y tiene la posibilidad de crear uno de nuevo, asi como de eliminar uno que ya exista. El usuario, cuando quiere ver / modificar alguno de sus proyectos o empezar el recién creado, se le dirige a la “Builder” page.
* El usuario, puede añadir un componente a una posicion específica de su pagina web mediante drag & drop, y no mediante el botón +.
* El usuario, puede cambiar la posicion de un componente ya añadido mediante drag & drop y no con los botones de subir/bajar.
* El usuario puede añadir componentes tales como Contadores, Formularios de contacto, ...
* El usuario puede editar el estilo de un elemento de contenido, no solo su text/imagen (text-size, text color, referencia de un link, ocularlo/mostrarlo, heading fixed o no,... etc.)
* El usuario puede editar el estilo general de un componente, no solo su contenido (height, background-color/image, espaciado, paddings, ... )
* El usuario puede editar su información (nombre, password)
* El usuario no solo dispone de dos estilos básicos a elegir en el momento de creación de un nuevo proyecto.
* El usuario, cuando considera que ha terminado una versión para su página web, puede deployarla para que esté en producción.
* El usuario puede registrarse con google.
* La aplicacion crea paginas web responsive.
* El usuario puede recuperar la password.
* El usuario puede ver una página de 404 y 5** controlada.

* * *

## MVP Views 

| RUTA | Descripción |
| -- | -- |
| / | Muestra la página principal donde se puede iniciar un proyecto. | 
| /builder | Permite al usuario construir/editar/visualizar su página web. |

* * *

## Models

```javascript

User = {
  name: "Bob",
  email: "bob@marley.com",
  password: "····",
  userProjects: [userProjectId, ...]
}

UserProject = {
  name: "My First Project",
  style: "Classic",
  componentsConfiguration: [{
    parentComponentCode: "classic-heading-1",
    componentInfo: { text1: "Hello", text2: "World"},
    ...
  }]
}

Components = {
  code: "heading-1", // unique y que identifica un componente creado dentro de React. 
  defaultConfig: { text1: "Default Hello", text2: "Default World" },
  belongsToStyle: "classic",
  image: "https://..."
}

Styles = {
  code: "classic",
  name: "Classic",
  image: "https://...",
  description: "This is the most classic style.",
  className: "classic" // para que se setee programaticamente el el buildingApp parent div.
}

```

## Links

[Link to Trello](https://trello.com/b/Krfo4Qp5/droy)

[Github](https://github.com/marcmnc7/droy)

[Presentación](https://docs.google.com/presentation/d/1uFGmgLAgxeSe85KBZDAyAb9DgJ9LqC1k4Wlm6_MQMug/edit#slide=id.p)

