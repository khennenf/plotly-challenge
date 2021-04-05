d3.json("samples.json").then((dataFile) => {
    // console.log(dataFile.metadata[0])
    // console.log(dataFile.samples[0])

    // var dataFor940 = dataFile.samples.slice(0,10)

    // console.log(dataFor940[0])

 


    


    // var singleMetadata = dataFile.metadata[0]
    // var singleSamples = dataFile.samples[0]
    var singleSamplesOtuIds = dataFile.samples[0].otu_ids.slice(0, 10)
    var singleSamplesOtuLabels = dataFile.samples[0].otu_labels.slice(0, 10)
    var singleSamplesSampleValues = dataFile.samples[0].sample_values.slice(0, 10)
    
    // singleSamplesSampleValues.sort(function compareFunction(firstNum, secondNum) {
    //     return secondNum - firstNum;
    // });

    // console.log(singleSamplesSampleValues)

    // var singleSamplesSampleValuesTop10 = dataFile.samples[0].sample_values.slice(0, 10)

    // console.log(singleSamplesSampleValuesTop10);

    var textOTU = 'OTU'



   let textOtuIds = ' ';
   singleSamplesOtuIds.forEach(id => textOtuIds += 'OTU' + ' ' + id)        
   console.log(textOtuIds)




    

    // // console.log(singleMetadata)
    // // console.log(singleSamples)
    // // console.log(singleSamplesOtuIds)
    // // console.log(singleSamplesOtuLabels)
    // // console.log(singleSamplesSampleValues)


    // // function buildPlot(){
    // //         d3.json("samples.json").then((dataFile) => {
    // //         var singleMetadata = dataFile.metadata[0]
    // //         var singleSamples = dataFile.samples[0]
    // //         var singleSamplesOtuIds = dataFile.samples[0].otu_ids
    // //         var singleSamplesOtuLabels = dataFile.samples[0].otu_labels


    var trace = {
        x: singleSamplesSampleValues,
        y: singleSamplesOtuIds,
        type: "bar",
        orientation: "h"
    }

    // // var layout = {
        
    // // }

    console.log(singleSamplesSampleValues)
    console.log(singleSamplesOtuIds)
    var plotData = [trace]

    Plotly.newPlot("bar", plotData);



// function buildPlot(){
//     d3.json("samples.json").then((dataFile) => {
//         var id = dataFile.samples.id;
//         var otu_ids = dataFile.samples.otu_ids;
//         var sample_values = dataFile.samples.sample_values;
//         var otu_lables = dataFile.samples.otu_lables;

//         console.log(dataFile.id)

// });
// }
    })
// buildPlot();