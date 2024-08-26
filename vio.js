console.log(document.title)
document.title = 'trisna vio'
console.log(document.title)
console.log(document.body)
const body = document.body

body.append('HELLO WORLD')

const h1 = document.createElement('h1') // baru berbentuk <h1><h1>
h1.innerText = 'saya bisa buat h1 hahaha' // baru bisa memasukkan <h1>saya bisa buat h1 hahaha<h1>

const namasaya = document.createElement('p')
namasaya.textContent= 'trisna vioni'

const umursaya = document.createElement('b')
umursaya.innerHTML= 'umur saya 16 tahun'

body.append(h1)
body.append(namasaya)
body.append(umursaya)