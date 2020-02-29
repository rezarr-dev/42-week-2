function konversiMenit(menit) {
  // you can only write your code here!
  var depan = 0
  var belakang = 0
  depan += Math.floor(menit/60)
  belakang += menit % 60
  if (belakang < 10){
    belakang = "0" + belakang
  }
  return depan + ":" + belakang
}
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00