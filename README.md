## Idiomas

### Prerequisitos

```
NodeJs = v10.19.0
Mongodb = v3.6.8
VueJS = v4.5.7
```

### Instalación

* Clona el repositorio por medio de git
```bash
$ git clone https://github.com/calypsobronte/idiomas.git
```

<br>
<br>

#### Backend *(nodejs, morgan, express, mongoose, nodemon, ES6+)*
Para el backend utilice la tecnologia de nodejs con Express ya que es rapido y flexible con nodejs para la creacion de APIs.

1. Ingresar al directorio clonado `idiomas/backend`

```bash
$ cd backend
```

2. Instalar las dependencias para correr el server

```bash
$ yarn install
```

3. Inicie el servidor de desarrollo:
```bash
$ yarn start
```

4. Puede abrir postman e ingresar los datos con la siguiente endpoint  `http://localhost:5000/api/init` para saber que si esta corriendo el servidor correctamente.

  > Nota: la base de datos del proyecto se llama `idiomas` esta se crea automaticamente y no contiene password

<br>
<br>

#### Frontend *(vuejs2, vuetify, axios)*
Para el frontemd utilice la tecnologia Vuejs, ya que es con la que mas he interactuado en aprendizaje.

1. Ingresar al directorio clonado `idiomas/frontend`

```bash
$ cd frontend
```

2. Instalar las dependencias para correr el server

```bash
$ yarn install
```

3. Inicie el servidor de desarrollo:
```bash
$ yarn serve
```

4. Abra el sitio de desarrollo en modo local yendo a la url `http://localhost:8080` en su navegador.

5. Alli te encontraras con el inicio de sesion para poder tener acceso a la aplicacion de idiomas.



### Rutas utilizadas por medio de postman
|  Entrada   |     URL    |  Salida   |
| ---------- | ---------- | ---------- |
| GET   | `http://localhost:5000/api/datos`   | [{"_id": "60aab107a5f8771375cfa33e", ...}] |
| POST   | `http://localhost:5000/api/datos`   | { "name": "Lina", ...} |

## Criterios de aceptacion
- [x] Completitud de la solución
- [x] Buenas prácticas de desarrollo
- [x] Divergencia en el diseño
- [x] Divergencia en la solución
- [x] Publicar solución repositorio con Git
- [x] Documentación de la solución
## Bonus
- [x] Obtener el nombre de un login con Google
- [x] Traer los datos de una BD
- [x] Exponer la solución en algún servicio en nube

## Construido con

* WSL2 Ubuntu Server 20.04
* Visual Studio Code
* Postman

## Contribuyendo

Contribuya usando GitHub Flow. Cree una rama, agregue confirmaciones y abra una solicitud de extracción .

## Versionado

v1

## Autores

* **Lina María Montaño Ramírez** - *Backend Developer* - [calypsobronte](https://github.com/calypsobronte)


## Licencia

 MIT License 
