
var num=prompt("Enter a number");
//var num=(5);
var i=0;
document.write('<table border=1px>');
for(i=1; i<=10; i++)
{
document.write("<tr><td>" + num + "X" + i + "=" + num*i + "</td)></tr>");
}
document.write("</table>");