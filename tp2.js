//Punto 1 =============================================

let nombres = []

for(let i=0; i<10; i++){
  nombres[i]=prompt("Ingrese el nombre de un estudiantes (" + (i+1) + "/10):")
}

nombre=nombres.sort()

document.write("Punto 1: ====================================================<br>")
document.write(nombre.join("<br>"))



//Punto 2 =============================================

let nums = []

for(let i=0; i<15; i++){
  nums[i]=prompt("Ingrese un número (" + (i+1) + "/15):")
}

nums=nums.sort((a,b) => (a-b))

document.write("<br><br><br>Punto 2: ====================================================<br>")
document.write(nums.join("<br>"))



//Punto 3 =============================================

let randomNums = []

for(let i=0; i<10; i++){
  randomNums [i]=Math.floor(Math.random()*100)
}

randomNums=randomNums.sort((a,b) => (a-b))

document.write("<br><br><br>Punto 3: ====================================================<br>")
document.write(randomNums.join("<br>"))
