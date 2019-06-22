# Perulangan 

50 Menit

## Instruksi
Kentang yang akan dimasak oleh ibu **Anis** sebanyak 15 kentang, tetapi kentang yang ada dalam plastik sebanyak 26 kentang. Bantulah ibu **Anis** untuk mengupas kentang hanya sebanyak yang ingin dimasak saja.
Buatlah program untuk membantu ibu **Anis** mengupas kentang untuk hari ini 15 dari 26 kentang dan seterusnya yang belum ditentukan banyak yang akan dikupas dari berapa banyak kentang.

Selesaikan soal berikut menggunakan for dan while

## Soal

```javascript
function kupasKentang(jlhDikupas, jlhKentang) {
// Jawab disini
}
```

```javascript
//Test Code
console.log(kupasKentang(15, 26))  
```

```bash
Kupas kentang ke  1
Kupas kentang ke  2
Kupas kentang ke  3
Kupas kentang ke  4
Kupas kentang ke  5
Kupas kentang ke  6
Kupas kentang ke  7
Kupas kentang ke  8
Kupas kentang ke  9
Kupas kentang ke  10
Kupas kentang ke  11
Kupas kentang ke  12
Kupas kentang ke  13
Kupas kentang ke  14
Kupas kentang ke  15
Selesai mengupas Kentang
```

```javascript
//Test Code
console.log(kupasKentang(0, 26))  
```

```bash
Selesai mengupas Kentang
```

```javascript
//Test Code
console.log(kupasKentang(15, 0))  
```

```bash
Jumlah kentang kurang, beli dahulu
```

## Jawaban

1. Dengan for

```javascript
function kupasKentang(jlhDikupas, jlhKentang) {
  for(var i = 1; i <= jlhKentang; i++) {
    if(i > jlhDikupas) {
      break;
    } else {
      console.log('Kupas kentang ke ', i)
    }
  }

  if(jlhKentang < jlhDikupas) {
    return "Jumlah kentang kurang, beli dahulu"
  }
  return 'Selesai mengupas Kentang'
}
```
