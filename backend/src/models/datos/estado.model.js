import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

//tabla estados

export const Estado = sequelize.define('estados', {
    id_estado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    timestamps: false
});