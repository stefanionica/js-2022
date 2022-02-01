var scores = [50, 65, 49, 81, 20, 55, 19, 91, 58, 60]

document.write('Al doilea scor este:' + scores[1] + '<br>')
document.write('Ultimul scor este:' + scores[9] + '<br>')

var max = 0
for (let i = 0; i < scores.lenght; i++) {
    if (scores[i] > max) {
        max = scores[i]
    }

}
document.write('Scorul maxim este:' + max + '<br>')

scores.sort()
document.write(scores + '<br>')  

//sort ordoneaza elementele din array in ordine ascendenta
//tema : ordirea ascendenta
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


var fruits = ['orange', 'banana', 'apple', 'wasabi']
fruits[0] = 'kiwi'

//push adauga la sfarsitul array-ului - pop scoate de la sfarsit
fruits.push('pear')

//adauga la inceputul array-ului - shift scoate de la inceput
fruits.unshift('strawberry')

fruits.sort()
document.write(fruits + '<br>') 


//sterge doua elemente incepand de la pozitia 1
fruits.splice(1,2)
document.write(fruits + '<br>')


var words = ['hello', 'Visual Studio', 'Java Script', 'if', 'object']

var upperWords = []

for (let word of words) {
    //word[0] este I litera, verificam ca se afla inre A - Z
    // o alta varianta: word[0].toUpperCase() == word[0]
    if (word[0] >='A' && word[0] <= 'Z') {
        upperWords.push(word)
    }
}
upperWords.sort()
document.write(upperWords)

// vezi exercitii cu array-uri