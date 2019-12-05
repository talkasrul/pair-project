## Layout Dasar

Buat folder baru dengan nama latihan-layout dan buat file baru dengan nama index.html di dalamnya. Tulislah kode berikut pada file masing - masing berkasnya:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Webpage</title>
    <style type="text/css">
        .header {
            background-color: #eee;
            min-height: 50px;
        }
        .content {
            background-color: #ddd;
            min-height: 500px;
        }
        .footer {
            background-color: #ccc;
            min-height: 50px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Logo Produk</h1>
    </div>
 
    <div class="content">
        <h2>Our Products</h2>
    </div>
 
    <div class="footer">
        <p>copyright 2018 My Page</p>
    </div>
</body>
</html>
```

Pada kode di atas, kita membuat 3 buah elemen utama di bawah `<body>`, yakni `<div>` dengan masing-masing class header, content dan footer. Pada `<div>` dengan class header, kita akan isi dengan logo dan menu halaman. Kemudian pada `<div>` dengan class content, kita isi dengan konten dari web kita nanti, yakni daftar artikel. Dan terakhir pada `<div>` dengan class footer, kita isi dengan teks copyright.

Pada bagian `<head>` kita telah mendefinisikan style untuk setiap `<div>`, di antaranya background-color untuk memberi warna latar agar kotak dari setiap elemen dapat kita lihat batas masing-masingnya. Kita juga menambahkan style min-height untuk mengatur tinggi minimum dari setiap elemennya. Setiap style kita atur menggunakan nama classnya.

Bila kita buka halaman html tersebut di browser, maka akan muncul seperti ini:

![](https://lh5.googleusercontent.com/38rwdEjwyYM8sA8Lg9gGGaYEipsaOE_cuUQB8jLWOGmk2RC7BkShYIPpKdEMbSDQG1eOK2RngeVM6BTmJ7kSVMnQawL1dkqk8q2kM1LwuQaeu-YqUK9Sffr15d3CARPuv0RaZWiC)

Setiap elemen `<div>` di atas menjadi baris layout. Karena `<div>` bersifat block, maka lebar dari elemennya akan menghabiskan ruang parent-nya ke samping. Bila kita ingin membuat layout boxed, yakni layout halaman dengan jarak pinggir di kiri dan di kanan, maka kita dapat menyimpan semua `<div>` tersebut di dalam satu `<div>` utama sebagai parent-nya.

Ubah kode HTML yang dicetak tebal pada bagian body sehingga menjadi seperti ini:

```html
<body>
    <div class="container">
    <div class="header">
        <h1>Logo Produk</h1>
    </div>
 
    <div class="content">
        <h2>Our Products</h2>
    </div>
 
    <div class="footer">
        <p>copyright 2018 My Page</p>
    </div>
    </div>
</body>
```

Kemudian pada tag `<style>` di bagian header, tambahkan CSS berikut untuk memberi style pada elemen `<div>` yang ber-class container:

```css
.container {
    width: 800px;
    margin: 0 auto;
}
.header {
    background-color: #eee;
    min-height: 50px;
}
```
Dengan menyimpan ketiga elemen `<div>` baris di dalam `<div>` utama, maka lebar dari setiap `<div>` anaknya akan mengikuti lebar elemen induknya.

![](https://lh5.googleusercontent.com/srN2ZroABZ5OTs-F4knk3JHee7OUjRy9BLpKFcNjTu8Inn_uJFw5BtFMahU6e0I7XsL2gjWbtBWUlRNjJAYD66xVa0_edYGztdFVkML3K_m4tKsMio4WvnXFpnV_DGAylptYkbDh)

Perbaharui kode HTML di dalam `<div class=”header”></div>` menjadi seperti ini:

```html
<div class="header">
<h1>Logo Produk</h1>
<div class="logo">
  <img src="https://devschool.id/resources/images/sample-logo.png">
</div>
<div class="menu">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</div>
</div>
```

Bila kita lihat hasilnya di browser, maka gambar dan list menu akan tampil seperti ini:

![](https://lh5.googleusercontent.com/9Y-HWhZE59YMLGcBm2ilTPmjkwUz2Glbyiu5v2x6_iiC6oOV8Yk1otDOfLaC2CGbN-NdVXQmcue4UXDVDojG_dng9WATuBw125yhG0uME0lnK9rKSVcbRBgRg6Mjgs87baDhN8qE)

Tambahkan kode CSS berikut pada tag `<style>` agar tampilannya menjadi rapi.

```css
.header {
    background-color: #eee;
    min-height: 50px;
    text-align: center;
}
.logo img {
    width: 200px;
}
.menu ul {
    padding: 0;
}
.menu ul li {
    display: inline-block;
}
.menu ul li a {
padding: 10px 20px;
text-decoration: none;
}
```

Pada CSS di atas, kita menambahkan 3 selector baru, yakni selector untuk elemen image pada .logo agar ukurannya tidak terlalu besar. Selain itu kita ubah mode display dari elemen `<li>` yang defaultnya block menjadi inline-block agar ditampilkan menyamping. Kita juga menambahkan padding pada setiap link menu dan membersihkannya dari garis bawah. Tampilan akhirnya akan menjadi seperti ini:

![](https://lh5.googleusercontent.com/jWb9RjKIP_mtRR1n0gBvao__ccwXeQtuY6VMk2nBMemc-umONF_zW1Ys9ax8Nz9pWdBZttdpGap9zGY5YkC5ZFgkxc-RgvvdLFiJycZ7IBNuQxVlXvNAieOeXSbrtusi3mGzqdk0)
