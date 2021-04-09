function handleSubmit() {

    d3.event.preventDefault();
}
   
    d3.selectAll("body").on("change", optionChanged);
    
    function optionChanged() {
        var dropdownMenu = d3.selectAll("#selDataset").node();
        var dropdownMenuID = dropdownMenu.id;
        var idValue = dropdownMenu.value;


        d3.json("samples.json").then((dataFile) => {
                var i = idValue
                var demoData = dataFile.metadata
                var demoDataID = dataFile.metadata[i].id
                var demoDataEthnicity = dataFile.metadata[i].ethnicity
                var demoDataGender = dataFile.metadata[i].gender
                var demoDataAge = dataFile.metadata[i].age
                var demoDataLocation = dataFile.metadata[i].location
                var demoDataBbType = dataFile.metadata[i].bbtype
                var demoDataWFreq = dataFile.metadata[i].wfreq
                var displayDemoData = dataFile.metadata

    const panelFiller =  ( `id: ${demoDataID} <br>
                                ethnicity: ${demoDataEthnicity} <br>
                                gender: ${demoDataGender} <br> 
                                age: ${demoDataAge} <br>
                                location: ${demoDataLocation} <br>
                                bbtype: ${demoDataBbType} <br>
                                wfreq: ${demoDataWFreq}`         
                            )  
        document.getElementById("sample-metadata").innerHTML = panelFiller           
       })


    function buildPlot() {

        d3.json("samples.json").then((dataFile) => {
            console.log(dataFile)

            var i = idValue       
            var nameSection = dataFile.names
            var metadataSection = dataFile.metadata
            var samplesById = dataFile.samples.map(row => row)
            var sampleIdOtuId = samplesById[i].otu_ids
            var sampleIdOtuLabel = samplesById[i].otu_labels
            var sampleByIdSampleValues = samplesById[i].sample_values
            var sampleId  = samplesById[i].id
            var allIds = samplesById.id      

            var trace1 = {
            type: "bar",
            orientation: "h",
            sampleID: sampleId,
            x: sampleByIdSampleValues.slice(0, 10),
            y: sampleIdOtuId.slice(0, 10),
            text: sampleIdOtuLabel
            }

            var data = [trace1];
                
            
            var layout1 = {
                yaxis: {
                    tickprefix: "OTU ",
                    type: 'category',
                    autorange: 'reversed'
            }
                
            }
            var trace2 = {
                    x: sampleIdOtuId,
                    y: sampleByIdSampleValues,
                    mode: 'markers',
                    text: sampleIdOtuLabel,
                    marker: {
                        color: sampleIdOtuId,
                        size: sampleByIdSampleValues
                    }
            }
            
            var bubbleData = [trace2]
                
            Plotly.newPlot("bar", data, layout1);
            Plotly.newPlot("bubble", bubbleData)
            
        })
        }

buildPlot()

}


