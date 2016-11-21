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
             hallo: function(){ 
                document.write(this.name);
             }
           };

document.write("Mijn favoriete auto is: " + auto.name + "<br>");
document.writeln("Mijn favoriete model is: " + auto.model + "<br>");
document.writeln("Mijn auto weegt: " + auto.weight + "<br>");
document.writeln("Mijn favoriete kleur is: " + auto.color + "<br>");
document.writeln("De motorinhoud is: " + auto.cc + "<br>");
auto.hallo();
console.debug(auto);
