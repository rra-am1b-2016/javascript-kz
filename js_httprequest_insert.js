document.getElementsByTagName("button")[0].onclick = function(){
   var firstname = document.getElementsByName("firstname")[0].value;
   var infix = document.getElementsByName("infix")[0].value;
   var lastname = document.getElementsByName("lastname")[0].value;

   alert("De ingevulde naam is: " + firstname + infix + lastname); 


   var xmlhttp = new XMLHttpRequest();

   xmlhttp.open("GET", "http://localhost/2016-2017/am1b/javascript-kz/data_insert.php?firstname=" + firstname + "&infix=", true);
   xmlhttp.send();


}