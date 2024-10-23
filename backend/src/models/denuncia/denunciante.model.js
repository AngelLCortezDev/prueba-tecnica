import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import { Denuncia } from "./denuncia.model.js";

//tabla denunciantes

export const Denunciante = sequelize.define('denunciantes',{
    id_denunciante:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull: false
    },
    correo:{
        type:DataTypes.STRING,
        allowNull: false
    },
    telefono:{
        type:DataTypes.STRING(10),
        allowNull:false
    }
},{
    timestamps:false
});

//Relaciones
//Un denunciante puede hacer muchas denuncias
Denunciante.hasMany(Denuncia,{
    foreignKey:'denunciante'
});
//Una denuncia fue hecha por un denunciante
Denuncia.belongsTo(Denunciante,{
    foreignKey: 'denunciante',
    as: 'fk_id_denunciante'
});