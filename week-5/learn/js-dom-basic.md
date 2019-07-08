# DOM Dasar

DOM merupakan singkatan dari Data Object Model yang digunakan untuk memanipulasi apa saja yang ada dalam structur HTML, memanipulasi yang dimaksud berupa menambah, mengubah, atau menghapus elemen dalam HTML.

DOM akan dimuat oleh browser ketika semua file html sudah selesai dijalankan.

## Selector DOM

### Berdasarkan ID - `getElementById("namaId")`

```html
<div id="boxs">
</div>

<script>
  document.getElementById("boxs").innerHTML = "Halo DOM, ayo belajar"
</script>
```

### Berdasarkan Class `getElementsByClassName("namaClass")`
```html
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>

<script>
  document.getElementByClassName("box")[0].innerHTML = "Javascript"
  document.getElementByClassName("box")[1].innerHTML = "PHP"
  document.getElementByClassName("box")[2].innerHTML = "Python"
</script>
```

### Berdasarkan Tag `getElementsByTagName("namaTag")`
```html
<p> Daftar Warna </p>
<ul>
  <li></li>
  <li></li>
</ul>
<script>
  document.getElementByTagName("li")[0].innerHTML = "Merah"
  document.getElementByTagName("li")[1].innerHTML = "Putih"
</script>
```

Contoh mengambil data dari form input

```html
<form onsubmit="submitForm()">
    <label>
        Nama: <br />
        <input type="text" id="name">
    </label>
    <button type="submit">Cek Umur</button>
</form>

<script>
    function submitForm() {
        var name = document.getElementById('name').value;

        alert( "Halo " + name)
    }
</script>
```
