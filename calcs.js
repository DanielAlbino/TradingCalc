
function getterInfo(){
    var capital = document.getElementById("capital").value;
    var riskMoney = document.getElementById("riskMoney").value;
    var riskPercent = document.getElementById("riskPercent").value;
    var stoploss = document.getElementById("stoploss").value;
    var lots = document.getElementById("lots").value;
    calcpips(riskMoney,stoploss); 

    var entry1 = document.getElementById("stoploss").value;
    document.getElementById("entry1").value = entry1;
    document.getElementById("percentage1").value = 100;
}

function calcpips(risk, sl){
    var pipValue = (risk/sl).toFixed(2);
    document.getElementById("pips").value = pipValue;
}

function calc(id, id2, id3,id4,id5){
    var risk = document.getElementById("riskMoney").value;
    var percent = document.getElementById(id).value;
    var pips = document.getElementById(id4).value;

    

     /* Calculate and show the risk value */
    var total = (risk*percent)/100;
    document.getElementById(id2).value = total;

    /* Caculate and show the Pip Value */
    var pipVal = document.getElementById(id3).value = (total/pips).toFixed(2);

    /* Calculate and show the lot size */
    var lot = document.getElementById("lots").value;
    var pips = document.getElementById("pips").value;
    var lotsSize = pipVal*lot/pips;
    document.getElementById(id5).value = lotsSize.toFixed(2);
}

function showResults(){
    var totalPercentage = 0;
    var totalrisk = 0;
    var totalLots = 0;

    totalPercentage = parseInt(document.getElementById("percentage1").value) + parseInt(document.getElementById("percentage2").value) +parseInt(document.getElementById("percentage3").value)   
    document.getElementById("totalPercent").value = totalPercentage;
    totalLots = parseFloat(document.getElementById("lots1").value)  + parseFloat(document.getElementById("lots2").value) + parseFloat(document.getElementById("lots3").value);
    document.getElementById("totalLots").value = totalLots;
    totalrisk = parseFloat(document.getElementById("risk1").value) + parseFloat(document.getElementById("risk2").value) + parseFloat(document.getElementById("risk3").value);
    document.getElementById("totalRisk").value = totalrisk;

}



