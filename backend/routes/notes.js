const express = require('express');
const { notOlustur, notlarGetir, notGetir, notSil, notGuncelle } = require('../controllers/notController');

const authKontrol=require('../middleware/authKontrol')


const router=express.Router()

router.use(authKontrol)

router.get("/", notlarGetir)

router.get("/:id", notGetir)

router.delete("/:id", notSil)
router.patch("/:id",notGuncelle)
router.post("/", notOlustur)
module.exports = router;