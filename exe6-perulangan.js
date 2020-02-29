//1. Looping while
console.log("1. Looping while")
var num = 0
console.log("LOOPING PERTAMA")
while (num <= 18){
  num += 2  
  console.log(num + " - I love coding")
}
var num2 = 22
console.log("LOOPING KEDUA")
while (num2 >= 4){
  num2 -= 2
  console.log(num2 + " - I will become fullstack developer")
}
console.log(" ")

//2. Looping for
console.log("2. Looping for")
console.log("LOOPING PERTAMA")
var num = 1
for (let i = 0; i < 20; i++){
  console.log(num + " - I love coding")
  num++
}
console.log("LOOPING KEDUA")
var num2 = 20
for (let i = 20; i > 0; i--){
  console.log(num2 + " - I will become fullstack developer")
  num2--
}
console.log(" ")

//3. Angka ganjil genap
//Ganjil genap 
console.log("3.a. Ganjil genap")
for (let i = 1; i <= 100; i++){
  if (i % 2 == 0){
    console.log(i + " - Genap")
  } else {
    console.log(i + " - Ganjil")
  }
}
console.log(" ")

//Kelipatan 3 dengan pertambahan 2
console.log("3.b. Kelipatan 3 pertambahan 2")
for (let i = 1; i <= 100; i += 2){
  if (i % 3 == 0){
    console.log(i + " kelipatan 3")
  } else {
    console.log(`""`)
  }
}
console.log(" ")

//Kelipatan 6 dengan pertambahan 5
console.log("3.c. Kelipatan 6 pertambahan 5")
for (let i = 1; i <= 100; i += 5){
    if (i % 6 == 0){
      console.log(i + " kelipatan 6")
    } else {
      console.log(`""`)
    }
}
console.log(" ")
  
//Kelipatan 10 dengan pertambahan 9
console.log("3.d. Kelipatan 10 pertambahan 9")
for (let i = 1; i <= 100; i += 9){
    if (i % 10 == 0){
      console.log(i + " kelipatan 3")
    } else {
      console.log(`""`)
    }
}
  