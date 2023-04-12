// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------

// iki yol vardir

//! 1.Yöntem- ARRAY LITERAL (tercih dilen yöntem)

const yaslar = [30, 24, 55, 78, 12];

console.log(yaslar);
console.log(yaslar.length);

//!hata const keyword ü ile tanımlanmış bir diziyi tamamıyla değiştiremezsiniz, ancak tek tek değişikliğe izin verir
/// yaslar=[1,2,3,4]

//! Ikinci yöntem (ARRAY constructor)

const cars = new Array("BMW", "Mercedes", "Volvo");
console.log(cars);

//! 10 elemanli bir Array tanimlama
const sayilar = new Array(10); // ici bos on elemanli bir Array actik

console.log(sayilar);
sayilar[4] = 256;
sayilar[9] = "Ayse";

console.log(sayilar);

console.log("************************************");

const birth = 1979;
const isimler = [
  "Halit",
  "irfan",
  "Emirhan",
  2023 - birth,
  "Esra",
  true,
  23,
  yaslar,
];

console.log(isimler);

isimler[5]=false
isimler[8]=58
console.log(isimler);
console.log(isimler[3]);
console.log(isimler[7][2]); 
console.log(isimler[isimler.length-2][yaslar.length-3]); //55 // -2inci siradaki Arrayi nu sekilde cagirdik

//! kalici olarak degisiklik yapalim 2 yol var. Bu uzun yolu
console.log(isimler[7][2]); 
isimler[7][2] = isimler[7][2]-1

//!kisa yolu; 
console.log(--isimler[7][2]); //elemani bir eksilttik
console.log(isimler); //kalici eksilmis oldu


// const array2=[]
// array2[0]="Osman"

// ?=========================================================
// ?                DİZİYİ DEĞİŞTİREN METODLAR (MUTATOR)
// ?=========================================================

//* pop() dizinin son elemanini SILER, yazdirirsak sildigi elemani döndürür. 
const meyveler=["Elma", "Erik", "Armut", "Muz", "Kivi"]
meyveler.pop()

console.log(meyveler);
console.log(meyveler.pop());

//* shift: Dizinin ilk elemanini SILER, yazdirirsak sildigi elemani döndürür. 

console.log(meyveler.shift());
console.log(meyveler);


//* push() dizinin sonuna eleman EKLER, yazdirirsak dizinin güncel eleman sayisini döndürür. 

console.log(meyveler.push("Cilek", "Kavun", "karpuz"));
console.log(meyveler);

//* unshift dizinin basina eleman EKLER, yazdirirsak dizinin güncel eleman sayisini döndürür. 

console.log(meyveler.unshift("Ayva")); 
console.log(meyveler);


// * reverse() dizinin tamamini ters cevirir. 

console.log(meyveler.reverse());
console.log(meyveler[3].split("").reverse().join(""));

//! yukaridaki örnekte dizinin 3. elemanini (Armut) önce split yaptik ve bu sekilde stringi Array'e cevirdik. sonra onu reverse ile ters cevirdik sonra join yazarak list'i  tekrar stringe cevirdik.
console.log(meyveler);  

//! Fakat bu hali ile meyvelerdeki degisiklik kalici degil. splitten dolayi. kalici olsun istiyorsak yukaridakini meyveler[3] ile esitlemem lazimdi. 

//*splice() 1. parametre dizinin eleman ekleyeceğimiz index ini belirtir.
//*2. parametre=0 ise belirttiğim index teki elemanı sağa ittir, artık orada yeni yazdığım olsun
//*2.parametre=1 ise belirttiğim index teki elemanı sil üstüne yaz. 

meyveler.splice(2, 0, "Mango");
console.log(meyveler);

meyveler.splice(1,1,"Ananas");
console.log(meyveler);
