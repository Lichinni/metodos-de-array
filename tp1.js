//Punto 1 ===================================================

let estaturas=[1.55, 1.60, 1.65, 1.70, 1.75, 1.80, 1.85, 1.90, 1.95, 2.0]

estaturas.push(prompt("Ingrese una altura:"))

document.write(estaturas.join("<br>"))



//Punto 2 ===================================================

let jugadores=["lionel messi", "angel di maria", "el dibu", "lautaro martinez", "julian alvares"]

jugadores.unshift(prompt("Ingrese un jugador:"))

document.write("<br><br>")
document.write(jugadores.join("<br>"))


//Punto 3 ===================================================

jugadores.shift()


//Punto 4 ===================================================

estaturas.pop()
estaturas.pop()
estaturas.pop()


//Punto 5 ===================================================

let N=prompt("Ingrese un número de personas (minimo 5):")

let edades=[]

for (let i=0; i<N; i++){
    edades.push(prompt("Ingrese una edad (" + (i+1) + "/" + N + ")"))
}

edades.shift()
edades.shift()
edades.shift()
edades.shift()
edades.shift()
