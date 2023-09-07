const express = require('express');
const app = express();
require('dotenv').config(); // .env dosyasındaki ortam değişkenlerini yükler
const NoteRoute = require("./routes/notes"); // Notlar rotasını içe aktarır
const kullaniciRoute = require("./routes/kullanici"); // Kullanıcı rotasını içe aktarır
const mongoose = require("mongoose"); // MongoDB ile iletişim kurmak için mongoose kütüphanesini içe aktarır

// Her gelen isteğin URL'sini ve HTTP metodunu günlüğe kaydeder
app.use((req, res, next) => {
  console.log(req.path, req.method);

  next();
});
// Gelen isteklerin JSON verilerini işlemek için bir ara yazılım ekler
app.use(express.json());

// MongoDB veritabanına bağlanma
mongoose
  .connect(process.env.MONGO_URI) // .env dosyasından MongoDB URI'sini alır
  .then(() => {
    console.log("MongoDB Connected");
    // Sunucu başlatma ve belirtilen portta dinlemeye başlama
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });

// "/api/notlar" yolunda gelen istekleri NoteRoute ile eşleştirir
app.use("/api/notlar", NoteRoute);
app.use("/api/kullanici", kullaniciRoute);