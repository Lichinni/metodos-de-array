var array=[]
var arrayAumento=[]
var arrayMod=[]

for(let i=0; i<10; i++){
    array[i]=parseInt(prompt("Ingrese un precio:"))
}

//Inicio ======================================================================
document.write("Precios originales:<br>")
document.write(array.join(" || "))


//Punto A ======================================================================
arrayAumento = array.map(x => x + ((x/100)*15))
document.write("<br><br>Aumento del 15%:<br>")
document.write(arrayAumento.join(" || "))


//Punto B ======================================================================
arrayMod = arrayAumento.filter(x => x === 230)
document.write("<br><br>Precios iguales a 230:<br>")
document.write(arrayMod.join(" || "))


//Punto C ======================================================================
arrayMod = arrayAumento.filter(x => x >= 300 && x <= 500)
document.write("<br><br>Precios comprendidos entre 300 y 500:<br>")
document.write(arrayMod.join(" || "))


//Punto D ======================================================================
arrayMod = arrayAumento.filter(x => x > 400)
document.write("<br><br>Precios mayores a 400:<br>")
document.write(arrayMod.join(" || "))


//Punto E ======================================================================
arrayMod = arrayAumento.filter(x => x < 200)
document.write("<br><br>Precios menores a 200:<br>")
document.write(arrayMod.join(" || "))


//Punto F ======================================================================
arrayMod = arrayAumento.filter(x => x != 345)
document.write("<br><br>Precios distintos a 345:<br>")
document.write(arrayMod.join(" || "))


//Punto G ======================================================================
arrayMod = arrayAumento.filter(x => x != 460)
document.write("<br><br>Precios distintos a 460:<br>")
document.write(arrayMod.join(" || "))


//Punto H ======================================================================
arrayMod = arrayAumento.filter(x => x < 200 || x > 500)
document.write("<br><br>Precios mayores a 500 y menores a 200:<br>")
document.write(arrayMod.join(" || "))


//Punto I ======================================================================
arrayMod = arrayAumento.filter(x => x === 345)
document.write("<br><br>Precios iguales a 345:<br>")
document.write(arrayMod.join(" || "))
