## Membuat Dropdown Menu

Misalkan kita ingin bila menu About di header disorot pointer mouse, dia akan menampilkan submenu, dan bila pointer dijauhkan, sub menunya disembunyikan kembali. Untuk membuat fitur tersebut, kita membutuhkan property position untuk mengatur tata letak sub menunya, dan juga property display untuk menampilkan dan menyembunyikan submenu.

Tambahkan elemen html berikut di bagian .menu di header:

```html
<div class="menu">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a>
            <ul class="submenu">
                <li><a href="#">CV</a></li>
                <li><a href="#">Education</a></li>
                <li><a href="#">Portfolio</a></li>
            </ul>
        </li>
        <li><a href="#">Contact</a></li>
    </ul>
</div>
```

Kemudian tambahkan CSS selector baru di bagian style:

```css
ul.submenu {
    background-color: #eee;
    border: 1px solid #ccc;
    text-align: left;
}
```

Kita menambahkan elemen `<ul>` baru di dalam list menu About. Kemudian kita juga menambahkan style agar submenu tersebut tampil dengan latar warna dan border. Hasilnya akan nampak seperti ini:

![](https://lh5.googleusercontent.com/zsgO_miQUcZklegHwGrv4vhp3LJoXrwJR-QD2GuUFDbYI485Z2-4ot2MwshC3KCjFzf9Zhfv-sKW2G_CaTEcR2c08CfShCScgYeQdD1qTFpRcY_rTPEIKTX7ki6G8251H0YvC-yH)

Masih belum sesuai dengan yang kita harapkan karena seharusnya list sub menunya tampil ke bawah, bukan ke samping. Hal ini terjadi karena pada bagian sebelumnya kita memberi style pada elemen `<li>` agar ditampilkan menyamping dengan property display:inline-block, sehingga submenu yang juga menggunakan tag `<li>` akan terkena dampaknya. Untuk itu kita tambahkan style untuk list yang khusus ada di dalam .submenu agar ditampilkan dengan display:block lagi:

```css
ul.submenu li {
    display: block;
}
ul.submenu li a {
    display: block;
    padding: 5px 10px;
}
```

Dengan demikian tampilan list sub menunya sekarang ditampilkan ke bawah.

Namun posisinya masih tumpang tindih dengan menu utama. Kita akan gunakan property position:absolute pada .submenu agar ia dapat diposisikan tidak mengikuti layout bawaannya. Pada bagian selector ul.submenu yang telah kita buat sebelumnya, tambahkan style berikut:

```css
ul.submenu {
    background-color: #eee;
    border: 1px solid #ccc;
    text-align: left;
    position: absolute;
    top: 20px;
    left: 0;
}
```

Tampilan akhirnya akan jadi seperti ini:

![](https://lh5.googleusercontent.com/Ep6E4MS2GLGHymYcXBMTlN8bHQluOGyFKTfevKshFXolRewyDiM-MSp7IFF_qpTd1gPAHPQ2R5PDPAYojGeATptjYCuutwX_Y8CYVnYNGF5OlFwemG9BTpTu-YiM_tTCsNygJyT_)

Seperti yang kita duga, posisinya akan relatif dari jendela browser, bukan dari parent-nya yaitu `<li>` untuk About. Hal ini terjadi karena saat ul.submenu diberi property position:absolute, dia akan naik satu layer/lapis ke atas dari elemen lain. Dan saat property top dan leftnya diatur, dia akan memposisikan diri dari elemen parent yang lapisannya sama, dalam kasus ini yaitu jendela browser.

Kita ingin agar dia relatif dari parent `<li>`. Maka elemen `<li>` harus kita angkat juga satu lapis ke atas, menggunakan property position:relative. Tambahkan property tersebut pada selector .menu ul li:

```css
.menu ul li {
    display: inline-block;
    position: relative;
}
```

Hasilnya, `.submenu` kita sekarang akan diposisikan relatif dari parent `<li>`.

![](https://lh5.googleusercontent.com/U61sO_HNzjUVJoNGMjyLUc16BE1qWH4BEYn8-VTtWso9rpAvYOc18rQt3azn-jk9g1GfHNCodBG9GT2wZVmnBDbPw-iHSFlWMOScuNa1P8Dx2yNgw5UHsKAVDb0NkZ7L62dlaHrL)

Terakhir, kita akan sembunyikan .submenu dan hanya menampilkannya bila pointer mouse berada di atas menu About. Tambahkan CSS berikut pada style:

```css
ul.submenu {
    background-color: #eee;
    border: 1px solid #ccc;
    text-align: left;
    position: absolute;
    top: 20px;
    left: 0;
    display: none;
}
.menu ul li:hover ul.submenu  {
    display: block;
}
```

Kita mengubah nilai default property display dari elemen ul.submenu menjadi none, sehingga dia tidak akan ditampilkan di browser. Kemudian kita membuat selector baru .menu > ul > li:hover ul.submenu yang artinya pilih ul.submenu yang ada di bawah li yang dihover oleh mouse. Kita ubah property displaynya menjadi block. Dengan demikian, ul.submenu akan ditampilkan hanya bila parent `<li>` nya di-hover mouse.
