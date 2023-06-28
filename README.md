-- 1.Miramos el archivo la cual vamos a insertar los datos.

-- 2.Debemos tener una carpeta backend la cual debera contener 3 archivos php,[conectar.php,controler.php,models.php]

-- 3.Empezamos a trabajar en la carpeta backend, en el archivo conectar.php 

-----------------------------------------------------------------------
  aqui para crear la conexion con el frondend 
   3.1 - Creamos una class llamada conectar que dentro va a tener:

||IMPORTANTE PUNTOS PARA TENER EN EN CUENTA ||
-mirar nombre de base de datos[debe estar en el phpmyadmin].
-mirar usuario y contraseña si estan correctas.

<?php
class Conectar{
    protected $db;
    protected function Conexion(){
        try {
            $conectar=$this->db=new PDO("mysql:local=localhost;dbname=alquitermis2","campus","campus2023");
            return $conectar;
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
}


    3.2 - creamos la validacion de los caracteres como {ñ} o tilde


public function set_name(){
    return $this->db->query("SET NAMES 'utf8'");
}

?>
--------------------------------------------------------------------------------------------------------------------------------------------------
-- 4.Despues de trabajar en [conectar.php], pasamos a models.php donde vamos a empezar a contruir las funciones que nos van a llamar esos datos.--
--------------------------------------------------------------------------------------------------------------------------------------------------

<?php

require_once("conectar.php");

//instanciamos la clase Conectar que esta en conectar.php

class Alquilar extends Conectar{
    public function get_clientes(){
        try {
            $Conectar=parent::Conexion();
            parent::set_name();
            $stm=$Conectar->prepare("SELECT * FROM constructoras");
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC);

        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function insert_clientes($id_constructora,$nombre_constructora,$nit_constructora,$nombre_representante,$email_contacto,$telefono_contacto){
        $Conectar=parent::Conexion();
        parent::set_name();
        $stm="INSERT INTO constructoras(id_constructora,nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto)VALUES(?,?,?,?,?,?)";
        $stm=$Conectar->prepare($stm);
        $stm->bindValue(1,$id_constructora);
        $stm->bindValue(2,$nombre_constructora);
        $stm->bindValue(3,$nit_constructora);
        $stm->bindValue(4,$nombre_representante);
        $stm->bindValue(5,$email_contacto);
        $stm->bindValue(6,$telefono_contacto);
        $stm->execute();
        return $stm->fetchAll(PDO::FETCH_ASSOC);
        
    }
}

?>

