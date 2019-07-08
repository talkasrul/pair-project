# DOM Manipulasi

## Objective
Dapat melakukan manipulasi DOM dengan baik

## Learning

### Membuat element
Dengan DOM, kamu dapat membuat elemen baru menggunakan `createElement('namaElement')`, kamu juga dapat menambahkan attribute pada elemen tersebut dengan  `setAttribute('nama attribute', 'nilai attribute')`.

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