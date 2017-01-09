document.getElementsByTagName("button")[0].onclick = function(){
   var firstname = document.getElementsByName("firstname")[0].value;
   var infix = document.getElementsByName("infix")[0].value;
   var lastname = document.getElementsByName("lastname")[0].value;

   var xmlhttp = new XMLHttpRequest();

   xmlhttp.onreadystatechange = function(){
      if ( xmlhttp.readyState == 4 && xmlhttp.status == 200)
      {
         var jsObj = JSON.parse(xmlhttp.responseText); 
         document.getElementsByTagName("p")[0].innerHTML = jsObj.succesmelding;
      }
   }

   xmlhttp.open("GET", "http://localhost/2016-2017/am1b/javascript-kz/data_insert.php?firstname=" + firstname 
                        + "&infix=" + infix
                        + "&lastname=" + lastname, true);
   xmlhttp.send();

}