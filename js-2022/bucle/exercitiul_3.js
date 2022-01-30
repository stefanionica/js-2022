/*
var i=1
var j=1
var td='#'
var table = document.getElementById('grile');
var message = "";
for(i = 1; i <= 20; i++) {
message += "<tr>";
    for(j = 1; j <= 10; j++) {
        message += "<td>" + 0 + "</td>";
    }
message += "</tr>"
}

table.innerHTML = message;
*/

var i = 0
var j = 0
var message = ""
var messagei = ""

for (j = 0; j < 20; j++) {
    message = 0 + "<br>"
    for (i = 0; i < 10; i++) {
        messagei = 0 + " "
        document.write(messagei)
    }
    document.write(message)
}

