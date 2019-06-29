# Algoritma - Ngatur Janji

30 Menit

![Gym](../../week-3/assets/gym.png)

Sekarang adalah tanggal 1 Juni 2019, dan pada hari ini Pak Asrul dan Pak Fahri sedang nge-Gym bareng di `Gym Center Senayan`. Pak Asrul nge-Gym setiap 3 hari sekali, tetapi Pak Fahri nge-Gym setiap 4 hari sekali.

> N/B: Juni 2019 sebanyak 30 hari

## Soal

Bantulah pak Asrul dan pak Fahri, untuk menentukan kapan saja mereka akan nge-Gym bareng lagi dengan membuatkan **algoritma** dalam bulan juni ini.

## Jawaban

```
STORE batas_awal = 1
STORE batas_akhir = 30

STORE jadwal_asrul
STORE jadwal_fahri

STORE janji

LOOPING dari batas_awal sampai batas_akhir
    DO batas_awal + 3
    STORE jadwal_asrul

    DO batas_awal + 4
    STORE jadwal_fahri
END

LOOPING jadwal_asrul
    LOOPING jadwal_fahri
        IF jadwal_asrul == jadwal_fahri
            STORE janji
        END
    END
END
```

**atau**

mulai tanggal 1 untuk pak Asrul dan pak Fahri, looping hingga 30
jika tgl_sekarang + 3 maka itu akan menjadi jadwal pak Asrul,
jika tgl_sekarang + 4 maka itu akan menjadi jadwal pak Fahri

bandingkan dengan melooping jadwal pak Asrul dan pak Fahri,
jika jadwal pak Asrul dan pak Fahri sama, maka itu adalah jadwal yang untuk janji