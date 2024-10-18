import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import { Datos_Denuncia } from "../denuncia/datos_denuncia.model.js";

//tabla denuncias

export const Denuncia = sequelize.define('denuncias',{
    folio:{
        type: DataTypes.STRING(5),
        primaryKey:true
    },
    password:{
        type:DataTypes.STRING(60),
        allowNull:false
    }
},{
    timestamps:false
});

//Relaciones

//Datos_Denuncia(Información sucursal) puede tener muchas denuncias
Datos_Denuncia.hasMany(Denuncia,{
    foreignKey: 'datos_denuncia',
    sourceKey: 'id_datos_denuncia'
});