# Percabangan 

45 Menit

## Instruksi
Pada saat memasak, ibu **Anis** selalu memperhatikan baju yang sedang ia pakai, jika sedang memakai warna yang mudah kotor maka ibu **Anis** selalu memakai celemek agar bajunya tidak terlihat kotor dan bergetah.
Ibu *Anis* mendaftarkan warna yang mudah kotor sebagai berikut:
1. Putih
2. Kuning
3. Hijau Muda
4. Biru Muda
5. Pink
6. Orange

Selesaikan soal berikut menggunakan if-else dan switch case

## Soal

```javascript
function checkBaju(str) {
// Jawab disini
}

//Test Code

console.log(checkBaju('merah'))   // Tidak Pakai Celemek
console.log(checkBaju('putih'))   // Pakai Celemek
console.log(checkBaju('kuning'))  // Pakai Celemek
console.log(checkBaju('hijau'))   // Tidak Pakai Celemek
```

## Jawaban 

1. Dengan if else 

```javascript
function checkBaju(str) {
  if (str == 'putih' || str == 'kuning' || str == 'hijau muda' || str == 'biru muda' || str == 'pink' || str == 'orange' ){
      return('pakai Celemek')
  } else {
      return('tidak pakai celemek') 
  }
}
```

2. Dengan Switch Case

```javascript
function checkBaju(str) {
  var hasil = ''

  switch (str) {
    case 'putih':
      hasil = 'Pakai Celemek'
      break;
    case 'kuning':
      hasil = 'Pakai Celemek'
      break;
    case 'hijau muda':
        hasil = 'Pakai Celemek'
        break;
    case 'biru muda':
      hasil = 'Pakai Celemek'
      break;
    case 'pink':
      hasil = 'Pakai Celemek'
      break;
    case 'orange':
      hasil = 'Pakai Celemek'
      break;
    default:
      hasil = 'Tidak Pakai Celemek'
      break;
  }
  return hasil
}
```
