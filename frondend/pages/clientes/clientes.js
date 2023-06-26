import { getClientes } from "./API.js";

addEventListener('DOMContentLoaded',()=>{
    cargaClientes();
})

async function cargaClientes(){
    const clientes = await getClientes();
    console.log(clientes);
    const tablaClientes = document.querySelector("#datosClientes")
    clientes.forEach(element=>{
        const {id_constructora,nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto} = element
        tablaClientes.innerHTML +=`
                          
        <tr>
        <th scope="row">${id_constructora}</th>
        <td>${nombre_representante}</td>
        <td>${nit_constructora}</td>
        <td>${nombre_constructora}</td>
        <td>${email_contacto}</td>
        <td>${telefono_contacto}</td>
        
      </tr>
      `
    })
}
