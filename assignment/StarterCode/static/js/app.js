d3.json("samples.json").then((dataFile) => {

    // console.log(dataFile)

    // console.log(dataFile.samples[0])

    data = dataFile.samples

    console.log(data[0]["id"])

    var trace1 = {

        x: data.map(row => row.sample_values),
        y: data.map(row => row.otu_ids),
        text: data.map(row => row.otu_lables),
        name: "Samples",
        type: "bar",
        orientation: "h"
    };

    var plotData = [trace1];

    console.log(plotData)
    
    Plotly.newPlot("bar", data);

})