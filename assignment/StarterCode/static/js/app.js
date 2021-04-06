

var e = document.getElementById("elementId");

var value = e.options[e.selectedIndex].value;

var text = e.options[e.selectedIndex].text;



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
