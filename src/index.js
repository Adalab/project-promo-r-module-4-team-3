// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({ limit: "25mb" }));
server.set('view engine', 'ejs');

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const savedCard = [];

// Escribimos los endpoints que queramos
server.post("/card", (req, res) => {
  if (
    req.body.palette === "" ||
    req.body.name === "" ||
    req.body.job === "" ||
    req.body.email === "" ||
    req.body.linkedin === "" ||
    req.body.github === "" ||
    req.body.photo === ""
  ) {
    const responseError = {
      success: false,
      error: "Mandatory fields: name, job, email, linkedin, github, photo",
    };
    res.json(responseError);
  } else {
    const newCard = {
      id: uuidv4(),
      ...req.body,
    };

    savedCard.push(newCard);
    console.log(savedCard);

    const response = {
      success: true,
      cardURL: `http://localhost:4000/card/${newCard.id}`,
    };
    res.json(response);
  }
});

server.get('/card/:id', (req, res) => {
    const foundCard = savedCard.find((eachCard) => eachCard.id === req.params.id) 
    res.render('card', foundCard);
  });

const staticServerPathWeb = "./src/public-react"; // En esta carpeta ponemos los ficheros estáticos
server.use(express.static(staticServerPathWeb));

const staticServerPathStyles = "./src/public-react-styles"; // En esta carpeta ponemos los ficheros estáticos
server.use(express.static(staticServerPathStyles));