import { Administrador } from "../../models/usuarios/admin.model.js";
import { Denuncia } from "../../models/denuncia/denuncia.model.js";

export const login = async (req, res)=>{
    const { usuario, password } = req.body;
    try{
        const compareAdministrador = await Administrador.findOne({
            where:{
                usuario,
                password
            }
        });
        
        if(!compareAdministrador){
            return res.status(401).json({message:"Las credenciales no son validas."})
        }

        //
        



    }catch(error){
        return res.status(500).json({message:error.message});
    }
    



}