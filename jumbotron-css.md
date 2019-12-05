## Jumbotron

Kita akan menambahkan banner besar atau biasa disebut jumbotron, di antara header dan content. Tambahkan kode HTML berikut antara elemen `.header` dan `.content`:

```html
<div class="jumbotron">
    <h2>Welcome to My Homepage</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor necessitatibus quae voluptate explicabo architecto fugiat asperiores illo quibusdam qui mollitia, porro fugit. Illum sapiente modi, ut harum aliquam accusamus unde.</p>
</div>
```

Kemudian pada bagian style, tambahkan CSS berikut:

```css
.jumbotron {
    width: 100%;
    padding: 80px 40px;
    box-sizing: border-box;
    text-align: center;
    color: white;
    background-color: #aaa;
}
```

Hasil dari kode di atas akan tampil seperti ini:

![](https://lh5.googleusercontent.com/PVQgC9GSiu296p7zTc-3MFjsb9mIgfk2x0wV5nemvqST_VxHMxNRXRHB9nSVJQAcNTeECWONufrY-AX3mabLDqet1R-zL6MofKAZB2cAIYZ8KeDz6CYOul3YUWM-osZnqkvHGoUf)

Kita sekarang akan mengganti latar warnanya menggunakan gambar. Anda bisa mengambil gambar yang gratis di internet, salah satunya dapat Anda unduh dari website [https://unsplash.com]. Website tersebut menyediakan gambar-gambar berkualitas bagus dan gratis.

Pada tutorial ini, menggunakan gambar dari web Unsplash dengan url ini: [https://images.unsplash.com/photo-1515111293107-b0cd6448f5f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e4f56141064dbe63db663bb7a2c73b71&auto=format&fit=crop&w=1350&q=80]

Kita akan menggunakan langsung url tersebut pada CSS. Anda dapat mengunduhnya terlebih dahulu dan menyimpannya di dalam folder project, atau langsung menggunakan url tersebut. Bila Anda langsung menggunakan url tersebut, gambar tersebut nantinya hanya akan tampil bila terkoneksi dengan internet.

Tambahkan CSS berikut di bagian selector .jumbotron:

```css
.jumbotron {
    background-color: #aaa;
    background-image: url(https://images.unsplash.com/photo-1515111293107-b0cd6448f5f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e4f56141064dbe63db663bb7a2c73b71&auto=format&fit=crop&w=1350&q=80);
    background-size: cover;
}
```

Kita menambahkan dua buah property, yakni background-image dan background-cover. Hasil dari tambahan property tersebut akan tampil seperti ini:

![](https://lh5.googleusercontent.com/lygc-QuBcD9UKwJMQIoNLWsygs3qpOhe2uHaU6sD9nKk_CtQLq4MG3CT3Vv3YnKboO1j-RxtnTk5euOzyZkUeawRgbpOEpZuTFcxLYeLiLhMzVICQZUoojFpZOONCL-SGXZvQO1t)

Property background-size:cover akan membuat gambar latar ditampilkan hingga tidak ada area yang tidak tertutup gambar latar.

Namun kombinasi warna teks dan gambar latar seperti hasil di atas kurang bagus, karena ada area gambar yang warnanya sama dengan teks, sehingga teks tidak terbaca dengan jelas. Untuk mengakali ini ada dua strategi. Pertama, kita dapat edit dahulu gambar latarnya di aplikasi image editor dengan menambahkan layer transparan gelap sehingga warna gambarnya menjadi lebih gelap. Solusi kedua adalah dengan menambahkan layer transparan di HTML. Kita akan mencoba solusi kedua.

Tambahkan elemen .overlay pada bagian jumbotron seperti ini:

```html
<div class="jumbotron">
    <div class="overlay"></div>
    <h2>Welcome to My Homepage</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor necessitatibus quae voluptate explicabo architecto fugiat asperiores illo quibusdam qui mollitia, porro fugit. Illum sapiente modi, ut harum aliquam accusamus unde.</p>
</div>
```

Pada kode di atas kita menambahkan satu elemen `<div>` dengan nama class overlay. Elemen ini tidak memiliki konten. Kita akan menggunakannya untuk membuat semacam lapisan warna gelap yang agak transparan, dan kita posisikan di atas .jumbotron. Tambahkan CSS berikut:

```css
.jumbotron {
    background-size: cover;
    position: relative;
}
 
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.4;
}
```
Pertama-tama kita buat supaya position .jumbotron menjadi relative. Baru kita atur position .overlay menjadi absolute. Kita set .overlay dengan warna latar hitam dan transparansi atau opacity 0.4. Kita juga set width dan heightnya menjadi 100% dari ukuran jumbotronnya. Hasilnya akan jadi seperti ini:

![](https://lh5.googleusercontent.com/HrheBB93a5FKyYNwcI92LZS7OPRpcQMQl9-cstwv54Poqm0tkL8Ku66FGsgq_69D8p4tseIu0RaBmGw0PY1V63cjQI1vUyVKc_wyexm9Mn3rLbFde7JzagCK8iTFuqdqpBbyM30D)

Jumbotronnya sekarang nampak lebih gelap dari sebelumnya, karena tertutup oleh overlay. Anda dapat mengganti nilai property opacity agar lapisan gelapnya lebih tebal atau tipis. Nilai opacity berkisar antara 0 dan 1.

Namun jika kita perhatikan, teks di dalam .jumbotron juga tertutup overlay. Kita ingin agar teks tersebut ada di atas overlay, sehingga lebih mudah dibaca. Tambahkan CSS berikut:

```css
.jumbotron h2,
.jumbotron p {
    position: relative;
}
```

Dengan CSS di atas, elemen h2 dan p di dalam jumbotron akan naik ke layer di atas .overlay.

Terakhir, kita akan ganti font dari teks di jumbotron dengan jenis font lain yang lebih indah. Anda dapat membuka website [ https://fonts.google.com] dan memilih font mana yang akan digunakan. Pada tutorial ini kita akan menggunakan font dengan nama Raleway.

Klik ikon (+) di bagian kanan atas font yang ingin dipilih:

![](https://lh5.googleusercontent.com/b7hyqQcmwiDsxmrvpusipfvILx6QTAiqun7Dr-GP9ZaMTAJVSxJ7QRfNTKNIZYY0ws6xia-6TpqBgdQZ8_DGZBzxH3yzuAky8ViNRu9-J2IkovZgBLc3B49oNyLXtBgPjmMfmPnK)

Maka akan muncul panel di bagian bawah jendela. Klik panel tersebut sehingga muncul keterangan kode yang harus kita salin di dokumen html kita:

![](https://lh5.googleusercontent.com/J1Qm9xI5ype-oTo3c2Yjb0_i-K2BJaA0ZlAOGrhyFRAuaYg6zvuP7O1QMNyba2hwaDXkDiOfomf8xkGIgWq-ItSLnk4FbnbjJW9DWPsCU71i_XjBLmQu-m5l1KLoOa5Afci3zSSA)

Pertama salin kode `<link href=”... >` dan simpan di bagian atas `<head>` sebelum `<style>` :

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Webpage</title>
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
    <style type="text/css">
Kemudian kita dapat menambahkan kode font-family: 'Raleway', sans-serif; pada elemen yang ingin kita ganti fontnya. Misalnya saya akan pasang font tersebut pada .jumbotron:

.jumbotron {
    font-family: 'Raleway', sans-serif;
    width: 100%;
    padding: 80px 40px;
    box-sizing: border-box;
    text-align: center;
    color: white;
}
```

Maka tampilannya sekarang, semua konten teks di dalam jumbotron akan menggunakan font Raleyway.

![](https://lh5.googleusercontent.com/on1XMRn8U6x0A8yToPU2haXgZsGySqdpOIIFSNILZhJPhrwu8mSFmxaolTIgui1NOePVwt-izl4dJZ5PkaOv7hqzlLPr-TG1PWXvsl6QGy3W9rZAf8AZFz1cCw2KL2rOGtEQyrZ_)

