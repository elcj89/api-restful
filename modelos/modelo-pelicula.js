const { DataTypes } = require('sequelize');
const sequelize = require('../baseDatos/db.js');

const Pelicula = sequelize.define('Pelicula',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo:{
        type: DataTypes.STRING
    },
    duracion:{
        type: DataTypes.INTEGER
    },
    genero:{
        type: DataTypes.STRING
    }
});

module.exports = Pelicula;