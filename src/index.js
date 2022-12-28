// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const Database = require('better-sqlite3');

const db = new Database('./src/data/cards.db', {verbose: console.log})
// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({ limit: "25mb" }));
server.set('view engine', 'ejs');

console.log(process.env);
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
      ...req.body,
    };
    const query= db.prepare('INSERT INTO cards (palette, name, email, photo, phone, linkedin, github, job) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
    const result = query.run(
      newCard.palette,
      newCard.name,
      newCard.email,
      newCard.photo,
      newCard.phone,
      newCard.linkedin,
      newCard.github,
      newCard.job,
    )
    console.log(result);
    const response = {
      success: true,
      cardURL: `http://localhost:4000/card/${result.lastInsertRowid}`,
    };
    res.json(response);
  }
});

server.get('/card/:id', (req, res) => {
  const query= db.prepare('SELECT * FROM cards WHERE id = ?');
  const result = query.get(req.params.id);
  res.render('card', result);
  });

const staticServerPathWeb = "./src/public-react"; // En esta carpeta ponemos los ficheros estáticos
server.use(express.static(staticServerPathWeb));

const staticServerPathStyles = "./src/public-react-styles"; // En esta carpeta ponemos los ficheros estáticos
server.use(express.static(staticServerPathStyles));