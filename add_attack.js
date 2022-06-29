const fs = require('fs');

const dataDirSrc = "./data.js";

const attackTemplate = {
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
  const dataObj = JSON.parse(data);
  let lastAttack = dataObj[dataObj.length - 1]
  let id = 1
  if(lastAttack){
    id = lastAttack.id + 1
  }
  attackTemplate.id = id;
  dataObj.push(attackTemplate);
  fs.writeFile(dataDirSrc, JSON.stringify(dataObj, null, 2), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Attack ${id} added!`);
  });
});