# Logic - Bersihkan Virus

60 Menit

![Virus](../../week-3/assets/virus.png)

Sebelumnya kita mengetahui bahwa pak Panerangan memiliki 6 orang anak dengan no hp berikut, yaitu:
- Saparuddin : 082161942902
- Mian : 085370812074
- Elli : 085372501814
- Asrul : 081211752502
- Lan : 082361937914
- Asbi : 082382804608

## Soal
Pak Panerangan tinggal berdekatan dengan semua anaknya di kecamatan yang sama sehingga mudah untuk ketemu jika rindu terjadi kecualli Asrul, karena Asrul bekerja dan menetap di Jakarta Selatan bersama istrinya. Saat Pak Panerangan sangat merindukan Asrul, pak Panerangan hendak menghubungi tetapi HPnya terkena virus yang sangat berbahaya yang merusak kontak telepon dengan tanda **X** dan **Y**, bantulah pak Panerangan untuk membersihkan virusnya sehingga dapat menghubugi anaknya Asrul.

```javascript
function bersihkanVirus(data) {
    // Your Code here
}

console.log(bersihkanVirus('Y0X8XX12YX1YY17XX5YXYX2XY5X0YX2XY')) // 081211752502
```

## Jawab

```javascript
function bersihkanVirus(data) {
    // Your Code here
  var temp = ''
  for(var i = 0; i < data.length; i++) {
    if(!(data[i] === 'X' || data[i] === 'Y')) {
       temp = temp + data[i]
    } 
  }
  return temp
}
```
