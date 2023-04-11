// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.
//* Örnek1:tek-çift kontrolü
//**********************************************************/
console.log("******** 2- EXPRESSION*******");

// önce fonksiyon olusturulur (sart) fonksiyon variable adi ile olusturulur. 

const tekCift=function(sayi){

    sayi % 2 == 0 ? "cifttir" : "tektir"


}

alert(tekCift(15))

//* Örnek1:en büyük sayiyi bul
//**********************************************************/

let buyukBul=function(x,y,z) {
    let enBuyuk;
    if(x>y && x>y){
        enBuyuk=x
    }else if(y>x && y>z){
        enBuyuk=y
    }else{
        enBuyuk=z
    }
return enBuyuk
}

alert(buyukBul(3,5,9))

//* Örnek3: bir fonksiyon içerisinde başka bir fonksiyon çağırılabilir
//**********************************************************/


const usAl=function(s1, s2){
return s1**s2
}

const cevreBul=function(s1, s2){
return (s1+s2)*2
}

const alanBul=function(s1,s2) {
return s1*s2
}

const hesapla=function(secim, v1, v2){
if(secim=="alan"){
   sonuc= alanBul(v1,v2)
}
else if(secim=="cevre"){
    sonuc= cevreBul(v1,v2)
}
else if(secim=="üs"){
    sonuc= usAl(v1,v2)
}
return sonuc
}

console.log("alanin sonucu:", hesapla("alan", 3, 5))
console.log("cevrenin sonucu:",hesapla("cevre", 3, 5))
console.log("üssün sonucu:",hesapla("üs", 3, 5))