# DOM Request

Sebenarnya dengan DOM, kamu bebas berkreasi, apapun itu yang membatasi hanya rasa ingin tahu kamu **Besar** atau ~~tidak~~.

## Request

Untuk mendapatkan data dari API atau WEB Server pada DOM dapat menggunakan `FETCH - Request`

Secara dasar berikut merupakan methode pada request:

1. GET : Mengambil data
2. POST : Mengirim data
3. PUT / PATCH : Mengubah data
4. DELETE : Menghapus data

Berikut kode status pada request:

1. 200 : Request OK
2. 201 : Request create / terbuat
3. 403 : Request No Access / Wajib ada hak akses
4. 404 : Request tidak ditemukan
5. 500 : request Server Error
6. dll

### GET
```javascript
var url = 'https://wines-api.herokuapp.com/api/login'
var header = { method: 'GET' }
var request = new Request(url, body);

fetch(request)
  .then(response => {
    // cek aksi
  })
  .catch(error => {
    // cek aksi
  });
```

### POST
```javascript
var url = 'https://wines-api.herokuapp.com/api/login'
var header = { method: 'POST', headers: { token: 'kodeToken' } }
var body = { email: 'asrul@asrul.com', password: '123456' }
var request = new Request(url,  header, body);

fetch(request)
  .then(response => {
    // cek aksi
  })
  .catch(error => {
    // cek aksi
  });
```

### PUT
```javascript
var url = 'https://wines-api.herokuapp.com/api/user/1'
var header = { method: 'PUT', headers: { token: 'kodeToken' } }
var body = { email: 'asrul@asrul.com', name: 'Asrul H' }
var request = new Request(url,  header, body);

fetch(request)
  .then(response => {
    // cek aksi
  })
  .catch(error => {
    // cek aksi
  });
```

### DELETE
```javascript
var url = 'https://wines-api.herokuapp.com/api/user/1'
var header = { method: 'DELETE', headers: { token: 'kodeToken' } }
var request = new Request(url,  header, body);

fetch(request)
  .then(response => {
    // cek aksi
  })
  .catch(error => {
    // cek aksi
  });
```

---------

[x] var URL = request.url;
[x] var method = request.method;
[x] var credentials = request.credentials;
[x] var bodyUsed = request.bodyUsed;