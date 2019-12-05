## Menbuat daftar produk

Sekarang kita akan mengisi bagian konten halaman. Bagian konten akan kita isi dengan daftar produk. Ubah kode bagian content menjadi seperti ini:

```html
<div class="content">
    <h2>My Articles</h2>
    <h2>My Products</h2>
 
    <div class="thumbnail">
        <img src="http://via.placeholder.com/250x150">
        <h2>Product 2</h2>
        <p>Rp 250.000</p>
    </div>
</div>
```

Kemudian pada bagian `<style>` tambahkan CSS berikut:

```css
.thumbnail {
    background-color: white;
    text-align: center;
    padding: 10px;
}
```
Hasil dari kode di atas akan nampak seperti ini:

![](https://lh5.googleusercontent.com/Q-by9xf4B1IkGSDx7La3nx93BsbDWmM7AK6y3WQopmuB9-JMreaaH7LIebFXPEoyVyiKWVxy8DHLivSVw6vricmiEnVyrzVbHbhxN-PcVAMWq9Fq-YTpwA9VWjiXUK5VDn0jA4Ux)

Kita ingin agar dalam satu baris, terdapat 3 buah produk yang ditampilkan. Sedangkan pada hasil kode yang sudah kita miliki, kita hanya memiliki satu buah produk yang memenuhi semua lebar baris. Oleh karena itu, kita harus mengatur width dari elemen .thumbnail agar dalam satu baris dapat masuk 3 buah produk.

Tambahkan baris kode CSS berikut pada bagian selector .thumbnail:

```css
.thumbnail {
    background-color: white;
    text-align: center;
    padding: 10px;
    width: 225px;
    margin: 10px;
}
```

Kita atur nilai width menjadi 225px dengan asumsi dari total lebar parent-nya yang 800px dapat diisi dengan tiga buah kotak thumbnail berukuran 225px. Selain itu kita juga menambahkan margin pada thumbnail agar jarak satu sama lain tidak berhimpitan. Hasil akhir dari pembaharuan kode di atas akan menjadi seperti ini:

![](https://lh5.googleusercontent.com/2kJfDtoOhBXa6K1oMT5z8vha75M0dTeMAB9ji6fZysxJHLUZSFw4USf83gDx9s4QdGOzOM7PDUY4-djj6QIhgbWl3NhcjeYQsAa7EFq_FlM1DShXr_TS89IhC9m8eDET-c4N33lm)

Dan bila kita menyalin elemen .thumbnail menjadi 3 buah, akan nampak seperti ini:

gambar1

Ternyata .thumbnail kedua dan ketiga akan ditampilkan ke bawah, meskipun width dari setiap thumbnail sudah dibuat lebih kecil. Hal ini terjadi karena sifat display:block dari elemen .thumbnail yang akan mengisi lebar dari parent-nya. Adapun ruang kosong di sebelah kanan dari setiap elemen .thumbnail setelah widthnya diperkecil akan otomatis menjadi margin dari elemen tersebut.

Tambahkan CSS berikut pada selector .thumbnail:

```css
.thumbnail {
    background-color: white;
    text-align: center;
    padding: 10px;
    width: 225px;
    margin: 10px;
    float: left;
}
.thumbnail img {
    width: 100%;
}
```

Pada `.thumbnail`, kita tambahkan property float:left sehingga ruang sisa dari setiap barisnya akan kosong dan diisi oleh elemen di bawahnya. Selain itu kita juga menambahkan selector baru yakni untuk elemen image yang ada di dalam `.thumbnail` agar ukuran widthnya mengikuti ukuran dari parentnya.

Hasil akhir dari pembaharuan kode kita akan tampil seperti ini:

![](https://lh5.googleusercontent.com/hB-1gRcc-IAIZbkHHplM6dU0WWJlBY78R1RrnI7d9WbjL5THjZGVzK4v60Kx49Y0qOoRQi5Bbo5WLkRGVluWlaj-yv7IZ3f_OG1KWxk4jYInmYwQUlprNRgmunLDrccV4w_3veqa)

Masalah selanjutnya yang harus kita tangani dari penggunaan float adalah membersihkan efek float. Bila Anda coba menyalin elemen .thumbnail menjadi 6 buah atau lebih, maka tampilannya akan seperti ini:

![](https://lh5.googleusercontent.com/OoVVx9Ai98G-c82QLpi_QGMPrrdWxgWCDUtLEuqmlYPZpVb-j27Toypis5FElvqMVdbeP2T5FLtiAjV1oaVtNH7QXgNoI8xrqSNqx4Wl05sY8wXwfbhtm9IFA5darkl2AGgj9JgE)

Seperti kita lihat, .thumbnail keluar dari kotak, dan teks footer naik mengisi ruang kosong di sebelah kanan .thumbnail terakhir. Untuk mengatasi hal ini, kita cukup menambahkan CSS overflow:auto pada parent dari .thumbnail, yakni pada elemen .content:

```css
.content {
    background-color: #ddd;
    min-height: 500px;
    overflow: auto;
}
```

Dengan demikian, efek float tidak akan mengenai elemen yang ada di bawahnya.

![](https://lh5.googleusercontent.com/fcUglH-zjQ-PYVEQMJQVWu_bMeX5qts16ZqUC4p6P5V4TuE5Tq4hKNNtsmrNWRzlQSkX-sqLEgrKYWx98qhdj--lGsVJbBbJc1FJu9NwN8eUjxgr6UTOnADbb06OqSwtY5wf1t46)

Terakhir kita tinggal merapikan konten untuk footer, dengan menambahkan padding dan rata tengah. Tambahkan CSS berikut pada bagian selector .footer:

```css
.footer {
    background-color: #ccc;
    min-height: 50px;
    padding: 20px;
    text-align: center;
}
```

![](https://lh5.googleusercontent.com/FP-ZUK6p2bohQqN97VCdqboAWsyMJzwfGQKG9fHRI4Vtd71TjtYcrQMwXnpv1R06f_L41tB004L4-2piJ2TnK4BtBeZUlaOkZO2v1PVLoUk7EMe-A6Ax07YMPWHPDMg3x38KTMXU)

