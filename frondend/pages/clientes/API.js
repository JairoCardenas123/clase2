const urlClientes = "http://localhost/ArTeM02-050/clase2/backend/controler.php?op=getAll";

export const getClientes = async()=>{
    try {
        const clientes = await fetch(urlClientes);
        const datosClientes = await clientes.json();
        return datosClientes;
    } catch (error) {
        console.log(error);
    }
}