var SIM = SIM || {};
 
SIM.calculate = function () {

 if( w2ui['anualGrid'] ){
     console.info(w2ui['anualGrid']);
        SIM.reset();
    }
    
    //$('#result .montly').html('');

    var age = $('#mainData input[name="age"]');
    var yearsToWork = $('#mainData input[name="working"]');
 
    //alert(age.val());
 
    var baseSaving = $('#mainData input[name="saving"]');
    var montlySaving = $('#mainData input[name="montlySaving"]');
    var tasa = $('#mainData input[name="tasa"]');
    var anualSaving = $('#mainData input[name="anualSaving"]');
    var taxes = $('#mainData input[name="taxes"]');
    var initialMonth = $('#month');

    
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
        'inflation': inflation.val(),
        'initialMonth': initialMonth.val()
 
 
    };
 
    //alert(inputData);
    
    var anualGrid = $('#anualGrid');
    var montlyGrid = $('#monthlyGrid');

    var data = SIM.simulation(inputData);

    anualGrid.w2grid({
        name: 'anualGrid',
        header: 'Finantial simulator',
        show: {
            toolbar: true,
            footer: true
        },
        columns: [
            { field: 'recid', caption: 'Edad', size: '50px', attr: 'align=center' },
            { field: 'initialBalance', caption: 'Saldo Inicial', size: '100px', resizable: true },
            { field: 'anualSaving', caption: 'Ahorro Anual', size: '100px', resizable: true },
            { field: 'anualProfit', caption: 'Ingreso Pasivo', size: '100px', resizable: true },
            { field: 'taxes', caption: 'Impuestos', size: '100px', resizable: true },
            { field: 'finalBalance', caption: 'Saldo Final', size: '100px', resizable: true },
            { field: 'extraSaving', caption: 'Aportación Anual', size: '100px', resizable: true },
            { field: 'total', caption: 'Total', size: '100px', resizable: true },
            { field: 'inflation', caption: 'Inflación', size: '100px', resizable: true },
        ],
        records: new function(){ return data.anual.records; }

    });

    montlyGrid.w2grid({
        name: 'monthlyGrid',
        header: 'Finantial simulator',
        show: {
            //toolbar: true,
            footer: true
        },
        columns: [
            { field: 'recid', caption: 'Edad-Mes', size: '90px', attr: 'align=center' },
            //{ field: 'month', caption: 'Mes', size: '50px', attr: 'align=center' },
            { field: 'initialBalance', caption: 'Saldo Inicial', size: '120px', resizable: true },
            { field: 'profit', caption: 'Rendimiento', size: '120px', resizable: true },
            { field: 'monthlySaving', caption: 'Ahorro Mensual', size: '120px', resizable: true },
            { field: 'taxes', caption: 'Impuestos', size: '120px', resizable: true },
            { field: 'finalBalance', caption: 'Saldo Final', size: '120px', resizable: true },

        ],
        //searches: [        { field: 'month', caption: 'Mes', type: 'text' },          ],
        //sortData: [{ field: 'recid', direction: 'ASC' }],
        records: new function(){ return data.monthly.records; }

    });

    //    montlyGrid.w2render('grid');

    w2ui['anualGrid'].reload();
    w2ui['monthlyGrid'].reload();
 
    /*SIM.drawTable( data.month ,'#result .montly','tbMonth'
    ,['Mes','Saldo Inicial', 'Rendimiento','Ahorro mensual', 'impuestos','Saldo Final']);
 
     SIM.drawTable( data.year ,'#result .year','tbYear'
    ,['Edad', 'Saldo Inicial', 'Ahorro Anual', 'Ingreso Pasivo', 'Impuestos','Saldo final', 'Aportación Anual','Total', 'Inflación']);
    */
 
}
 
 SIM.reset = function(){
    w2ui['anualGrid'].destroy();
    w2ui['monthlyGrid'].destroy();
 
 }
 
SIM.simulation = function (data) {
 
    var MONTHS = 12;
    var counter = 0;
    var resultMonth = [];
    var montlySaving = parseFloat(data.montlySaving);
    var formattedSaving= accounting.formatMoney(data.montlySaving);
    var anualSaving = parseFloat(data.anualSaving);
    var taxes = ((parseFloat(data.taxes))/100);
    var inflation = parseFloat(data.inflation)/100;
    var initialMonth = data.initialMonth;
 
    var yearResult =[];
    rowYear = [];
    var tasa = ((data.tasa / 100)/364) * 28;
 
    var edad = parseFloat(data.age);

    //alert(data.initialMonth);

    var jResult = {
        'anual': { 'records': [] },
        'monthly': { 'records': [] }
    };



    for (i = 0; i < data.yearsToWork; i++) {
 
        var inc = (inc) ? inc : new Number(data.baseSaving);
         
        var sumSaving = 0;
        var sumProfit = 0;
        var sumtax = 0;
        var sumInlfation = 0;
        var total;
        var lastSaving =  inc;
        
        if(i == 0){
            j = initialMonth;
        }
        else{
            j=1;
        }


        for (; j <= MONTHS; j++) {
 
            var row = [];
            var profit = parseFloat(inc * tasa);
            var tax = profit*taxes;
            sumSaving += montlySaving;
            sumProfit += parseFloat(profit);
            sumtax += tax;
            //sumInlfation += sumInlfation + ;

            total = parseFloat(inc) + profit + montlySaving - tax;

            var monthlyEntry ={
                'recid': (edad+i) + '-'+ j,
                //'month': j,
                'initialBalance':  accounting.formatMoney(inc),
                'profit': accounting.formatMoney(profit),
                'monthlySaving': formattedSaving,
                'taxes': accounting.formatMoney(tax,{  format: "%s (%v)" }),
                'finalBalance': accounting.formatMoney(total)
            }

            jResult.monthly.records.push(monthlyEntry);
           
            inc = new Number(total);
        }

        //var yearBalance= sumSaving +sumProfit+anualSaving-sumtax;
        inc = inc+ anualSaving;

        anualEntry ={
            'recid': (edad+i), //Edad
            'initialBalance': accounting.formatMoney(lastSaving), //Saldo Inicial
            'anualSaving': accounting.formatMoney(sumSaving), //Ahorro Anual
            'anualProfit': accounting.formatMoney(sumProfit), //Ingreso Pasivo
            'taxes':accounting.formatMoney(sumtax, {  format: "%s (%v)" }), //Impuestos
            'finalBalance':accounting.formatMoney(total), //Saldo final
            'extraSaving': accounting.formatMoney(anualSaving), //Aportación Anual
            'total': accounting.formatMoney(inc), //Total,
            'inflation': accounting.formatMoney((inc* inflation), {  format: "%s (%v)" })

        };

        jResult.anual.records.push(anualEntry);
        j = 0;
 
    }
 
    result.year = yearResult;
    result.month = resultMonth;

    result['anual'] =  jResult.anual;
    result['monthly'] =  jResult.monthly;
 
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