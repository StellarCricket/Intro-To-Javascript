// from data.js
var tableData = data;
console.log(tableData);

var tbody = d3.select("tbody");

tableData.forEach(function(addSighting){
    console.log(addSighting);
    var row = tbody.append("tr");

    Object.entries(addSighting).forEach(function([key,value]){
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });
    
});

var button = d3.select("#filter-btn");

button.on("click", function(){
    var newData = tableData;
    var inputField = d3.select("#datetime");
    var inputDate = inputField.property("value"); 
    newData = newData.filter(row => row.datetime === inputDate);
    var tbody = d3.select("tbody");
    tbody.html("")
    newData.forEach(function(baNana){
        var row = tbody.append("tr");
         Object.entries(baNana).forEach(function([key,value]){
        var cell = row.append("td");
        cell.text(value);
            })
        })
    });
    
    
    
    
    
