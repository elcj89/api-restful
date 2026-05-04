const express = require('express');
const app = express();
const sequelize = require('./baseDatos/db.js');

const peliculasRutas = require('./rutas/ruta-pelicula.js');
const autorizacionRutas = require('./rutas/ruta-autorizacion.js');

const logger = require('./middlewares/logger.js');
const verificarToken = require('./middlewares/autorizacion.js');

app.use(express.json());
app.use(logger);

app.use('/auth', autorizacionRutas); 
app.use('/peliculas', verificarToken, peliculasRutas);

sequelize.sync().then(() => {
  console.log('Base de datos Activada');
  app.listen(3000, () => {
    console.log('Servidor Activo');
  });
});
