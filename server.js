const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// Middleware untuk parsing body form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Untuk file statis seperti CSS


app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Halaman Utama</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f7f7f7;
            margin: 0;
            padding: 0;
          }
          h1 {
            color: #333;
            margin-top: 50px;
          }
          .button {
            background-color: #ff66b2;
            color: white;
            padding: 15px 32px;
            font-size: 18px;
            border: none;
            cursor: pointer;
            border-radius: 8px;
            margin-top: 20px;
            transition: background-color 0.3s;
          }
          .button:hover {
            background-color: #ff3385;
          }
        </style>
      </head>
      <body>
        <h1>Hello, World!</h1>
        <a href="/form">
          <button class="button">Buka Form</button>
        </a>
      </body>
    </html>
  `);
});


app.get('/form', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Form Input</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #ffccf2;
            color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .form-container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 300px;
          }
          h2 {
            text-align: center;
            color: #ff66b2;
          }
          label {
            font-size: 16px;
            margin-bottom: 5px;
            display: block;
          }
          input[type="text"], input[type="email"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
          }
          input[type="submit"] {
            width: 100%;
            padding: 12px;
            background-color: #ff66b2;
            color: white;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          input[type="submit"]:hover {
            background-color: #ff3385;
          }
        </style>
      </head>
      <body>
        <div class="form-container">
          <h2>Form Input</h2>
          <form action="/submit" method="POST">
            <label for="name">Nama:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            
            <input type="submit" value="Kirim">
          </form>
        </div>
      </body>
    </html>
  `);
});

// Proses data form
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`
    <html>
      <head>
        <title>Terima Kasih</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f0f8ff;
            text-align: center;
            padding: 50px;
          }
          h1 {
            color: #2e8b57;
          }
          p {
            font-size: 18px;
            color: #333;
          }
        </style>
      </head>
      <body>
        <h1>Terima Kasih, ${name}!</h1>
        <p>Email yang Anda masukkan: ${email}</p>
        <a href="/">
          <button style="padding: 10px 20px; background-color: #ff66b2; color: white; border: none; border-radius: 8px; cursor: pointer;">Kembali ke Halaman Utama</button>
        </a>
      </body>
    </html>
  `);
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
