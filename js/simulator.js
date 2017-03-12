var SIM = SIM || {};
 
SIM.calculate = function () {
 
 
    $('#result .montly').html('');
    var age = $('#mainData input[name="age"]');
    var yearsToWork = $('#mainData input[name="working"]');
 
    //alert(age.val());
 
    var baseSaving = $('#mainData input[name="saving"]');
    var montlySaving = $('#mainData input[name="montlySaving"]');
    var tasa = $('#mainData input[name="tasa"]');
    var anualSaving = $('#mainData input[name="anualSaving"]');
    var taxes = $('#mainData input[name="taxes"]');

    
    var inflation= $('#inflacion');
    //console.log(inflation);
 
    var inputData = {
        'age': age.val(),
        'yearsToWork': yearsToWork.val(),
        'baseSaving': baseSaving.val(),
        'tasa': tasa.val(),
        'montlySaving': montlySaving.val(),
        'anualSaving':anualSaving.val(),
        'taxes':taxes.val(),
        'inflation': inflation.val()
 
 
    };
 
    //alert(inputData);
 
 
    var data = SIM.monthly(inputData);
 
    SIM.drawTable( data.month ,'#result .montly','tbMonth'
    ,['Mes','Saldo Inicial', 'Rendimiento','Ahorro mensual', 'impuestos','Saldo Final']);
 
     SIM.drawTable( data.year ,'#result .year','tbYear'
    ,['Edad', 'Saldo Inicial', 'Ahorro Anual', 'Ingreso Pasivo', 'Impuestos','Saldo final', 'Aportación Anual','Total', 'Inflación']);
    // [ [ 1, 2, 3 ,4], [ 3,4, 5, 6 ], [3,7, 8, 9 ] ];
 
   /* var html = '<table class="tbMonth"><thead><tr>...</tr></thead><tbody>';
    for (var i = 0, len = data.length; i < len; ++i) {
        html += '<tr>';
        for (var j = 0, rowLen = data[i].length; j < rowLen; ++j) {
            html += '<td>' + data[i][j] + '</td>';
        }
        html += "</tr>";
    }
    html += '</tbody><tfoot><tr>....</tr></tfoot></table>';
 
    $().html(html);*/
 
}
 
 
SIM.monthly = function (data) {
 
    var MONTHS = 12;
    var counter = 0;
    var resultMonth = [];
    var montlySaving = parseFloat(data.montlySaving);
    var formattedSaving= accounting.formatMoney(data.montlySaving);
    var anualSaving = parseFloat(data.anualSaving);
    var taxes = ((parseFloat(data.taxes))/100);
    var inflation = parseFloat(data.inflation)/100;
 
    var yearResult =[];
    rowYear = [];
    var tasa = ((data.tasa / 100)/364) * 28;
 
    var edad = parseFloat(data.age);
    for (i = 0; i < data.yearsToWork; i++) {
 
        
         
        var inc = (inc) ? inc : new Number(data.baseSaving);
         
        var sumSaving = 0;
        var sumProfit = 0;
        var sumtax = 0;
        var sumInlfation = 0;
        var total;
        
        var lastSaving =  inc;
        
        for (j = 1; j <= MONTHS; j++) {
 
            var row = [];
            var profit = parseFloat(inc * tasa);
            var tax = profit*taxes;
            sumSaving += montlySaving;
            sumProfit += parseFloat(profit);
            sumtax += tax;
            //sumInlfation += sumInlfation + ;

            
            //var monProfit= (inc + profit + data.montlySaving);
            //row.push(inc + profit + data.montlySaving);
            total = parseFloat(inc) + profit + montlySaving - tax;

            row.push(j);
            row.push(accounting.formatMoney(inc));
            row.push(accounting.formatMoney(profit));
            row.push(formattedSaving);
            row.push(accounting.formatMoney(tax,{  format: "%s (%v)" }));
            row.push(accounting.formatMoney(total));

            resultMonth.push(row);
            inc = new Number(total);
        }

        //var yearBalance= sumSaving +sumProfit+anualSaving-sumtax;
        rowYear.push((edad+i));
        
        rowYear.push(accounting.formatMoney(lastSaving));


        //rowYear.push(accounting.formatMoney(total));
        rowYear.push(accounting.formatMoney(sumSaving));
        rowYear.push(accounting.formatMoney(sumProfit));
        rowYear.push(accounting.formatMoney(sumtax, {  format: "%s (%v)" }));
        rowYear.push(accounting.formatMoney(total));
        rowYear.push(accounting.formatMoney(anualSaving));

        inc = inc+ anualSaving;
        rowYear.push(accounting.formatMoney(inc));
        rowYear.push(accounting.formatMoney((inc* inflation), {  format: "%s (%v)" }));
                
        yearResult.push(rowYear);

        rowYear = [];
        j = 0;
        
        //sumInlfation =0;
 
    }
 
    result.year = yearResult;
    result.month = resultMonth;
 
    return result;
 
}
 
SIM.drawTable = function(data, container, clazz, columns ){
 
    //data.unshift(columns);
 
    var html = '<table '+((clazz)?'class="'+clazz+'"':'')+'>';
 
    html += '<thead class="thead">'
    html += '<tr>';
    for (var x = 0, len = columns.length; x < len; ++x) {
         
        html += '<td>' + columns[x] + '</td>';
         
    }
    html += "</tr>";
    html += '</thead><tbody>';
 
    for (var i = 0, len = data.length; i < len; ++i) {
        html += '<tr>';
        for (var j = 0, rowLen = data[i].length; j < rowLen; ++j) {
            html += '<td>' + data[i][j] + '</td>';
        }
        html += "</tr>";
    }
    html += '</tbody><tfoot><tr>....</tr></tfoot></table>';
 
    $(container).html(html);
 
}