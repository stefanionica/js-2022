var date = new Date()

var year = date.getFullYear() 

var generationAlpha = year > 2016
var generationZ = year > 2002
var generationY = year > 1987
var generationX = year > 1972
var babyBoomers = year > 1953
var builders = year < 1953


if (year > 2016) {    
    document.write('Generation Alpha')
} else if (year > 2002) {
    document.write('Generation Z')
} else if (year > 1987) {
    document.write('Generation Y')
} else if (year > 1972) {
    document.write('Generation X')
} else if (year > 1953) {
    document.write('Baby Boomers')
} else {
    document.write('Builders')
}


