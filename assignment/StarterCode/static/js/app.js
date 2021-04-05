d3.select('#selDataset').on("change", getData)
console.log(testSubId);

var testSubId = 

var option = document.createElement('option');
option.text = '940'
option.value = 0
document.querySelector('#selDataset').add(option, 0)




buildPlot(testSubId)


function buildPlot() {

d3.json("samples.json").then((dataFile) => {
    console.log(dataFile.metadata)

    var i = testSubId

    var singleSamplesOtuIds = dataFile.samples[i].otu_ids.slice(0, 10)
    var singleSamplesOtuLabels = dataFile.samples[i].otu_labels.slice(0, 10)
    var singleSamplesSampleValues = dataFile.samples[i].sample_values.slice(0, 10)

    
    var textOTU = 'OTU'

    var textOtuIds = ' ';
    singleSamplesOtuIds.forEach(id => textOtuIds += 'OTU' + ' ' + id + ',' )        
    var labeledIds = textOtuIds.split(',', 10)

    var trace = {
        x: singleSamplesSampleValues,
        y: labeledIds,
        text: singleSamplesOtuLabels,
        type: "bar",
        orientation: "h"
    }

     var plotData = [trace]

    Plotly.newPlot("bar", plotData);

    })

}
buildPlot();


    // // console.log(singleMetadata)
    // // console.log(singleSamples)
    // // console.log(singleSamplesOtuIds)
    // // console.log(singleSamplesOtuLabels)
    // // console.log(singleSamplesSampleValues)
    
    // console.log(singleSamplesSampleValues)
    // console.log(singleSamplesOtuIds)
   
        // console.log(dataFile.metadata[0])
    // console.log(dataFile.samples[0])

    // var dataFor940 = dataFile.samples.slice(0,10)

    // console.log(dataFor940[0])

    
    // var singleMetadata = dataFile.metadata[0]
    // var singleSamples = dataFile.samples[0]

   
    // singleSamplesSampleValues.sort(function compareFunction(firstNum, secondNum) {
    //     return secondNum - firstNum;
    // });

    // console.log(singleSamplesSampleValues)

    // var singleSamplesSampleValuesTop10 = dataFile.samples[0].sample_values.slice(0, 10)

    // console.log(singleSamplesSampleValuesTop10);