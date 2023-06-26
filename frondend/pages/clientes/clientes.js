import { getClientes,nuevoCliente } from "./API.js";

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

const formulario = document.getElementById('registrar')

formulario.addEventListener('submit',nuevoClientes)

function nuevoClientes(e){
    e.preventDefault();
    const id_constructora=document.getElementById("id").value
    const nombre_constructora=document.getElementById("constructora").value
    const nit_constructora=document.getElementById("nit").value
    const nombre_representante=document.getElementById("representante").value
    const email_contacto=document.getElementById("email").value
    const telefono_contacto=document.getElementById("tel").value

    const registro ={
        id_constructora,
        nombre_constructora,
        nit_constructora,
        nombre_representante,
        email_contacto,
        telefono_contacto
    }

    console.log(registro);
}