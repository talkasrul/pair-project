# Akses Array - Keluarga Cemara

30 Menit

```
Harta yang paling berharga adalah keluarga
Istana yang paling indah adalah keluarga
Puisi yang paling bermakna adalah keluarga
Mutiara tiada tara adalah keluarga

Selamat pagi Emak
Selamat pagi Abah
Mentari hari ini berseri indah

Terima kasih Emak
Terima kasih Abah
Untuk tampil perkasa bagi kami putra putri yang siap berbakti

Puisi yang paling bermakna adalah keluarga
Mutiara tiada tara adalah keluarga

Selamat pagi Emak
Selamat pagi Abah
Mentari hari ini berseri indah

Terima kasih Emak
Terima kasih Abah
Untuktampil perkasa bagi kami putra putri yang siap berbakti

Selamat pagi Emak
Selamat pagi Abah
Mentari hari ini berseri indah

Terima kasih Emak
Terima kasih Abah
Untuktampil perkasa bagi kami putra putri yang siap berbakti

Di hari berseri Indah

- BCL
```

**Panerangan** menikah dengan **Siti Alom** dan memiliki 6 Anak yaitu:
- Saparuddin
- Mian
- Elli
- Asrul
- Lan
- Asbi

**Saparuddin** menikah dengan **Santi** dan mendapatkan 4 oranga anak, yaitu: 
- Ridho
- Farel
- Kandar
- Hanif

## Soal

```javascript
var  family  = ['Panerangan', 'Siti Alom', 
                    [
                        ['Saparuddin', 'Santi', ['Ridho', 'Farel', 'Kandar', 'Hanif']],
                        ['Madan', 'Mian', ['Fais', 'Zahra', 'Habib']],
                        [null, 'Elli', ['Felisha', 'Daffa']],
                        ['Asrul', 'Anis', []],
                        ['Lan', null, []],
                        ['Asbi', null, []]
                    ]
                ]
```

Berdasarkan data array diatas tampilkan atau akses:

1. Carilah jumlah anak dari pernikahan **Panerangan** dan **Siti Alom**
```bash
Jumlah Anak Panerangan dan Siti Alom adalah 6 orang
```

**jawab:**

```javascript
console.log('Jumlah Anak Panerangan dan Siti Alom adalah ' + family[2].length + ' orang')
```

2. Siapa saja anak dari Saparuddin dan Santi
```bash
Anak ke-1: Ridho
Anak ke-2: Farel
Anak ke-3: Kandar
Anak ke-4: Hanif
```

**jawab:**

```javascript
var anak_saparuddin = family[2][0][2]
for(var i = 0; i < anak_saparuddin.length; i++) {
  console.log('Anak ke- '+ Number(i+1) + ' : ' + anak_saparuddin[i])
}
```
