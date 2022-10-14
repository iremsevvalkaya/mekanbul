var express = require('express');
var router = express.Router();

const anaSayfa=function(req, res, next) {
    res.render('anasayfa', { title: 'Anasayfa' });
  };

const mekanBilgisi =  (req, res, next)=> {
  res.render('mekanbilgisi',{title:'Mekan Bilgisi'});
};
const yorumEkle =  (req, res, next)=> {
  res.render('yorumekle',{title:'Yorum ekle'});
};

module.exports= {
  anaSayfa,
  mekanBilgisi,
  yorumEkle,
  }
