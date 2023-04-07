// ? 0-25 FF / 26-45 DD / 46-65 CC / 66-75 BB / 76-90 BA / 91-100 AA
// ? 100'den büyük veya 0'dan kücük degerlerde hata mesaji verecektir.

let not = +prompt("Notunuzu girin");
let sonuc = 0;
if (not >= 0 && not <= 25) sonuc = "FF";
else if (not >= 26 && not <= 45) sonuc = "EE";
else if (not >= 46 && not <= 65) sonuc = "DD";
else if (not >= 66 && not <= 75) sonuc = "CC";
else if (not >= 76 && not <= 90) sonuc = "BB";
else if (not >= 91 && not <= 100) sonuc = "AA";
else if (not > 100 || not < 0) alert("Yanlis bir sayi girdiniz");

console.log(sonuc);

//? GIRILEN AY ISMINE KARSILIK GELEN SIRA NUMARASINI switch-CASE YAPISI KULLANARAK YAZINIZ
const ay = prompt("Bir ay adi girin");

let num = 0;

switch (ay) {
  case "ocak":
    num = 1;
    break;
  case "subat":
    num = 2;
    break;
  case "mart":
    num = 3;
    break;
  case "nisan":
    num = 4;
    break;
  case "mayis":
    num = 5;
    break;
  case "haziran":
    num = 6;
    break;
  case "temmuz":
    num = 7;
    break;
  case "agustos":
    num = 8;
    break;
  case "eylül":
    num = 9;
    break;
  case "ekim":
    num = 10;
    break;
  case "kasim":
    num = 11;
    break;
  case "aralik":
    num = 12;
    break;

  default:
    alert("Böyle bir ay adi yok");
    break;
}

console.log(`${ay} = ${num}`);

//? GIRILEN FARKLI ÜC TAMSAYININ TOPLAMINI CARPIMINI, EN KÜCÜGÜNÜ VE EN BÜYÜGÜNÜ YAZDIRAN BIR PROGRAM YAZINIZ.

const sayi1 = +prompt("1.tam sayiyi giriniz");
const sayi2 = +prompt("2. tam sayiyi giriniz");
const sayi3 = +prompt("3. tam sayiyi giriniz");
const islem = prompt("toplamak icin + carpmak icin * isaretine basiniz");

let sonuc1 = 0;

if (islem == "+") {
  console.log((sonuc1 = sayi1 + sayi2 + sayi3));
} else if (islem == "*") {
  console.log((sonuc1 = sayi1 * sayi2 * sayi3));
} else {
  alert("yanlis islem");
}

// ? Ternary ile bir sayinin tek mi cift mi oldugunu yazdirin.

const num1 = +prompt("Bir sayi giriniz");
sayicinsi = num1 % 2 == 0 ? "Cift sayi" : "Tek sayi";
console.log(`${num1} = ${sayicinsi}`);


