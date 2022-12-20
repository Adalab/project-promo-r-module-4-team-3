// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({ limit: '25mb' }));

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.post('/card', (req, res) => {
  const response = {
    success: true,
    cardURL: 'https://dev.adalab.es/card/16715326611213225',
  };
  res.json(response);

  const responseError = {
    success: false,
    error: 'Mandatory fields: name, job, email, linkedin, github, photo',
  };

  res.json(responseError);
});

/*server.get('/card/id', (req, res) => {
    const response = {
      success: true,
      cardURL: 'https://dev.adalab.es/card/16715326611213225',
    };
    res.json(response);
  
    const responseError = {
      success: false,
      error: 'Mandatory fields: name, job, email, linkedin, github, photo',
    };
  
    res.json(responseError);
  });*/
