// d3.json("samples.json").then((dataFile) => {
//     console.log(dataFile)})

function buildPlot(){
    d3.json("samples.json").then((dataFile) => {
        var id = dataFile.samples.id;
        var otu_ids = dataFile.samples.otu_ids;
        var sample_values = dataFile.samples.sample_values;
        var otu_lables = dataFile.samples.otu_lables
    
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: id,
        x: otu_ids,
        y: sample_values,
        text: otu_lables
    }

var data = [trace1]

console.log(data)

Plotly.newPlot("bar", data);

});
}

buildPlot(940);