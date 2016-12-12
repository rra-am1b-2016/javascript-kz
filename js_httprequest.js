// Bestand en koppelingen worden opnieuw geladen en niet uit de cache
window.history.forward(1);

var xmlHttpRequest = new XMLHttpRequest();

xmlHttpRequest.onreadystatechange = function(){
   if ( xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200)
   {
      //alert(xmlHttpRequest.responseText);
      //var jsonObj = JSON.parse(xml);
   }
}

xmlHttpRequest.open("GET", "http://localhost/2016-2017/am1b/javascript-kz/data.php", true);

document.getElementsByTagName("button")[0].onclick = function(){
   xmlHttpRequest.send();
}


