var option = document.createElement('option');
option.text = '941'
option.value = 1
document.querySelector('#selDataset').add(option, 0)

// var select = document.querySelector("#selDataset"); 
// var options = ["1", "2", "3", "4", "5"]; 

// for(var i = 0; i < options.length; i++) {
//     var opt = options[i];

//     var el = document.createElement("option");
//     el.text = opt;
//     el.value = opt;

//     select.add(el);
// }​

function addOption(selectbox,text,value )

{var optn = document.createElement("OPTION");

optn.text = text;

optn.value = value;

selectbox.options.add(optn);

}

var month = new Array("January","February","March","April","May","June",
"July","August","September","October","November","December");

for (var i=0; i < month.length;++i){

    addOption(document.drop_list.Month_list, month[i], month[i]);
    
    }


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

