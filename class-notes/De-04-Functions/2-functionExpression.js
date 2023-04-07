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