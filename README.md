# HUMMINGBIRD :
Proyecto de creación de tareas para colegios

![Logo](Logorm.PNG)


## TABLE OF CONTENTS
1. [ Links ](#links) :hammer:
2. [ Descripción ](#description) 
3. [ Instalación ](#setup) :technologist:
4. [ Funcionamiento ](#run) :hammer:
5. [ Base de Datos ](#db) :scroll:
6. [ Tecnologías ](#technologies) :space_invader:
7. [ Licencia ](#license) :raising_hand_woman:

<a name="links"></a>

## Links
Backend:https://git.heroku.com/hummingbirdback.git
Frontend: https://hummingbirdf.herokuapp.com/
Git repository (back): https://git.heroku.com/hummingbirdback.git

<a name="description"></a>

## Descripción 
Hummingbird es una app creada para los colegios, en especial para aquellos alumnos que estén en secundaria. 

La idea de esta app es que desde casa, mientras asisten a clase, los profesores y los alumnos puedan estar comunicados y tengan un espacio estable donde alojar las tareas que se mandan en clase. 

La característica principal de este proyecto es su sencillez. Se ha buscado en todo momento que fuese un entorno atractivo y colorido pensando siempre a la edad del público a quien va dirigida, es decir entre primero y cuarto de la E.S.O. 

<a name="setup"></a>

## Instalación :technologist:
Descargar o clonar. Acceder a la carpeta y escribir en el terminal: 

```
npm start
```

Es posible que necesite instalar dependencias: 

```
npm install
```

<a name="run"></a>

## Funcionamiento :hammer:
Acceda a la página web. Si no tiene usuario, podrá crearse uno o bien con nuestra pantalla principal o bien con la barra de tareas superior pulsando en register.

En caso de tener usuario, puede pulsar en cualquiera de los recuadros marcados con verde para acceder. 

![Create](https://i.ibb.co/m8SFDn4/main.png)


Al hacer login, podemos ver nuestra barra de herramientas arriba. Cuenta con un botón para crear tareas, otro para ver el perfil, otro para volver a la pantalla actual en la que se muestran las tareas listadas y por último el de cerrar la sesión.
![Navbar](https://i.ibb.co/BfxDG5m/barra.png)


También veremos que, al hacer login, nos redireccionará la página automáticamente a dashboard, donde tenemos las tareas listadas.
Si pulsamos en ver tarea, nos abrirá al lado la tarea seleccionada.
![Create](https://i.ibb.co/T23kFBp/tareas.png)

A continuación, si pulsamos en crear tarea, nos abrirá esta página. Rellenamos los campos y pulsamos el botón para enviarla. Nos devolverá a la lista de tareas con la nueva ya creada.
![CrearTarea](https://i.ibb.co/sPcg79B/creartarea.png)

Si pulsamos el botón borrar eliminaremos la tarea seleccionada.


La aplicación ya viene con unos usuarios ficticios creados.

1. Inspector Chalmers 
    mail: chalmers@inspector.com
    contraseña: chalmers
    rol: super (1)

2. Profesor Bacterio
    mail: bacterio@tia.es
    contraseña: bacterio
    rol: profesor (2)

3. Alumno Alúmnez
    mail: prueba@alumno.com
    contraseña: 1234
    rol: alumno (3)

<a name="db"></a>

## Database :scroll:
Esquema de la base de datos
![Database](https://i.ibb.co/W3jyLcP/DBdiagram.png)


<a name="technologies"></a>

## Technologies :space_invader:
- JS
- Node.js
- PhpMyAdmin
- MySQL
- React
- Redux
- CSS
- JS


<a name="license"></a>

## License :raising_hand_woman:
Este proyecto ha sido realizado por Elena Sánchez de la Blanca y está sujeto a la licencia MIT. Para obtener más información, por favor diríjase al archivo LICENSE que encontrará adjunto.
