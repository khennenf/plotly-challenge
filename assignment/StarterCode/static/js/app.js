d3.json("samples.json").then((dataFile) => {
    // console.log(dataFile.metadata[0])
    // console.log(dataFile.samples[0])

    var singleMetadata = dataFile.metadata[0]
    var singleSamples = dataFile.samples[0]
    var singleSamplesOtuIds = dataFile.samples[0].otu_ids.slice(0, 10)
    var singleSamplesOtuLabels = dataFile.samples[0].otu_labels.slice(0, 10)
    var singleSamplesSampleValues = dataFile.samples[0].sample_values.slice(0, 10)

    // console.log(singleMetadata)
    // console.log(singleSamples)
    console.log(singleSamplesOtuIds)
    console.log(singleSamplesOtuLabels)
    console.log(singleSamplesSampleValues)

    // function buildPlot(){
    //         d3.json("samples.json").then((dataFile) => {
    //         var singleMetadata = dataFile.metadata[0]
    //         var singleSamples = dataFile.samples[0]
    //         var singleSamplesOtuIds = dataFile.samples[0].otu_ids
    //         var singleSamplesOtuLabels = dataFile.samples[0].otu_labels




    

})

// function buildPlot(){
//     d3.json("samples.json").then((dataFile) => {
//         var id = dataFile.samples.id;
//         var otu_ids = dataFile.samples.otu_ids;
//         var sample_values = dataFile.samples.sample_values;
//         var otu_lables = dataFile.samples.otu_lables;

//         console.log(dataFile.id)

// });
// }

// buildPlot();