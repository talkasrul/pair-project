# Array Multidimensi

Multidimensional array* (array multidimensi) adalah sebuah array yang berisikan array lagi didalamnya. Konsepnya penggunaannya sama dengan array biasa (satu dimensi), hanya saja jumlah indeks yang digunakan saat mengakses nilai didalam array adalah sebanyak dimensi dari array tersebut.

Contoh array multidimensi antara lain diagram kartesius dan matriks. Diagram kartesius dan matriks adalah array multidimensi yang sama-sama membutuhkan koordinat untuk mengakses nilai didalamnya.

```
(y)
4 |       *
3 |     *
2 |   *
1 | *
  + - - - - (x)
0   1 2 3 4

Diagram kartesius adalah contoh array 2 dimensi. Setiap titik pada diagram di atas memiliki koordinat (x,y) tertentu yaitu (1,1), (2,2), (3,3), dan (4,4).
```

**berikut contoh array 2 dimensi pada JavaScript dan cara penggunaannya**

```javascript
// cara deklarasi array 2 dimensi kosong
var arr2D = [[]];

// contoh array 2 dimensi
var arr2D = [ [1,2], [3,4], [5,6] ];
var murid = [ ['Budi', 'SD 1 Cicayur'], ['Suci', 'SD 23 Beji'] ];

// cara mengakses nilai didalam array 2 dimensi
console.log(arr2D[0]);    // [1,2]
console.log(arr2D[0][1]); // 2
console.log(murid[1]);    // ['Suci', 'SD 23 Beji']
console.log(murid[1][1]); // 'SD 23 Beji''

// array 2 dimensi dengan built-in functions
arr2D.push([7,8]);        // arr2D = [ [1,2], [3,4], [5,6], [7,8] ]
arr2D[1].push(0);         // arr2D = [ [1,2], [3,4,0], [5,6], [7,8] ]
arr2D[0].pop();           // arr2D = [ [1], [3,4,0], [5,6], [7,8] ]
arr2D[2].pop();           // arr2D = [ [1], [3,4,0], [5], [7,8] ]
```
