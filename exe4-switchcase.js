var tanggal = 2
var bulan = 2
var tahun = 2020

if (tanggal < 0 || tanggal > 31){
  console.log("Tanggal harus diisi dengan angka 1 - 31!")
  tanggal = "[Tanggal Error]"
}

switch (bulan){
  case 1: {
    bulan = "Januari"
    break
} case 2: {
    bulan = "Februari"
    break
} case 3: {
    bulan = "Maret"
    break
} case 4: {
    bulan = "April"
    break
} case 5: {
    bulan = "Mei"
    break
} case 6: {
    bulan = "Juni"
    break
} case 7: {
    bulan = "Juli"
    break
} case 8: {
    bulan = "Agustus"
    break
} case 9: {
    bulan = "September"
    break
} case 10: {
    bulan = "Oktober"
    break
} case 11: {
    bulan = "November"
    break
} case 12: {
    bulan = "Desember"
    break
} default: {
    console.log("Bulan harus diisi dengan angka 1-12!")
    bulan = "[Bulan Error]"
}
}

if (tahun < 1900 || tahun > 2200){
  console.log("Tahun harus diisi dengan angka 1900 - 2200!")
  tahun = "[Tahun Error]"
}

console.log([tanggal] + " " + [bulan] + " " + [tahun])