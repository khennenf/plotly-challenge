//Add options to
var option = document.createElement('option');
option.text = '941'
option.value = 1
document.querySelector('#selDataset').add(option, 0)

var option = document.createElement('option');
option.text = '940'
option.value = 0
document.querySelector('#selDataset').add(option, 0)




function handleSubmit() {

    d3.event.preventDefault();
}
    // var testSubId = d3.select("#selDataset").node().value;
    // console.log(testSubId);

    d3.selectAll("body").on("change", optionChanged);

    function optionChanged() {
        var dropdownMenu = d3.selectAll("#selDataset").node();
    
        var dropdownMenuID = dropdownMenu.id;
    
        var idValue = dropdownMenu.value;
        // console.log(idValue)


function buildPlot() {

    d3.json("samples.json").then((dataFile) => {
        console.log(dataFile)

        var i = idValue
       
        var nameSection = dataFile.names
        // console.log(nameSection)

        var metadataSection = dataFile.metadata
        // console.log(metadataSection)

        var samplesById = dataFile.samples.map(row => row)
        var sampleIdOtuId = samplesById[i].otu_ids
        // console.log(sampleIdOtuId.slice(0,10))
        var sampleByIdSampleValues = samplesById[i].sample_values
        // console.log(sampleByIdSampleValues)
        var sampleId  = samplesById[i].id
        // console.log(sampleId)
        var allIds = samplesById.id
        // console.log(allIds)

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

buildPlot()

console.log(data)

}


