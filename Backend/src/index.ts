import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata"
import { AppDataSource } from "./config/data-Sorce";

AppDataSource.initialize()
    .then(res => {
        console.log('conexion a la Database exitosa');  
        server.listen(PORT, () => {
            console.log(`escuchando el puerto ${PORT}`)
        })
    })
    
