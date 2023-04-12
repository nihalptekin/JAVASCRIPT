// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRİNG METHODS******");

//! 1 klasik yöntemle tanimlanan String ilkeldir. (primitive)
const str1="clarusway"
const str2="hello"
const str3="all the world"
console.log(str2+str3, typeof(str2+str3));
// console.log(str2[0]);  hellonun ilk harfi
console.log(str2[str2.length-1]);  
// en sondaki harfi almak icin length yazip -1'inci eleman dedik

//! 2-String constructor ile tanimlanan strig non-primitive (ilkel olmayan)dir.

const str4= new String("yeni bir String")
console.log(typeof str4);

// hersey object clasindan Gelir. Bu stringin type'i bu sebeten object oldu. 
//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//? Ek Açıklama için : https://javascript.info/primitives-methods

// *=========================================================
// *               concat() immutable=değiştirmez
// *=========================================================

let s1="hello";
const s2="world";
console.log(s1.concat(s2));
console.log(s1);
const s3= s1.concat(s2);
console.log(s3);

//! orijinal degerler degismez assigning ile kalici degistirebilirsiniz

// *=========================================================
// *    toUpperCase() toLowerCase() immutable=değiştirmez
// *=========================================================

const myName="Ashley Miller"

console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

//! toLocaleUpperCase("tr")= Türkçe büyüt demek  boş bırakınca  eng (ingilizce) karakterlere uygun büyütebiliriz


console.log(myName.toLocaleUpperCase("tr"));

//? ORNEK: iki string'i esit veya degil diye kiyaslayarak sonucu donduren fonksiyonu yaziniz.
const esitMi=(str1, str2)=>str1.toLocaleUpperCase()==str2.
toLocaleUpperCase() ? "esittir":"esit degildir"

console.log(esitMi("STRASSE", "Straße"));


// *=========================================================
// *    charAt()
// *=========================================================

const s4="primitive \n veri tiplerinin \n property ya \n da methodu olmaz"
console.log(s4);

console.log(s4.charAt(5)); //t  0'dan baslar
console.log(s4.charAt(9)); //t  0'dan baslar
console.log(s4.charAt()); //t  0'dan baslar
console.log(s4.charAt(s4.length-1)); //t  0'dan baslar


// *=========================================================
// *    includes()- case sensitive (büyük kücük harfe duyarli)
// *=========================================================

const kelime="to be or not to be, that is The questions."

console.log(kelime.includes("TO BE"));//false
console.log(kelime.includes("to be"));//true
console.log(kelime.includes("quest"));//true
console.log(kelime.includes(" "));//true
console.log(kelime.includes("to be",14));//false
console.log(kelime.toUpperCase().includes("TO BE"));//true

//! NOT: incase sentive kullanmak icin kelime baslangicta kucuk veya
//! buyuk harfe cevirilerek arama yapilabilir.

// *=========================================================
// *   indexOf()- case sensitive (büyük kücük harfe duyarli)
// *=========================================================

const kelime1= "to be or not to be, that is The questions.";
console.log(kelime1.indexOf("be"));
console.log(kelime1.lastIndexOf("be"));
console.log(kelime1.lastIndexOf("the"));
console.log(kelime1.lastIndexOf("TO BE")); // eger cümlenin icinde yoksa -1 döndürür
console.log(kelime1.indexOf("be", 4)); //4'üncü indexten sonraki be.
console.log(kelime1.indexOf("be", kelime1.indexOf("be")+1)); //uzun hali kullanilmaz ama dursun


// *=========================================================
// *   search()
// *=========================================================


const kelime2= "!to be or not to be, that is The questions.";

