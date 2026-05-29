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

app.get('/', async (req, res) => {
res.send('API funcionando ...');
});

const iniciarServidor = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión con PostgreSQL establecida correctamente.');
        await sequelize.sync(); 
        console.log('Base de datos sincronizada.');
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => {
            console.log(`API lista en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error al inicializar la base de datos:', error);
    }
};

iniciarServidor();