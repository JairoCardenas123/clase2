import { getClientes } from "./API.js";

addEventListener('DOMContentLoaded',()=>{
    cargaClientes();
})

async function cargaClientes(){
    const clientes = await getClientes();
    console.log(clientes);
    const tablaClientes = document.querySelector("#datosClientes")
}