//! REGEX
console.log(kelime2.search(/[A-Z]/)); //28 //Adan Zye büyük harf var mi var sa bana indexini döndür demek. 
console.log(kelime2.charAt(kelime2.search(/[A-Z]/)).toLowerCase()); // cümlenin icindeki büyük harfi bulup kücülttük. 
console.log(kelime2.search(/[a-z]/)); //1 hepsi kücük oldugu icin ilk kücük harfin indexini verdi
console.log(kelime2.search(/[0-9]/));
console.log(kelime2.search(/[.]/)); //44
console.log(kelime2.indexOf(".")); //44
console.log(kelime2.search(/[0-9a-zA-Z]/));  //1 rakam ya da kücük ya da büyük harf varsa indexini döndürür. 
console.log(kelime2.search(/[^a-z]/)); //anin önündeki kücük harf disindakileri döndür.


//* ----------------------------------------------------------
//* startsWith(), endsWith() -- case sensitive
//* ----------------------------------------------------------
const kelime3="Salına salına  sinsice olurum sana!"

console.log(kelime3.startsWith("sa"));//false
console.log(kelime3.startsWith("Sa"));//true
console.log(kelime3.startsWith("salına",7));//true 7. karakterden başla 7 dahil
console.log(kelime3.endsWith("!"));//true
console.log(kelime3.endsWith("salına",13));//true 13. karaktere kadar say 13 dahil değil

//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith) --immutable (degistirmez)
//* ----------------------------------------------------------

let oku ="oku johny gibi saf olma saf olma saf olma";
oku=oku.replace("saf olma", "basarili ol")
console.log(oku);

console.log(oku.replace(/SAF/i, "fakir"));

//SAF/i büyük kücük harfle duyarsiz ol  incase-sensitive
console.log(oku.replace(/Saf olma/gi, "zengin ol"));
 //!gi ile yazılırsa tüm saf olma (büyük küçük harfe duyarsız) kelimelerini değiştirir, aksi takdirde ilk bulduğunu
//  baska bir metod;

//**********replace all */

let degistir ="Oku Johny gibi saf olma saf olma SAF olma";
console.log(degistir.replaceAll("saf olma", "akilli ol"));  // büyük harfi secemedi


//* ----------------------------------------------------------
//*  slice(beginIndex, endIndex)
//*  substring(beginIndex, endIndex)
//* ----------------------------------------------------------

const veysel="UZUN İNCE BİR YOLDAYIM YÜRÜYORUM GUNDUZ GECE";

console.log(veysel.slice(10)); //BİR YOLDAYIM YÜRÜYORUM GUNDUZ GECE
console.log(veysel.slice(17,21)); // DAYI 21 dahil degil
console.log(veysel.substring(17, 21)); // DAYI arti numaralarda farki yoktur 

console.log(veysel.slice(-10)); // UNDUZ GECE sondan saymaya -1 ile baslanir

console.log(veysel.slice(-11, -6)); //GUNDU
console.log(veysel.slice(16, -6)); //LDAYIM YÜRÜYORUM GUNDU

//! substring metodunda - index calismaz
console.log(veysel.substring(-10));
console.log(veysel.substring(veysel.length-3));  // son üc karakteri aldik

//* ----------------------------------------------------------
//* split= string i diziye çevirir
//* split(seperator , limit ) =>ikisi de optional
// //* split("x")=>x lerden ayırır, virgül+boşluk yapar ve yeni dizi döndürür.orjinal diziyi değiştirmez
//* ----------------------------------------------------------

const tarkan= "Gel gündüzle gece olalim"

console.log(tarkan.split()); // elemani array'e cevirir.
console.log(tarkan.split(" "));//boşluklardan ayır
console.log(tarkan.split(""));//hiçliklerden ayır
console.log(tarkan.split("e"));//e ler iptal, yerine virgül ve boşluk koyar
console.log(tarkan.split("e",3));// dizinin 3 elemanını al
console.log(tarkan.split("",3));
console.log(tarkan);

//* ----------------------------------------------------------
//*  trim();
//* ----------------------------------------------------------

const ramazan="             Hos geldin ya Sehr i Ramazan                "
console.log(ramazan);
console.log(ramazan.length);

console.log(ramazan.trim());  //bas ve sonraki bosluklari kaldirdi. 
console.log(ramazan.trim().length);