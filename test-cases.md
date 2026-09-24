TEST 1 : Usia <5 (harga Rp0)
- INPUT = Usia 4tahun, harga Rp0, hari = senin, kode promo = -
- EXPECTED OUTPUT = Total = Rp0
- ACTUAL OUTPUT = Correct

TEST 2 = Usia <12 (harga Rp20000)
- INPUT = Usia 10tahun, harga Rp20000, hari = senin, kode promo = -
- EXPECTED OUTPUT = Total = Rp20000
- ACTUAL OUTPUT = Correct

TEST 3 = Usia <59 (harga Rp50000 dan weekend)
- INPUT = Usia 35tahun, harga Rp50000, hari = sabtu, kode promo = -
- EXPECTED OUTPUT = Total = Rp60000 (totaldasar+totaldasar*0,2)
- ACTUAL OUTPUT = Correct

TEST 4 = Usia >60 (harga Rp35000 dan weekend)
- INPUT = Usia 62tahun, harga = Rp35000, hari = minggu, kode promo = -
- EXPECTED OUTPUT = Total = Rp42000 (totaldasar+totaldasar*0,2)
- ACTUAL OUTPUT = Correct

TEST 5 = PENGGUNAAN KODEPROMO
- INPUT = Usia <59 berjumlah 7orang, harga = 50000, hari = senin, kode promo = HEMAT7
- EXPECTED OUTPUT = Total = Rp3050000 (totaldasar+totaldasar*0,1) lalu (totalakhir = totalakhir - 10000)
- ⁠ACTUAL OUTPUT = Correct
