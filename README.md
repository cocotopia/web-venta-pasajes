# π Web Venta Pasajes ποΈ

### π» Requerimientos:

- NodeJs => v10.18.0;
- NPM => v6.13.4;

### π Comencemos:

1. Clonar el proyecto
2. Ingresa a la capeta del proyecto `cd nameFolder`
3. Instalar dependencias `npm install`
4. Inciar proyecto en local `npm run start`

### π Consideraciones:

- Los archivos modo desarrollo estan en la carpeta: `src`
- El archivo webpack.config.js contiene las configuraciones de webpack.

### β¨οΈ Scripts:

- Crear el proyecto para producciΓ³n:

  - comando: `npm run buid`

- Iniciar el proyecto en modo desarrollo (local):

  - comando: `npm run start`

- Desplegar a gh-pages:
  - editar package.json: `homepage: url`
  - comando: `npm run deploy`

### π Estructura:

```
βββ .babelrc
βββ .gitignore
βββ package-lock.json
βββ package.json
βββ README.md
βββ webpack.config.js
βββ node_modules
βββ dist
β   βββ img
β   βββ css
β   β  βββ app.css
β   βββ js
β   β   βββ app.js
β   βββ index.html
β   βββ home.html
β   βββ lista.html
β   βββ detalle.html
β   βββ contacto.html
βββ src
    βββ includes
    βββ images
    βββ sass
    β   βββ base
    β   βββ components
    β   βββ layouts
    β   βββ themes
    β   βββ utilities
    β   βββ views
    β   βββ style.scss
    βββ index.pug
    βββ home.pug
    βββ lista.pug
    βββ detalle.pug
    βββ contacto.pug
    βββ main.js
```
