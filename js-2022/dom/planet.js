var p = document.getElementById('greenplanet')

p.innerText = 'An alien appeared'
p.innerHTML = '<b>An alien appeared</b>'


//putem seta stilul direct din .js
//dar recomandarea este sa folosim css + clase
//p.style.color = 'red'
//p.style.backgroundColor = 'rgb(230, 210, 200)'


//adauga o clasa elementului
p.classList.add('warning')

//pentru a sterge o clasa folosim ('remove') in loc de 'add'
//p.classList.remove('warning')

var newElement = document.createElement('p')
newElement.innerText = 'Hello there!'

//punem elementul in body , la sfarsit
//document.querySelector('body').appendChild(newElement)

//punem elementul inaintea elementului p in body:
//document.querySelector('body').insertBefore(newElement, p) - sau:
p.before(newElement)

//sterge un element:
document.querySelector('#blueplanet').remove()

//executa functia changeMessage cand se da click pe input:
document.querySelector('input').addEventListener('click', changeMessage)
function changeMessage() {
    document.querySelector('#redplanet').classList.add('warning')
}

//e.append(elem) - adauga la sfarsitul elementului e
//e.prepend(elem) - adauga la inceputul elementului e
//e.before(elem) - adauga inaintea de elementul e
//e.after(elem) - adauga dupa elementul e