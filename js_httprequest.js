var xmlHttp = new XMLHttpRequest();

xmlHttp.onreadystatechange = function(){
   if ( xmlHttp.readyState == 4 && xmlHttp.status == 200)
   {
      var jsObj = JSON.parse(xmlHttp.responseText);
      //console.debug(jsObj);
      //alert(jsObj.firstname);
      document.getElementsByTagName("p")[0].innerHTML = jsObj.firstname;

   }
}

xmlHttp.open("GET", "http://localhost/2016-2017/am1b/javascript-kz/data.php", true);

document.getElementsByTagName("button")[0].onclick = function(){
   xmlHttp.send();
}


