const NotModel = require("../models/notmodels");
const mongoose = require("mongoose");

// 1. notOlustur: Yeni bir not oluşturur ve veritabanına kaydeder.
const notOlustur = async (req, res) => {
    const { baslik, aciklama } = req.body;
    try {
        const kullanici_id = req.kullanici._id
        // MongoDB modelini kullanarak yeni bir not oluşturuyoruz ve kaydediyoruz.
        const not = await NotModel.create({ baslik, aciklama, kullanici_id })

        // Başarı durumunda HTTP 200 yanıtıyla oluşturulan notu JSON olarak gönderiyoruz.
        res.status(200).json(not);
    } catch (error) {
        // Hata durumunda HTTP 400 yanıtıyla hata mesajını JSON olarak gönderiyoruz.
        res.status(400).json({ hata: error.message });
    }
};

// 2. notlarGetir: Tüm notları veritabanından alır ve tarihe göre sıralar.
const notlarGetir = async (req, res) => {
    const kullanici_id = req.kullanici._id

    const notlar = await NotModel.find({ kullanici_id }).sort({ createdAt: -1 })

    res.status(200).json(notlar)
};

// 3. notGetir: Belirli bir notun ayrıntılarını ID'ye göre alır.
const notGetir = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Geçersiz ID: ${id}`);
    try {
        // Verilen ID'ye sahip notu MongoDB'den alıyoruz.
        const not = await NotModel.findById(id);
        // HTTP 200 yanıtıyla notu JSON olarak gönderiyoruz.
        res.status(200).json(not);
    } catch (error) {
        // Hata durumunda HTTP 400 yanıtıyla hata mesajını JSON olarak gönderiyoruz.
        res.status(400).json({ hata: "Not bulunamadı" });
    }
};

// 4. notSil: Belirli bir notu ID'ye göre siler.
const notSil = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Geçersiz ID: ${id}`);
    try {
        // Verilen ID'ye sahip notu MongoDB'den silip sildiğimiz notu döndürüyoruz.
        const not = await NotModel.findOneAndDelete({ _id: id });
        // HTTP 200 yanıtıyla silinen notu JSON olarak gönderiyoruz.
        res.status(200).json(not);
    } catch (error) {
        // Hata durumunda HTTP 400 yanıtıyla hata mesajını JSON olarak gönderiyoruz.
        res.status(400).json({ hata: "Not bulunamadı" });
    }
};

// 5. notGuncelle: Belirli bir notu ID'ye göre günceller.
const notGuncelle = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Geçersiz ID: ${id}`);
    try {
        // Verilen ID'ye sahip notu MongoDB'den güncelleyip güncellenmiş notu döndürüyoruz.
        const not = await NotModel.findOneAndUpdate(
            { _id: id },   // Belirli bir notu ID'ye göre bulur.
            { ...req.body }, // Güncellenecek notun yeni verilerini içerir. 
            { new: true }   // Güncelleme işlemi tamamlandığında güncellenmiş notun son durumunu döndürür.
        );
        // HTTP 200 yanıtıyla güncellenen notu JSON olarak gönderiyoruz.
        res.status(200).json(not);
    } catch (error) {
        // Hata durumunda HTTP 400 yanıtıyla hata mesajını JSON olarak gönderiyoruz.
        res.status(400).json({ hata: "Not bulunamadı" });
    }
};

// İşlevleri dışa aktarıyoruz, böylece başka bir dosyadan kullanabiliriz.
module.exports = { notOlustur, notlarGetir, notGetir, notSil, notGuncelle };
