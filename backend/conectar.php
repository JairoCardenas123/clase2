<?php

//para imprimir errores en ejecucion;

ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);

/*  aqui para crear la conexion con el frondend 
3.1 - Creamos una class llamada conectar que dentro va a tener:*/

class Conectar{
    protected $db;
    protected function Conexion(){
        try {
            $conectar=$this->db=new PDO("mysql:local=localhost;dbname=alquitermis2","campus","campus2023");
            return $conectar;
        } catch (Exception $e) {
            return $e -> getMessage();
        }
    }
    
    public function set_name(){
        return $this->db->query("SET NAME 'utf8'");
    }
}  
?>