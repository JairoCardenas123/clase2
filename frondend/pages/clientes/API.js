const urlClientes = "http://localhost/ArTeM02-050/clase2/backend/controler.php?op=getAll";
const urlNuevoCliente = "http://localhost/ArTeM02-050/clase2/backend/controler.php?op=insert"

export const getClientes = async()=>{
    try {
        const clientes = await fetch(urlClientes);
        const datosClientes = await clientes.json();
        return datosClientes;
    } catch (error) {
        console.log(error);
    }
}

export const nuevoCliente = async(registro)=>{
    try {
        await fetch(urlNuevoCliente,{
            method:"POST",
            body:JSON.stringify(registro),
            headers:{
                'Content-Type':'application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
}