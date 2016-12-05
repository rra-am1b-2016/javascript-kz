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
      var output =  "Ik zit op: " + this.name + "<br>";
          output += "Het adres is: " + this.address + "<br>";
          output += "Het schooltype is: " + this.schooltype + "<br>";
      return output;
   }
}

var school1 = new school("MBO Utrecht", "Columbuslaan 540", "MBO", 4);

school.prototype.date = function()
{
   return Date();
}

document.write("Ik zit op: " + school1.showInfo() + "<br>");
document.write("De datum is: " + school1.date());


var rapport = function(name, webdev, gamedev, ned)
{
    if ( ned === undefined)
    {
        this.ned = "Nog geen cijfer toegevoegd";
    }
    else
    {
        this.ned = ned;
    }
    this.name = name;
    this.webdev = webdev;
    this.gamedev = gamedev;
    this.showProps = function()
    {
        var output = "<br>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++<br>";
            output += "Mijn naam is: " + this.name + "<br>";
            output += "Mijn cijfer voor webdevelopment is: " + this.webdev + "<br>";
            output += "Mijn cijfer voor gamedevelopment is: " + this.gamedev + "<br>";
            output += "Mijn cijfer voor Nederlands is: " + this.ned + "<br>";
            output += "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++<br>";
        return output;            
    }   
} 

var rapport1 = new rapport("Arjan de Ruijter", 3.5, 8.1, 2.1);
var rapport2 = new rapport("", 9.8, 2.2, 2.3);
document.write(rapport1.showProps());
document.write(rapport2.showProps());

// Maak een prototype met een verzameling gegeven die je zelf interessant vindt.
// Minimaal 3 argumenten voor het prototype.
// Maak een prototype van de nummer 1 t/m 3 van de Formule 1 over de jaren 2010 t/m 2016

formuleI = function(year, first, second, third, constructorsTitle)
{
    this.year = year;
    this.first = first;
    this.second = second;
    this.third = third;
    this.constructorsTitle = constructorsTitle;
    this.showData = function(){
        var output = "<br>-----------------------<br>";
            output += "uitslag WK: " + this.year + "<br>";
            output += "-----------------------<br>";            
            output += "Nummer 1: " + this.first + "<br>";
            output += "Nummer 2: " + this.second + "<br>";
            output += "Nummer 3: " + this.third + "<br>";
            output += "Constructeurs titel: " + this.constructorsTitle + "<br>";
            output += "-----------------------<br>";
            return output;
    }
}

var Y_2010 = new formuleI("2010", "Vettel", "Alonso", "Webber", "Ferrari");
var Y_2011 = new formuleI("2011", "Vettel", "Button", "Webber", "Ferrari");
var Y_2012 = new formuleI("2012", "Vettel", "Alonso", "Raikkonen", "Ferrari");
var Y_2013 = new formuleI("2013", "Vettel", "Alonso", "Webber", "Ferrari");
var Y_2014 = new formuleI("2014", "Hamilton", "Rosberg", "Ricciardo", "Mercedes");
var Y_2015 = new formuleI("2015", "Hamilton", "Rosberg", "Vettel", "Mercedes");
var Y_2016 = new formuleI("2016", "Rosberg", "Hamilton", "Vettel", "Mercedes");
document.write(Y_2010.showData());
document.write(Y_2011.showData());
document.write(Y_2012.showData());
document.write(Y_2013.showData());
document.write(Y_2014.showData());
document.write(Y_2015.showData());
document.write(Y_2016.showData());





