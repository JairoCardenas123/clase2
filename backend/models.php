<?php

//para imprimir errores en ejecucion;

ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);
require_once("conectar.php");

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
}
?>
