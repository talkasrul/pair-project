# DOM Manipulasi

## Objective
Dapat melakukan manipulasi DOM dengan baik

## Learning

### Membuat element dan menambah attribute
Dengan DOM, kamu dapat membuat elemen baru menggunakan `createElement('namaElement')`, kamu juga dapat menambahkan attribute pada elemen tersebut dengan  `setAttribute('nama attribute', 'nilai attribute')`.

Untuk memasukkan elemen ke element lain dengan kode berikut `namaInduk.appendChild(namaAnak)`

Perhatikan dan cobakan contoh berikut.

```html
<div id="lembar-kerja"></div>

<script>
    var img = document.createElement('img');
    var lembarKerja = document.getElementById('lembar-kerja')

    img.setAttribute('src', 'https://avatars2.githubusercontent.com/u/15111402?s=460&v=4')
    img.setAttribute('width', '200')
    img.setAttribute('height', '200')
    
    lembarKerja.appendChild(img)
</script>
```

### Mengedit Element

Mengganti elemen pada html

```html
<div id="place">
    <h2 id="old">Old Text<h2>
</div>
<script>
    var newEl = document.createChild('h3')
    var text = document.createTextNode('New Text')
    newEl.appendChild('text')

    var old = document.getElementById('old')
    var place = document.getElementById('place')

    place.replaceChild(newEl, old)
</script>
```

### Menghapus Element

Menghapus elemen pada html

```html
<div id="place">
    <h2 id="ada">ada Text<h2>
    <h2 id="ilang">Ilang Text<h2>
</div>
<script>
    var ilang = document.getElementById('ilang')
    var place = document.getElementById('place')
    place.removeChild(ilang)
</script>
```