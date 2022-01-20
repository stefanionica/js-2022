var date = new Date()


var hour = date.getHours()

//daca e dimineata (= ora pana in 12) atunci scriu 'Buna dimineata!'
//altfel daca este pranz sccriu 'Pofta buna!'
//daca este dupa-amiaza scriu 'Buna ziua!'
//daca este seara scriu 'Buna seara!'
//daca este noapte scriu 'Noapte buna!'

/* Solutie alternativa:
var startOfNight = 22

if (hour < 4) {
    document.write('Noapte buna!')
} else if (hour < 12) {
    document.write('Buna dimineata!')
} else if (hour == 12) {
    document.write('Pofta buna!')
} else if (hour < 17) {
    document.write('Buna ziua!')
} else if (hour < startOfNight) {
    document.write('Buna seara!')
} else  {
    document.write('Noapte buna!')
}
*/

if (hour < 4) {
    document.write('Noapte buna!')
} else if (hour < 12) {
    document.write('Buna dimineata!')
} else if (hour == 12) {
    document.write('Pofta buna!')
} else if (hour < 17) {
    document.write('Buna ziua!')
} else if (hour < 22) {
    document.write('Buna seara!')
} else  {
    document.write('Noapte buna!')
}

/* Solutie alternativa:
var starOfNight = 22
var endOfNight = 4
var isNight = hour > startOfNight && hour < endOfNight
if (isNight) {
    document.write('Noapte Buna !')
}

*/