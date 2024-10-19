import { Denuncia } from "../models/denuncia/denuncia.model.js";
import { Datos_Denuncia } from "../models/denuncia/datos_denuncia.model.js";
import { Denunciante } from "../models/denuncia/denunciante.model.js";
import { Detalle_Denuncia } from "../models/denuncia/detalle_denuncia.model.js";

//JSON enviado por el cliente con la estructura completa de la denuncia
export const integrar_denuncia = async function (denuncia){
    //Acceder a las partes de denuncia
    let encabezado = denuncia['denuncia']; // folio,contraseña
    let datos_denuncia = denuncia['datos_denuncia']; // empresa,pais,estado,num_centro
    let denunciante = denuncia['denunciante']; //nombre,correo,telefono
    let detalle_denuncia = denuncia['detalle_denuncia']; //detalle,fecha,status

    //Subir las partes a sus respectivas tablas

    //Verificar si ya existe una denuncia en la sucursal
    let res_datos_denuncia = await Datos_Denuncia.findOne({
        where:{
            empresa: datos_denuncia['empresa'],
            pais: datos_denuncia['pais'],
            estado: datos_denuncia['estado']
        }
    });

    //Si no existe la sucursal, se crea
    if(!res_datos_denuncia){
        res_datos_denuncia = await Datos_Denuncia.create({
            empresa: datos_denuncia['empresa'],
            pais: datos_denuncia['pais'],
            estado: datos_denuncia['estado']
        });
    }
    //Se relaciona la sucursal a la denuncia
    encabezado['datos_denuncia'] = res_datos_denuncia['id_datos_denuncia'];

    //Verificar si el cliente es anonimo o ya ha realizado otra denuncia
    //Si no es anonimo, verificar que exista o agregar uno nuevo y relacionarlos
    if(!(encabezado['denunciante'] == 1)){
        let res_denunciante = await Denunciante.findOne({
            where:{
                nombre:denunciante['nombre'],
                correo:denunciante['correo'],
                telefono:denunciante['telefono'],
            }
        });

        //Si no existe en registro, se crea
        if(!res_denunciante){
            res_denunciante = await Denunciante.create({
                nombre:denunciante['nombre'],
                correo:denunciante['correo'],
                telefono:denunciante['telefono'],
            });
        }

        //Se relaciona el denunciante a la denuncia
        denuncia['denunciante'] = res_denunciante['id_denunciante'];

        //Crear los detalles de la denuncia y relacionarlos
        const res_detalle_denuncia = await Detalle_Denuncia.create({
            descripcion: detalle_denuncia['descripcion'],
            fecha: detalle['fecha'],
            status: 1
        });

        encabezado['detalle_denuncia'] = res_detalle_denuncia['id_denuncia'];
    }

    //Devolvemos el encabezado de la denuncia ya relacionada a sus componentes
    return encabezado;

}