var nama = "Reza"
var peran = "Presiden"

if (nama == ""){
  console.log("Nama harus diisi!")
}
if (nama != "" && peran == ""){
  console.log("Halo " + [nama] + ", pilih peranmu untuk memulai game!")
}
if (nama != "" && peran != ""){
  console.log("Selamat datang di Dunia Proxytia, " + [nama])
}
if (nama != "" && peran == "Ksatria"){
  console.log("Halo Ksatria " + [nama] + ", kamu dapat menyerang dengan senjatamu!")
}
if (nama != "" && peran == "Tabib"){
  console.log("Halo Tabib " + [nama] + ", kamu akan membantu temanmu yang terluka.")
}
if (nama != "" && peran == "Penyihir"){
  console.log("Halo Penyihir " + [nama] + ", ciptakan keajaiban yang membantu kemenanganmu!")
  }
if (peran != "Ksatria" && peran != "Tabib" && peran != "Penyihir"){
  console.log("Peran yang kamu pilih tidak terdaftar, mohon pilih satu dari tiga peran yang tersedia: 1. Ksatria, 2. Tabib, 3. Penyihir")
}