//1. Newton Second Law
/*
SET percepatan TO 2
SET massa TO 600
COMPUTE resultan as percepatan times massa
DISPLAY resultan
*/

//2. Tahun Kabisat
/*
SET tahun TO any number
IF tahun mod 4 equals to 0 AND tahun mod 100 not equals to 0 THEN
  DISPLAY "Tahun Kabisat"
ELSE IF tahun mod 4 equals to 0 AND tahun mod 100 equals to 0 AND tahun mod 400 equals to 0 THEN
  DISPLAY "Tahun Kabisat"
ELSE
  DISPLAY "Bukan Tahun Kabisat"
  ENDIF
*/

//3. Laundry Day
/*
SET laundry TO 0
WHILE laundry < 20
  ADD laundry by 1
ENDWHILE
DISPLAY "Cuci Sekarang!" 
*/

//4. Periksa Kuku
/*
SET kuku TO "Panjang" or "Pendek"
SET index TO 1
WHILE index <= 40
  IF kuku equals to panjang THEN
    DISPLAY "Hukum!"
    ADD index by 1  
  ELSE
    DISPLAY "Puji!"
    ADD index by 1
  ENDIF
ENDWHILE
*/