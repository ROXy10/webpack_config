# Webpack config by ROXy

### Npm initial add scripts in package.json 
    npm init -y
    "nodemon": "NODE_PATH=./src nodemon server.js",
    "build": "NODE_ENV='production' webpack -p",
    "start": "npm run dev",
    "dev": "webpack-dev-server --debug --hot --devtool eval-source-map --output-pathinfo --watch --colors --inline --content-base public"

### Babel
    npm i babel-core babel-plugin-transform-decorators-legacy babel-polyfill babel-preset-es2015 babel-preset-react babel-preset-stage-0 -D

### Webpack
    npm i webpack webpack-dev-server -D

### Bluebird
    npm i bluebird -D

### Loaders
    npm i babel-loader clean-webpack-plugin css-loader open-browser-webpack-plugin extract-text-webpack-plugin file-loader html-loader json-loader less less-loader postcss-loader style-loader url-loader sass-loader node-sass -D

### ESLint
    npm i babel-eslint eslint eslint-loader eslint-plugin-react -D

### Express
    npm i express nodemon -D 

### React и ReactDOM
    npm i react react-dom -S

### React hot loader
    npm i react-hot-loader -D

### React Bootstrap Router Redux
    npm i react-bootstrap react-router react-router-bootstrap redux react-redux redux-thunk -S

### Redux dev tools
    npm i redux-devtools redux-devtools-log-monitor redux-devtools-dock-monitor -S

### React bootstrap button loader
    npm i react-bootstrap-button-loader -S

### Redux oauth
    npm i redux-oauth cookie-parser -S
