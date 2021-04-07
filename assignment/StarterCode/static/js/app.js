//Add options to
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
        console.log(idValue)

    
        d3.json("samples.json").then((dataFile) => {
            console.log(dataFile)

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



// //Add options to
// // var option = document.createElement('option');
// // option.text = '940'
// // option.value = 0
// // document.querySelector('#selDataset').add(option, 0)

// // buildPlot(testSubId)

// // function buildPlot() 


// d3.json("samples.json").then((dataFile) => {
    
//     var i = 10
//     var singleSamplesOtuIds = dataFile.samples[i].otu_ids.slice(0, 10)
//     var singleSamplesOtuLabels = dataFile.samples[i].otu_labels.slice(0, 10)
//     var singleSamplesSampleValues = dataFile.samples[i].sample_values.slice(0, 10)
//     console.log(dataFile.samples)
//     // console.log(singleSamplesOtuIds)
   
//     var textOTU = 'OTU'
//     var textOtuIds = ' ';
//     singleSamplesOtuIds.forEach(id => textOtuIds += 'OTU' + ' ' + id + ',' )        
//     var labeledIds = textOtuIds.split(',', 10)

//     // d3.select('#selDataset').on("change", optionChanged)


//     // function optionChanged() {
//     //     var dropdownMenu = d3.select('#selDataset');
//     //     var dataset = dropdownMenu.property('value');
//     //     var data = []

//     // if (dataset == 0) {
//     //     dataset = testSubId
//     // }

//     var trace = {
//         x: singleSamplesSampleValues,
//         y: labeledIds,
//         text: singleSamplesOtuLabels,
//         type: "bar",
//         orientation: "h"
//     }

//     var plotData = [trace]

//     Plotly.newPlot("bar", plotData);

    
// })

// // buildPlot();
    }
