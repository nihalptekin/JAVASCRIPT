// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************

// ? ekrana on kere merhaba yazdirin
for (let num = 1; num <= 10; num++) {
  console.log(num, "MERHABA");
}

//? 1'DEN N'E KADAR OLAN SAYILARIN TOPLAMI

const N = +prompt("Lütfen bir sayi giriniz");

let toplam = 0;
for (let i = 1; i < N; i++) {
  toplam = toplam + 1;
  console.log(toplam);
}

//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

const sayi = +prompt("Asallik kontrolü icin bir sayi girniz");
let asal = true;

for (let i = 2; i < sayi; i++) {
  if (sayi % i == 0) {
    asal = false;
  }
}

console.log(asal ? "Asaldir" : "Asal degildir");

//! ASAL FALSE ISE DERKEN BASINA BIR ÜNLEM KOYMAMIZ YETERLI
// console.log(!asal ? "Asaldir": "Asal degildir");

// ! IKINCI ALTERNATIF
// const sayi = +prompt("Asallik kontrolü icin bir sayi girniz");
// let asal = "asaldir";

// for (let i = 2; i < sayi; i++) {
//   if (sayi % i == 0) {
//     asal = "asal degildir";
//   }
// }

// console.log(asal);

// //? Ornek: 0-100 Arasinda n adet rasgele tamsayi sayi ureten kodu
// //? for dongusu ile yaziniz..

for (let i = 1; i <= 7; i++) {
  const rastgele = Math.round(Math.random() * 100);
  console.log(rastgele);
}
// **************************** WHILE ****************************
//*ORNEK1: while için 1-100  arasında bir sayı giriniz. aksi durumlarda error msj ı verip, tekrar sayı isteyiniz

// let number = +prompt("While icin 1-100 arasinda sayi giriniz.");

// while (number < 1 || number > 100) {
//   console.error("number 1-100 arasinda olmali");
//   number = +prompt("tekrar sayi girmeyi deneyin");
// }

// console.log("tebrikler", number);

//! while daki şart true old sürece altındaki süslü işler, false old anda süslünün dışına çıkılır

// **************************** DO WHILE ****************************
//*ORNEK1: while için 1-100  arasında bir sayı giriniz. aksi durumlarda alert verip, tekrar sayı isteyiniz

// şarta bakmadan ilk etapta do nun içindeki istek yapılır, sonrasında while içi true old sürece do içindeki istek yapılmaya devam edilir


// let number1;

// do {
//     number1 = +prompt("Do While icin 1-100 arasinda sayi giriniz.");
//     alert(number1)

    
// } while (number1 < 1 || number1 > 100);

// console.log("döngüden cikiniz");


//? ORNEK: Kullanicidan  Vize ve Final notlarini isteyen ve
//? vize'nin %40 + final'in %60 alarak gecme notunu hesaplayan programi
//? yaziniz. Program her hesaplamadan sonra tekrar başkası için hesaplama yapilmak
//? istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not
//? isteyecek ve islemleri tekrar edecektir.

let devam;
do { let vize = +prompt("Vize notunu isteyiniz")
     let final=+prompt("Final notunu isteyiniz")

     let gecmeNotu=vize*0.4+final*0.6
     console.log(gecmeNotu);
     devam=prompt("Devam etmek istiyorsaniz e/E girin")
    
} while(devam.toUpperCase() == "E");

console.log("Döngüden ciktiniz");

//?Klavyeden q karakteri girilene kadar sayi girisi yapan bir programi döngü kullanarak yaziniz. 
let sayi1;
do {
    sayi1=prompt("lütfen sayi giriniz")


}while (sayi1 != "q"); 
console.log("bitti");
