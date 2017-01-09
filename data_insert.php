<?php
   $server_name = "localhost";
   $user_name = "root";
   $password = "";
   $db_name = "am1b_2016_ajax";

   $conn = mysqli_connect($server_name, $user_name, $password, $db_name);

   $query = "INSERT INTO `users` (`id`, 
                                  `firstname`,
                                  `infix`,
                                  `lastname`)
             VALUES              (NULL,
                                  '".$_GET["firstname"]."',
                                  'de',
                                  'Bakker')";

   $result = mysqli_query($conn, $query);
?>