//Definición del modelo de la tabla de Videos mediante //sequelize.define 

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    	'Videosrock',
      { etiquetaVideorock: DataTypes.STRING,
        direccionVideorock: DataTypes.STRING,
	etiquetaVideo1rock: DataTypes.STRING,
        FECHArock: DataTypes.STRING
      }
    );
  }
