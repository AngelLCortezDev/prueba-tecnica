import { Denuncia } from "../../models/denuncia/denuncia.model.js";
import { compare } from 'bcrypt';


export const autenticar_folio = async (denuncia) => {
    try {
        //Obtener credenciales ingresadas por el usuario (folio, password -> encriptada por el cliente)
        const { folio, password } = denuncia;
        //Buscar la denuncia con coincidencia en folio
        const storedDenuncia = await Denuncia.findOne({
            where:{
                folio
            }
        });
        //Regresar nulo si no existe un registro que coincida en folio
        if(!storedDenuncia){
            return null;
        }else{
            //Hacer la comparación de contraseña guardada y la ingresada
            console.log(storedDenuncia['password']);
            console.log(password);
            const resultado = await compare(password, storedDenuncia['password']);
            console.log(resultado);
            if (resultado){
                return storedDenuncia;
            }else{
                return null;
            }
        }

    } catch (error) {
        return error;
    }
}

export const autorizar_folio = async (token) => {
    
}

