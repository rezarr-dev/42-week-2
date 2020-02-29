//1. Menyusun baris bintang
console.log("1. Menyusun baris bintang")
var rows = 5
for (let i = 0; i < rows; i++){
  console.log("*")
}

//2. Menyusun barisan bintang dengan nested looping
console.log("2. Menyusun barisan bintang dengan nested looping")
var rows2 = 5
for (let i = 0; i < rows2; i++){
  let cols = ""
  for (let j = 0; j < rows2; j++){
    cols += "*"
  }
  console.log(cols)
}

//3. Menyusun barisan tangga bintang dengan nested looping
console.log("3. Menyusun barisan tangga bintang dengan nested looping")
var rows3 = 5
for (let i = 0; i < rows3; i++){
  let cols2 = ""
  for (let j = 0; j <= i; j++){
    cols2 += "*"
  }
  console.log(cols2)
}