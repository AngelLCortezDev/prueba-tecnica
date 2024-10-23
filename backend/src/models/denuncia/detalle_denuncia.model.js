import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import { Denuncia } from "../denuncia/denuncia.model.js";

//tablas detalles_denuncias

export const Detalle_Denuncia = sequelize.define('detalles_denuncias',{
    id_detalle_denuncia:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    status:{
        type:DataTypes.SMALLINT,
        allowNull: false
    }
},{
    timestamps: false
});

//Relaciones
//Una denuncia tiene un conjunto de detalles de denuncia
Detalle_Denuncia.hasOne(Denuncia,{
    foreignKey: 'detalle_denuncia'
});
//Un detalle denuncia pertenece a una denuncia\
Denuncia.belongsTo(Detalle_Denuncia,{
    foreignKey: 'detalle_denuncia',
    as: 'fk_detalle_denuncia'
});
