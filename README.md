# 🚍 Web Venta Pasajes 🎟️

### 💻 Requerimientos:

- NodeJs => v10.18.0;
- NPM => v6.13.4;

### 🚀 Comencemos:

1. Clonar el proyecto
2. Ingresa a la capeta del proyecto `cd nameFolder`
3. Instalar dependencias `npm install`
4. Inciar proyecto en local `npm run start`

### 📋 Consideraciones:

- Los archivos modo desarrollo estan en la carpeta: `src`
- El archivo webpack.config.js contiene las configuraciones de webpack.

### ⌨️ Scripts:

- Crear el proyecto para producción:

  - comando: `npm run buid`

- Iniciar el proyecto en modo desarrollo (local):

  - comando: `npm run start`

- Desplegar a gh-pages:
  - editar package.json: `homepage: url`
  - comando: `npm run deploy`

### 📁 Estructura:

```
├── .babelrc
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── webpack.config.js
├── node_modules
├── dist
│   ├── img
│   ├── css
│   │  └── app.css
│   ├── js
│   │   └── app.js
│   ├── index.html
│   ├── home.html
│   ├── lista.html
│   ├── detalle.html
│   └── contacto.html
└── src
    ├── includes
    ├── images
    ├── sass
    │   ├── base
    │   ├── components
    │   ├── layouts
    │   ├── themes
    │   ├── utilities
    │   ├── views
    │   └── style.scss
    ├── index.pug
    ├── home.pug
    ├── lista.pug
    ├── detalle.pug
    ├── contacto.pug
    └── main.js
```
