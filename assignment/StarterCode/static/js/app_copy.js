// function handleSubmit() {

//     d3.event.preventDefault();

    // var testSubId = d3.select("#selDataset").node().value;
    // console.log(testSubId);

function buildPlot(idValue) {

    d3.json("samples.json").then((dataFile) => {
        console.log(dataFile)
    
       i = idValue
       
        var nameSection = dataFile.names
        console.log(nameSection)

        var metadataSection = dataFile.metadata
        console.log(metadataSection)

        var samplesById = dataFile.samples.map(row => row)
        var sampleIdOtuId = samplesById[i].otu_ids
        console.log(sampleIdOtuId.slice(0,10))
        var sampleByIdSampleValues = samplesById[i].sample_values
        console.log(sampleByIdSampleValues)
        var sampleId  = samplesById[i].id
        console.log(sampleId)

        var trace = {
        type: "bar",
        orientation: "h",
        sampleID: sampleId,
        x: sampleByIdSampleValues.slice(0, 10),
        y: sampleIdOtuId.slice(0, 10)
        }
        var data = [trace];

        var layout = {
            title: `${sampleId} Top 10 Sample Ratings`,
            yaxis: {
                tickprefix: "OTU ",
                type: 'category',
                autorange: 'reversed'
            }

            
        }

        Plotly.newPlot("bar", data, layout);
    }
    )
}

 buildPlot(15)
