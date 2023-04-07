// * =======================================================
// *                   KARAR YAPILARI
// * =======================================================

// //************************ IF-ELSE ***********************

//! Dort İslem Hesap Makinası
//!----------------------------------------------------------

//? Prompt fonskiyonu ile console ortamında kullanıcıdan veri almak mümkündür.
console.log("-------------------------------------");
console.log("==IF-ELSE IF== 4 Islem Hesap Makinesi");
console.log("-------------------------------------");

// const sayi1 = +prompt("1. sayiyi giriniz"); //basina + koyarsak ifadeyi Number'a cevirir
// const islem = prompt("+,-,*,/ islemlerinden birini giriniz");
// const sayi2 = Number(prompt("2. sayiyi giriniz"));

// let sonuc = 0;

//! if'in icinde tek bir satirda komut vereceksek. Süslü parantez acmamiza gerek yoktur! Asagidaki ilk örnekte süslüyü kaldirdim ve calisti.

// if (islem == "+") sonuc = sayi1 + sayi2;
// else if (islem == "-") {
//   sonuc = sayi1 - sayi2;
// } else if (islem == "*") {
//   sonuc = sayi1 * sayi2;
// } else if (islem == "/") {
//   if (sayi2 != 0) {
//     sonuc = sayi1 / sayi2;
//   } else alert("payda sifir olamaz)");
// } else {
//   alert("yanlis islem girdiniz");
// }

// console.log(sonuc);

//* ÖRNEK

const yas = 12;
const cinsiyet = "erkek";
const saglik = true;

if (yas >= 20 && cinsiyet == "erkek" && saglik == true) {
  console.log("askerlik yapabilir");
} else {
  console.log("askerlik yapamaz");
}

//!ternary (2.yol)
yas >= 20 && cinsiyet == "erkek" && saglik == true
  ? console.log("askerlik yapabilir")
  : console.log("yapamaz");

console.log("-------------------------------------");
console.log("==SWITCH CASE== 4 Islem Hesap Makinesi");
console.log("-------------------------------------");

const s1 = +prompt("1. sayiyi giriniz"); //basina + koyarsak ifadeyi Number'a cevirir
const islem2 = prompt("+,-,*,/ islemlerinden birini giriniz");
const s2 = Number(prompt("2. sayiyi giriniz"));

let sonuc2 = 0;
switch (islem2) {
  case "+":
    sonuc2 = s1 + s2;
    break;

  case "-":
    sonuc2 = s1 - s2;
    break;

  case "*":
    sonuc2 = s1 * s2;
    break;

  case "/":
    if (s2 != 0) sonuc2 = s1 / s2;
    else alert("payda sifir olamaz");
    break;

  default:
    alert("YANLIS ISLEM");
    break;
}
console.log(`${s1} ${islem2} ${s2} = ${sonuc2}`);

//******************************* */ TERNARY

//? ornek: maasınız asgari ücretten düşük ve eşitse maaşınıza %25 zam yapılsın, değilse maaşınıza %10 zam yapılsın.

const asgariUcret = 8000;
const maas = +prompt("maasini gir");

const zamliMaas = maas <= asgariUcret ? maas * 1.25 : mass * 1.1;

console.log(zamliMaas);

//?Ornek:10 aylık maasınız borcunuzdan 5000 ve üstü kadar fazlaysa kredi alabilirsiniz, aksi durumda alamazsınız

const shuld = +prompt("borcunuzu giriniz");

const gehalt = +prompt("Lütfen maasini gir");

// const kredi = (gehalt*10) - shuld >= 5000 ?  "kredi alabilirsiniz" : "kredi alamaz"

console.log(
  gehalt * 10 - shuld >= 5000 ? "kredi alabilirsiniz 🥳" : "kredi alamaz😞 "
);
