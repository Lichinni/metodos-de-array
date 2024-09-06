//Punto 1 ==================================================================

var nombres=["Juan", "María", "Lucía", "Carlos", "Ana", "Luis", "Sofía", "Miguel","Elena","Raul"]

var nombres2=nombres.map(x => ("5° 4° - " + x))

document.write(nombres2.join("<br>"))



//Punto 2 ==================================================================
document.write("<br><br>")

var notas=[7.5, 8.0, 6.5, 9.0, 5.5, 7.0, 8.5, 6.0, 7.8, 8.2, 6.9, 7.3]

var notas2=notas.map(x => x + 2.5 + (" (nota original: " + x + ")"))

document.write(notas2.join("<br>"))



//Punto 3 ==================================================================
document.write("<br><br>")

var num=[]

for(let i=0; i<10; i++){
    num.push(Math.floor(Math.random()*10))
}

var num2=num.map(x => "cuadrado de " + x + ": " + Math.pow(x, 3))

document.write(num2.join("<br>"))



//Punto 4 ==================================================================
document.write("<br><br>")

var precios=[]

for(let i=0; i<15; i++){
    precios.push(prompt("inserte un precio (" + (i+1) + "/" + "15)"))
}

var precios2=precios.map(x => x + " + el 10%: " + (parseInt(x)+(x/100)*10))

document.write(precios2.join("<br>")) 
