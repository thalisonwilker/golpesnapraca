const fs = require('fs');

const dataDirSrc = "./data.js";

const attackTemplate = {
  "id": 1,
  "titile": "Urubu do PIX",
  "banner_url": "https://i.imgur.com/XqQZQ.jpg",
  "description": "Urubu do PIX é um golpe do Urubu, que causa dano ao oponente e aumenta o dano de seu próximo golpe.",
  "type": "normal",
  "tags": ["pix", "whatsapp"]
}

fs.readFile(dataDirSrc, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});