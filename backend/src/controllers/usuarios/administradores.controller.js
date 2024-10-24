import { autenticar_admin } from "../../services/auth/auth_admin.service.js";

export const loginAdmin = async (req, res)=>{
    try{
        const authAdmin = await autenticar_admin(req.body);
        if(authAdmin){
            res.header('auth-token' ,authAdmin[1]).json(authAdmin[0]);
        }else{
            return res.status(401).json({message:"Credenciales invalidas."});
        }
    }catch(error){
        return res.status(500).json({message:error});
    }
}