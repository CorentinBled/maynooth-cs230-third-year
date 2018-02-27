function getAvg(){
    var table = document.getElementById("assignmentTable");
    var rows = table.rows;


    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].cells;
        var sum = 0;
        var numbers = 0;
        for (var x = 2; x < (cells.length -1); x++) {
            var cell = cells[x];

            var addme = parseInt(cell.innerHTML);
            if(!isNaN(addme)) {
                sum += addme;
                numbers++;
                rows[i].cells[x].classList.remove("unsubmitted");
            }
            else{
                rows[i].cells[x].innerHTML = "<td>-</td>"
                rows[i].cells[x].classList.add("unsubmitted");

            }
        }
        var average = sum / numbers;
        rows[i].cells[7].innerHTML = "<td>" + Math.round(average) + "%</td>";
        if(Math.round(average) < 40){
            rows[i].cells[7].classList.add("fail");
        }
        else{
            rows[i].cells[7].classList.remove("fail");
        }
    }
    document.getElementById("submit").innerHTML= count() + " assignments have not yet been submitted";
    document.getElementById("csvTable").innerHTML = tableToCSV();
}

function count(){
    var table = document.getElementById("assignmentTable");
    var rows = table.rows;
    var counting = 0;

    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].cells;
        var sum = 0;
        var numbers = 0;
        for (var x = 2; x < (cells.length -1); x++) {
            var cell = cells[x];

            var addme = parseInt(cell.innerHTML);
            if(isNaN(addme)) {
                counting++;

            }

        }
    }
    return counting;
}

function tableToCSV(tabID) {
    var csvLines = [];
    var tabEl = document.getElementById('assignmentTable');
    var rows = tabEl.getElementsByTagName('tr');
    for(var row = 0; row < rows.length; ++row) {
        var cells = rows[row].getElementsByTagName('td');
        var rowValues = [];
        for(var cell = 0; cell < cells.length; ++cell) {
            var cellText = cells[cell].innerText;
            // could escape commas here
            rowValues.push(cellText);
        }
        csvLines.push(rowValues.join(','));
    }
    return csvLines.join("\n");
}

document.getElementById("assignmentTable").onkeyup = getAvg;
document.getElementById('getAvg').onclick = getAvg;
//document.getElementById("csvTable").innerHTML = tableToCSV();
//document.getElementById("submit").innerHTML= count() + " assignments have not yet been submitted";
