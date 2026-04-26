const express = require('express');
const app = express();
const sequelize = require('./baseDatos/db.js');

const peliculasRutas = require('./rutas/ruta-pelicula.js');
const logger = require('./middlewares/logger.js');
const apiKey = require('./middlewares/apiKey.js');

app.use(express.json());
app.use(logger);
app.use(apiKey);

app.use('/peliculas', peliculasRutas);

sequelize.sync().then(() => {
  console.log('Base de datos Activada');
  app.listen(3000, () => {
    console.log('Servidor Activo');
  });
});
