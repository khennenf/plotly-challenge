on("samples.json").then((dataFile) => {

    var singleSamplesOtuIds = dataFile.samples[10].otu_ids.slice(0, 10)
    var singleSamplesOtuLabels = dataFile.samples[10].otu_labels.slice(0, 10)
    var singleSamplesSampleValues = dataFile.samples[10].sample_values.slice(0, 10)
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
// buildPlot();


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




    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Bellybutton Biodiversity</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>

<body>

  <div class="container">
    <div class="row">
      <div class="col-md-12 jumbotron text-center">
        <h1>Belly Button Biodiversity Dashboard</h1>
        <p>Use the interactive charts below to explore the dataset</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2">
        <div class="well">
          <h5>Test Subject ID No.:</h5>
          <select id="selDataset" onchange="optionChanged(this.value)"></select>
        </div>
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Demographic Info</h3>
          </div>
          <div id="sample-metadata" class="panel-body"></div>
        </div>
      </div>
      <div class="col-md-5">
        <div id="bar"></div>
      </div>
      <div class="col-md-5">
        <div id="gauge"></div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div id="bubble"></div>
      </div>
    </div>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.5.0/d3.js"></script>
  <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
  <script src="samples.json"></script>
  <script src="./static/js/app.js"></script>

  
</body>

</html>
