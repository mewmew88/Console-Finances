var finances = [
['Jan-2010', 867884], // changes 867884 - 0, or changes = 0
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099] // changes 671099 - 138230
]; 

// The total number of months included in the dataset.
// find out length of finances array

// The net total amount of Profit/Losses over the entire period.
// loop through the finances array and get the value of the profit/losses by accessing it manually
// var total = 0
// for i in finances
//   total = total + finances[i][1]

// The average of the changes in Profit/Losses over the entire period.
// create new array called it financeChanges to store changes for each months
// loop finances array and calculate the changes
// for i in finances
//   var profitLosses = finances[i][1]
//   financeChanges.push(finances[i+1][1] - finances[i][1])
// Be careful on the last month finances[i+1] will not exist!
// find out the length of financeChanges array
// Calculate the total changes using the same method as the previous question
// Calculate the averate

// The greatest increase in profits (date and amount) over the entire period.
// var highestEarning = 0
// for i in financeChanges
//   compare financeChanges[i] with highestEarning
//   if financeChanges[i] > highestEarning then replace highestEarning with financeChanges[i]
// Or use Math.max() for the amount, or sort from highest to lowest and get the value of the first index
// how about the date?
// Find the index of the maximum element in financeChanges array
// get the month from finance array with the same index that we have found

// The greatest decrease in losses (date and amount) over the entire period.
// Google "how to find minimum value of an array in javascript"

// Calculate total number of months in database using

var Months = finances.length

console.log("Total months: ", Months)

// Calculate the net total amount of profits and loss

var totalAmount = 0

for(var i = 0; i < Months; i++) {
    totalAmount += finances[i][1];
} 

console.log("Total: ", totalAmount)

// Average out the changes in profits and losses

var financeChanges = 0

for(var i = 1; i < finances.length; i++) {  
financeChanges += (finances[i][1] - finances[i-1][1])
}
var average = financeChanges / (Months - 1)
console.log("Average: ", average)
// The greatest increase in profits (date and amount)

var highestIncrease = { 
    date: finances[0][0],
    amount: finances[0][1] 
}

for(var i = 1; i < finances.length; i++) {
    if(finances[i][1] - finances[i-1][1] > highestIncrease.amount)
   {highestIncrease.date = finances[i][0];
    highestIncrease.amount = finances[i][1] - finances[i-1][1]}
}
console.log("Highest Increase: ", highestIncrease)
// Greatest decrease in losses (date and amount)

var biggestDecrease = { 
date: finances[0][0],
amount: finances[0][1]
}

for(var i = 1; i < finances.length; i++) {
    if(finances[i][1] - finances[i-1][1] < biggestDecrease.amount)
    {biggestDecrease.date = finances[i][0];
    biggestDecrease.amount = finances[i][1] - finances[i-1][1]}
}
console.log("Highest Decrease: ", biggestDecrease)