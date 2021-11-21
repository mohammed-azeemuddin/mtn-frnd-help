function generate_table(){

    const list = [1,2,5,10,20,50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,920];
    var tables = "";
    var wage = parseFloat(document.getElementById('tot_mtn_rate').value);
    tables +="<tr>"+
                "<th>"+"Rate"+"</th>"+
                "<th>"+"Weight"+"</th>"
            +"</tr>";
    for (var i = 0; i < list.length; i++) {
        var calculate = ((list[i]*1000)/wage).toFixed(4);
        var text_rates = "Rs." + list[i]
        var text_weights = calculate + "  gm";
        tables += "<tr>" +
                    "<td>" + text_rates + "</td>" +
                    "<td>" + text_weights + "</td>"+
                  "</tr>";
    }
    document.getElementById("tot-mtn-rate").innerHTML = '<table border="1" cellspacing="8" cellpadding="20">' + tables + '</table>';

}

function show_common_rates(){

    const list = [230,460,690,920];
    var tables = "";
    var wage = parseFloat(document.getElementById('tot_mtn_rate').value);
    tables +="<tr>"+
                "<th>"+"Rate"+"</th>"+
                "<th>"+"Weight"+"</th>"
            +"</tr>";
    for (var i = 0; i < list.length; i++) {
        var calculate = ((list[i]*1000)/wage).toFixed(4);
        var text_rates = "Rs." + list[i]
        var text_weights = calculate + "  gm";
        tables += "<tr>" +
                    "<td>" + text_rates + "</td>" +
                    "<td>" + text_weights + "</td>"+
                  "</tr>";
    }
    document.getElementById("common-rates").innerHTML = '<table border="1" cellspacing="8" cellpadding="20">' + tables + '</table>';

}

function show_common_weights(){
    const list = [50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000];
    var tables="";
    var wage = parseFloat(document.getElementById('tot_mtn_rate').value);
    tables +="<tr>"+
                "<th>"+"Weight"+"</th>"+
                "<th>"+"Rate"+"</th>"
            +"</tr>";
    for (var i = 0; i < list.length; i++) {
        var calculate = ((list[i]*wage)/1000).toFixed(4);
        var text_weights = list[i] + "gm"
        var text_rates = "Rs."+ calculate;
        tables += "<tr>" +
                    "<td>" + text_weights + "</td>" +
                    "<td>" + text_rates + "</td>"+
                  "</tr>";
    }
    document.getElementById("common-weights").innerHTML = '<table border="1" cellspacing="8" cellpadding="20">' + tables + '</table>';
}
