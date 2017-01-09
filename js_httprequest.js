var xmlHttp = new XMLHttpRequest();

xmlHttp.onreadystatechange = function(){
   if ( xmlHttp.readyState == 4 && xmlHttp.status == 200)
   {
      var jsObj = JSON.parse(xmlHttp.responseText);    //console.debug(jsObj); //alert(jsObj.firstname);
      document.getElementsByTagName("p")[0].innerHTML = jsObj.firstname + " " +
                                                        jsObj.infix + " " +
                                                        jsObj.lastname;
   }
}

document.getElementsByTagName("button")[0].onclick = function(){
   xmlHttp.open("GET", "http://localhost/2016-2017/am1b/javascript-kz/data.php?id=6", true);
   xmlHttp.send();
}

var divs = document.getElementsByTagName("div");

for ( var i = 0; i < divs.length; i++)
{
   divs[i].onmouseenter = function(){
      xmlHttp.open("GET", "http://localhost/2016-2017/am1b/javascript-kz/data.php?id=" + this.innerHTML, true);
      xmlHttp.send();
   }
}


