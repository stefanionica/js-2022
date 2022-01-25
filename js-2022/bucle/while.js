/*var numar = 1

while (numar <= 5) {
    document.write(numar)
    numar++
}

while (numar >= 2) {
    document.write(numar)
    numar--
}


var n = 5

console.log(5 * 1);


5 x 1 = ?
5 x 2 = ?

...
5 x 9 = ?



var number = 0;
while(number > 5) {
 if(number == 3) 
 console.log(number)
 number++
} 
*/

var money = 5
var chocolates = 0
var chocolatePrice = 1
while (money >= 0) {
    chocolates++
    money -= chocolatePrice
}
document.write("I have" + chocolates + "chocolates")


var money = 5
var chocolates = 0
do {
    chocolates++
    money -= chocolatePrice
} while (money >= 0)
document.write("I have" + chocolates + "chocolates")
