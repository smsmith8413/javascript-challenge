// from data.js
var tableData = data;
// Get a reference to the table body
var tbody = d3.select("tbody");
// YOUR CODE HERE!
// // Step 1: Loop Through `data` and console.log each siting
tableData.forEach(function(ufoSiting) {
//   console.log(ufoSiting);
});

//Use d3 to update each cell's text with data
function createTable(data){
    tbody.html("");
    data.forEach(function(ufoSiting) {
    // console.log(ufoSiting);
    var row = tbody.append("tr");
    Object.entries(ufoSiting).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
    });
}

// Select the button

function handleClick (){

var button = d3.select("#filter-btn");
var inputElement = d3.select("#datetime");
var inputValue = inputElement.property("value");
let filteredData = tableData;
button.on("click", handleClick) 

 //   console.log("INPUT VALUE:",inputValue);
//   console.log(tableData);
if(inputValue) {
  filteredData = tableData.filter(siting => siting.datetime === inputValue);
}
//   console.log(filteredData);
// use function to filter data
  createTable(filteredData);
};
// load filtered data on buttonclick

d3.selectAll("#filter-btn").on("click", handleClick);
//   console.log(filteredData);

// load original table
createTable(tableData)

