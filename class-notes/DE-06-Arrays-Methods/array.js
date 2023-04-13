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


//*sort(), string ifadelerde alfabetik sıralar(ascıı değerlerine göre)
//* sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonunu (a-b>0 önce b yi yaz gibi) dizinin her bir elemanına uygular. Bu sayade küçük sayılar ile büyük sayıları yer değişirerek sıralama işlemini gerçleştirir.


meyveler.sort()
console.log(meyveler);

const number=[3, 5, 1, 35, 10, 22, 55, 77, 231]
number.sort()
console.log(number); //!bu sekilde yazarsak düzgün siralamaz

number.sort((a,b)=>a-b)
console.log(number);


//? ===========================================================
//?  DİZİ ERİŞİM METOTLARI (diziyi değiştirmezler)
//? ===========================================================

const sayilar1=[3, 5, 2, "2", "uc", 2, "bes", 5]

//* includes********
console.log(sayilar1.includes("5"));
console.log(sayilar1.includes(5));

//*** */ indexOf */, lastindexOf()****
console.log(sayilar1.indexOf("2"));
console.log(sayilar1.indexOf(2, 3)); //5  ucuncu indexten sonraki 2'yi bul
console.log(sayilar1.lastIndexOf(5));//7


//* kullanıcıdan sayı isteyin. girilen sayının hem string hem number hali sayılar dizisinde var mı araştır, varsa index ini döndür



const sayiString= prompt("Lütfen bir sayi giriniz")//"2"
const sayiNumber=Number(sayiString)// 2

let varMi= false;
if(sayilar1.includes(sayiString)){
  console.log("aradiginiz sayi dizide var ve indexi:", sayilar1.indexOf(sayiString) );
  varMi=true
}


if(sayilar1.includes(sayiNumber)){
  console.log("aradiginiz sayi dizide var ve indexi:", sayilar1.indexOf(sayiNumber) );
  varMi=true
}

if(varMi==false){
  console.log("aradiginiz sayi bulunamadi");
}

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.join("x")=>varolan virgül+boşluk sil, elemanların aralarına x koy(mesela join parantezinde boşluk yerine 2 varsa her eleman arasına 2 koy demek) 
//* split(" ")=>string i boşluklardan ayırır,boşlukları silip virgül+boşluk yapar ve yeni dizi döndürür.orijinal diziyi değiştirmez

console.log(sayilar1.join(","));
console.log(sayilar1.join("A"));

// const meyveler=["Elma", "Erik", "Armut", "Muz", "Kivi"]

//* dizinin ikinci elemanini tersten String olarak yazdir. 

console.log(meyveler[2].split("").reverse().join(""));

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

console.log(sayilar1.toString());


//****** */ slice******

const arabalar=["bmw", "mercedes", "audi", "ferrari", "lamborgini"]

console.log(arabalar.slice(3));
console.log(arabalar.slice(1,3));
console.log(arabalar.slice());

//! diziyi kopyalamak içinde kullanılır
const arabalar2 = arabalar.slice()

console.log(arabalar2);

//********** */ concat*****
const kisiler=["özlem", "esra","nihal","fatih","hüseyin"]
const rakamlar=[1,2,3,4,5,6]


const birlesik=kisiler.concat(rakamlar, true, "halit", "emirhan", ["irfan", "yunus"], [["a","b","c"]])

console.log(birlesik);

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.
const yas=[18, 23, 35, 44, 57, 89, 15]

console.log(yas.every((a)=> a>=18));
//! 1 tane bile istedigim sarta uymayan varsa false döndürür.


//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna (bizim yazdığımız fonksiyon) gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.
console.log(yas.some((a)=> a>70 ));//true
console.log(yas.some((a)=> a>90 ));//false