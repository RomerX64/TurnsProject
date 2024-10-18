import { Credentialmodel, Usermodel } from "../config/data-Sorce"
import { CredentialDto } from "../dto/CredentialDto"




export const createCredencial = async(DataCrearCredential:CredentialDto) =>{
    const credentials = await Credentialmodel.findOneBy({
        username: DataCrearCredential.username
    })

    if(!credentials){
        const credential = await Credentialmodel.create(DataCrearCredential)
        await Credentialmodel.save(credential)
        return credential;
    }else{
        throw new Error(`El usuario ${DataCrearCredential.username} no esta disponible`);

    }
    
}

export const verificacion = async (DataCrearCredential:CredentialDto) => {
    const username = DataCrearCredential.username;
    const credential = await Credentialmodel.findOne({where: {username}});

    if(credential){
        if(credential.password === DataCrearCredential.password){
            return credential.id
        }else{
            throw new Error('Contraseña o Usuario incorrecto')
        }
    }else{
        throw new Error('Usuario inexistente');
    }


}