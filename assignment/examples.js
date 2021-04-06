var e = document.getElementById("elementId");

var value = e.options[e.selectedIndex].value;

var text = e.options[e.selectedIndex].text;



var array = [{    
    "EmployeeName": "John",    
    "Experience": "12",    
    "Technology": "SharePoint"    
}, {    
    "EmployeeName": "Charles",    
    "Experience": "9",    
    "Technology": "ASP.NET"    
}, {    
    "EmployeeName": "Jo",    
    "Experience": "3",    
    "Technology": "JAVA"    
}, {    
    "EmployeeName": "Daine",    
    "Experience": "7",    
    "Technology": "Sql Server"    
}, {    
    "EmployeeName": "Zain",    
    "Experience": "6",    
    "Technology": "C#"    
}];    
//Comparer Function    
function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}    
    
array.sort(GetSortOrder("EmployeeName")); //Pass the attribute to be sorted on    
document.write("Sorted Employee Names : ");    
for (var item in array) {    
    document.write("<br>" + array[item].EmployeeName);    
}    
    
array.sort(GetSortOrder("Technology")); //Pass the attribute to be sorted on    
document.write("<br><br> Sorted Technology Names : ");    
for (var item in array) {    
    document.write("<br>" + array[item].Technology);    



    // d3.select('#selDataset').on("change", optionChanged)
// // console.log(testSubId);

// function optionChanged() {
//     var dropdownMenu = d3.select('#selDataset');
//     var dataset = dropdownMenu.property('value');
//     var data = []

//     if (dataset > 0) {
//         data = testSubId
//     }

//     Plotly.newPlot("bar", plotData);
// }
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