<?php
   if (isset($_GET["id"]))
   {
      $id = $_GET["id"];
   }
   else
   {
      $id = 1;
   }

   $server_name = "	mysql.hostinger.nl";
   $user_name = "u533841462_rra";
   $password = "Ezekkthoes!1";
   $db_name = "u533841462_rra";

   $conn = mysqli_connect($server_name, $user_name, $password, $db_name);

   $query = "SELECT * FROM `users` WHERE `id` = ".$id;

   $result = mysqli_query($conn, $query);

   $record = mysqli_fetch_array($result, MYSQLI_ASSOC);

   echo json_encode($record);  
?>