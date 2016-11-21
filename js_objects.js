// Dit is een external javascript bestand.
alert("Hallo dit is een external javascript bestand");

var auto = ["Mercedes", "SLK", 2000, "roze"];

//document.write(auto[0]);


// Gelukkig bestaan er in javascript ook objecten

var auto = { 
             name: "Mercedes",
             model: "SLK",
             weight:2200, 
             color:"blue", 
             cc: "5L", 
             carInfo: function(name){ 
                document.write("Mijn naam is: " + name + "<br>");
                document.write("++++++++++++++++++++++++++++++++++++++++++++++++++++++++<br>");
                document.write("Mijn favoriete auto is: " + this.name + "<br>");
                document.writeln("Mijn favoriete model is: " + this.model + "<br>");
                document.writeln("Mijn auto weegt: " + this.weight + "<br>");
                document.writeln("Mijn favoriete kleur is: " + this.color + "<br>");
                document.writeln("De motorinhoud is: " + this.cc + "<br>");
                document.write("++++++++++++++++++++++++++++++++++++++++++++++++++++++++<br>");
           
             }
           };

auto.cylinders = 4;

auto.showColor = function()
{
   document.write("De kleur van de auto is: " + this.color + "<br>");
}
auto.carInfo("Bert van Dungen");
document.write("Het aantal cylinders is: " + auto.cylinders + "<br>");
auto.showColor()
console.debug(auto);

// Maak op deze pagina een object genaamd persoon die de volgende properties heeft:
/* firstname, lastname, age, shoesize, length, weight 
   en hij heeft een method die al deze property waarden weergeeft. gebruik nu return in de method. */

var person = {
              firstname: "Henk",
              lastname:"de Vries",
              age: 46, 
              shoesize:45, 
              length: "1.8m", 
              weight: "150kg",
              showInfo: function() {
                 var output = "--------------------------------------------------------------------<br>"; 
                     output += "Mijn naam is: " + this.firstname + " " + this.lastname + "<br>";
                     output += "Mijn leeftijd: " + this.age + "<br>";
                     output += "Mijn schoenmaat: " + this.shoesize + "<br>";
                     output += "Mijn lengte: " + this.length + "<br>";
                     output += "Mijn gewicht: " + this.weight + "<br>";
                     output += "--------------------------------------------------------------------<br>"; 
                     
                     return output;
              }
};

document.write(person.showInfo());

// Dit is een andere manier om een object te definieren
var zoogdier = new Object();
zoogdier.aantalTanden = 4;
zoogdier.vacht = "Haar";
zoogdier.aantalPoten = 5;
zoogdier.showInfo = function(){
   var output = "Ik heb " + this.vacht + " en " + this.aantalTanden + " tanden<br>";
   return output;
}

document.write(zoogdier.showInfo());


var school = function(name, address, schooltype, educationTime){
   this.name = name;
   this.address = address;
   this.schooltype = schooltype;
   this.educationTime = educationTime;
   this.showInfo = function(){
      var output =  "Ik zit op: " + school1.name + "<br>";
          output += "Het adres is: " + school1.address + "<br>";
          output += "Het schooltye is: " + school1.schooltype + "<br>";
      return output;
   }
}

school1 = new school("MBO Utrecht", "Columbuslaan 540", "MBO", 4);

school.prototype.date = function()
{
   return Date();
}

document.write("Ik zit op: " + school1.showInfo() + "<br>");
document.write("De datum is: " + school1.date());




