import { Datos_Denuncia } from "../models/denuncia/datos_denuncia.model.js";
import { Denunciante } from "../models/denuncia/denunciante.model.js";
import { Detalle_Denuncia } from "../models/denuncia/detalle_denuncia.model.js";

//JSON enviado por el cliente con la estructura completa de la denuncia
export const integrar_denuncia = async function (denuncia){
    //Acceder a las partes de denuncia
    let folio = denuncia['folio']; // folio
    let password = denuncia['password']//contraseña
    let datos_denuncia = denuncia['datos_denuncia']; // empresa,pais,estado,num_centro
    let denunciante = denuncia['denunciante']; //nombre,correo,telefono
    let detalle_denuncia = denuncia['detalle_denuncia']; //detalle,fecha,status

    //inicializar la estructura de la denuncia a devolver
    const integratedDenuncia = {
        folio: folio,
        password: password,
        datos_denuncia: datos_denuncia.id_datos_denuncia,
        denunciante: denunciante.id_denunciante,
        detalle_denuncia: detalle_denuncia.id_detalle_denuncia
    }

    //Subir las partes a sus respectivas tablas

    //datos_denuncia
    //Verificar si ya existe una denuncia en la sucursal
    let res_datos_denuncia = await Datos_Denuncia.findOne({
        where:{
            empresa: datos_denuncia['empresa'],
            pais: datos_denuncia['pais'],
            estado: datos_denuncia['estado'],
            num_centro: datos_denuncia['num_centro']
        }
    });

    //Si no existe la sucursal, se crea
    if(!res_datos_denuncia){
        res_datos_denuncia = await Datos_Denuncia.create({
            empresa: datos_denuncia['empresa'],
            pais: datos_denuncia['pais'],
            estado: datos_denuncia['estado'],
            num_centro: datos_denuncia['num_centro']
        });
    }
    //Se relaciona la sucursal a la denuncia
    integratedDenuncia['datos_denuncia'] = res_datos_denuncia['id_datos_denuncia'];

    //denunciante
    //Verificar si el cliente es anonimo o ya ha realizado otra denuncia
    //Si no es anonimo, verificar que exista o agregar uno nuevo y relacionarlos
    if(!(denunciante.id_denunciante == 1)){
        //Buscamos si existe el denunciante
        let res_denunciante = await Denunciante.findOne({
            where:{
                nombre:denunciante['nombre'],
                correo:denunciante['correo'],
                telefono:denunciante['telefono'],
            }
        });

        //Si no existe el registro, se crea
        if(!res_denunciante){
            res_denunciante = await Denunciante.create({
                nombre:denunciante['nombre'],
                correo:denunciante['correo'],
                telefono:denunciante['telefono'],
            });
        }

        //Se relaciona el denunciante a la denuncia
        integratedDenuncia['denunciante'] = res_denunciante['id_denunciante'];
    }else{

    }

    //detalle_denuncia
    //Crear los detalles de la denuncia y relacionarlos
    const res_detalle_denuncia = await Detalle_Denuncia.create({
        descripcion: detalle_denuncia['descripcion'],
        fecha: detalle_denuncia['fecha'],
        status: 1
    });

    integratedDenuncia['detalle_denuncia'] = res_detalle_denuncia['id_detalle_denuncia'];

    //Devolvemos el encabezado de la denuncia ya relacionada a sus componentes
    return integratedDenuncia;

}