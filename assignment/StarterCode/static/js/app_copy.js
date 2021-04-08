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


    
    d3.selectAll("body").on("change", optionChanged);

    
    function optionChanged() {
        var dropdownMenu = d3.selectAll("#selDataset").node();
        var dropdownMenuID = dropdownMenu.id;
        var idValue = dropdownMenu.value;



        d3.json("samples.json").then((dataFile) => {
            console.log(dataFile)

    //----------------------

     //----------------------

            var i = idValue

            var demoData = dataFile.metadata
            console.log(demoData)
            var demoDataID = dataFile.metadata[i].id
            console.log(demoDataID)
            var demoDataEthnicity = dataFile.metadata[i].ethnicity
            console.log(demoDataEthnicity)
            var demoDataGender = dataFile.metadata[i].gender
            console.log(demoDataGender)
            var demoDataAge = dataFile.metadata[i].age
            console.log(demoDataAge)
            var demoDataLocation = dataFile.metadata[i].location
            console.log(demoDataLocation)
            var demoDataBbType = dataFile.metadata[i].bbtype
            console.log(demoDataBbType)
            var demoDataWFreq = dataFile.metadata[i].wfreq
            console.log(demoDataWFreq)

            var displayDemoData = dataFile.metadata
            console.log(displayDemoData[i])

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
        var sampleByIdSampleValues = samplesById[i].sample_values
        var sampleId  = samplesById[i].id
        var allIds = samplesById.id      

        var trace1 = {
        type: "bar",
        orientation: "h",
        sampleID: sampleId,
        x: sampleByIdSampleValues.slice(0, 10),
        y: sampleIdOtuId.slice(0, 10)
        }

        var data = [trace1];
        
      
        var layout1 = {
            title: `${sampleId} Top 10 Sample Ratings`,
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
            text: sampleId,
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


