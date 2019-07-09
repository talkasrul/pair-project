# DOM Event

## Objective
Dapat membuat event DOM dengan baik

## Learning

### Membuat element dan menambah attribute
Dengan DOM, kamu dapat membuat elemen dengan event yang akan diset dengan 3 cara:

#### Pasang pada elemennya sendiri

```html
<button onclick="panggilFungsi()">Klik</button>
<script>
    function () {
        alert(input.value)
    }
</script>
```

#### Beri event pada selector

```html
<input type="text" id="inputNama">
<script>
    var input = document.getElementById('inputNama')
    input.onclick = function() {
        alert(input.value)
    }
</script>
```

#### Dengan Menambahkan `addEventListenert('namaevent', fungsiYangDijalankan)`
```html
<input type="text" id="inputNama">
<script>
    var input = document.getElementById('inputNama')
    input.addEventListener('click', function() {
        alert(input.value)
    })
</script>
```

No. | Nama Event | Keterangan
:----:|---------|-----------
1.| click | Ketika dlick bisa juga dipakai dengan `onclick`
2.| keyup | Ketika keyboard dilepas
3.| keydown | Ketika Keyboard ditekan
4.| mouseover | Ketika mouse melewati objek
5.| mouseenter | Ketika mouse ditekan
6.| mouseup | Ketika klik mouse dilepas
7.| dll |...

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

    img.addEventListener('mouseenter', function() {
        alert('Kamu menyentuh gambar orang ganteng itu')
    })
</script>
```