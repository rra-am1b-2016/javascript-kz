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
                                  '".$_GET["infix"]."',
                                  '".$_GET["lastname"]."')";

   $result = mysqli_query($conn, $query);

   // Maak een JSON string met daarin een variabele met een succesmeld waarde.

   echo '{"succesmelding": "Het opslaan is gelukt hoor!"}';
?>