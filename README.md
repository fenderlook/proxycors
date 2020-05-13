# basic-cors-proxy
Servidor básico de redirección proxy

## Configuración
Para instalar las dependencias solo es necesario hacer:

```
npm install
```

Y agregar el archivo `./config.js` y que tenga el siguiente contenido:

```javascript
module.exports = {
    <nprefijo>: <dominio_url>
}
```

Ejemplo:

```javascript
module.exports = {
    buscador: 'http://www.google.com'
};
```

Y la URL `http://localhost:3001/buscador rediriguiran a google.
    
    
