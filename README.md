## Idiomas

### Prerequisitos

```
NodeJs = v
Mongodb = v
ReactJS = v
```

### Instalación

* Clona el repositorio por medio de git
```bash
$ git clone https://github.com/calypsobronte/idiomas.git
```

#### Backend *(nodejs, morgan, express, mongoose, nodemon, ES6+)*

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

#### Frontend *(react, axios)*

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

4. Abra el sitio de desarrollo yendo a `http://localhost:3000` en su navegador.

### Rutas utilizadas con postam
|  Entrada   |     URL    |
| ---------- | ---------- |
| GET   | `http://localhost:5000/api/`   |
| POST   | `http://localhost:5000/api/`   |
| POST   | `http://localhost:5000/api/`   |
| GET   | `http://localhost:5000/api/`   |
| DELETE   | `http://localhost:5000/api`   |

## Criterios de aceptacion
- [x] 

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