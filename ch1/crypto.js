// const crypto =  require('crypto');
//
// const secret = "Muhammed";
//
// const hash = crypto.createHmac('sha256',secret)
// .update("Welcome in NodeJS tutorial").digest('hex');
//
//
// console.log(hash);



// const crypto =  require('crypto');
//
// const cipher = crypto.createCipher("aes192",'Muhammed');
// var encrypted = cipher.update("Welcome in NodeJS tutorial" ,'utf8','hex');
// encrypted += cipher.final('hex')
//
// console.log(encrypted);


const crypto =  require('crypto');

const decipher = crypto.createDecipher("aes192",'Muhammed');
var encrypted = "5f55cef6c9a335e4828f7c800b6d4d1e0c1d50be01bfacff3a7c0e51fff9ed9a";
var decrypted = decipher.update(encrypted  ,'hex','utf8');
decrypted += decipher.final('utf8');

console.log(decrypted);
