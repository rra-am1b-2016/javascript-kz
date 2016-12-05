//alert("Dit is javascript in een extern bestand");
// Hieronder staat een JSON (Javascript Object Notation) string \

var credentials = '{"firstname": "Arjan",' +
                   '"infix": "de",' +
                   '"lastname": "Ruijter", ' +
                   '"haarkleur": "zwart", ' +
                   '"schoenmaat": 10.5, ' + 
                   '"favoColors": ["yellow", "green", "red"], ' +    // Ook array's zijn mogelijk
                   '"auto": [{"merk": "Ford", "Type": "mondeo", "Kenteken": "51-HB-ZP"}, ' + 
                            '{"merk": "Citroen", "Type": "SAXO 1.5D", "Kenteken": "23-TP-QW"}, ' +
                            '{"merk": "Daf", "Type": "variomatic", "Kenteken": "52-IC-AQ"}], ' +  //ook objecten
                   '"married": true }';  // en booleans

console.log(credentials);

// Maak een JSON string die haarkleur en schoenmaat bevat en geef deze weer op js_json.html
//var personelInfo = '{"haarkleur": "zwart", "schoenmaat": 10.5}';

var jsObject = JSON.parse(credentials);

//var jsPersonelInfoObject = JSON.parse(personelInfo);
jsObject.test();