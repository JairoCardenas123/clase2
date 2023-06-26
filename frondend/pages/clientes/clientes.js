import { getClientes } from "./API.js";

addEventListener('DOMContentLoaded',()=>{
    cargaClientes();
})

async function cargaClientes(){
    const clientes = await getClientes();
    console.log(clientes);
    const tablaClientes = document.querySelector("#datosClientes")
    clientes.forEach(element=>{
        tablaClientes.innerHTML =`
                          
        <tr>
        <th scope="row">id</th>
        <td>Constructora</td>
        <td>NombreRespresentante</td>
        <td>gmail</td>
        <td>telefono</td>
      </tr>
      `
    })
}
