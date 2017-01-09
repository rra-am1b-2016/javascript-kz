<?php
   if (isset($_GET["id"]))
   {
      $id = $_GET["id"];
   }
   else
   {
      $id = 1;
   }

   $server_name = "localhost";
   $user_name = "root";
   $password = "";
   $db_name = "am1b_2016_ajax";

   $conn = mysqli_connect($server_name, $user_name, $password, $db_name);

   $query = "SELECT * FROM `users` WHERE `id` = ".$id;

   $result = mysqli_query($conn, $query);

   $record = mysqli_fetch_array($result, MYSQLI_ASSOC);

   echo json_encode($record);  
?>