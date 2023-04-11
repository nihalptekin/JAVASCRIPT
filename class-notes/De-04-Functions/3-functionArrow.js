// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.

//*Ornek1 3 ün katı mı diye kontrol etme
//************************************ */

const katMi=(sayi)=>sayi%3==0 ? "3 ün katidir" : "3 ün kati degildir"

console.log(katMi(25))

 //* Örnek2:Menu fonksiyon
  // ! ok(arrow) fonksiyonunda birden fazla ifade varsa, fonksiyonda süslü parantez kullanmalıyız
//****************************

const menu=()=>{
    console.log("===========================");
    console.log("     JAVASCRİPT DERSİ      ");
    console.log("===========================");
    
    }
    
     menu();

     //************* */ Örnek3 yas hesaplama

    //  new Date() ile suanin tarihini aliriz. Bu tarihte günü saati yili cagirabiliriz. Örnegin yil icin new Date().getFullYear() yazarsak güncel seneyi getirir. 

     const yasHesaplama=(yil)=> new Date().getFullYear()-yil
     
     console.log(yasHesaplama(1979))

    //  const yasHesaplama=(yil)=>2023-yil
     
    //  console.log(yasHesaplama(1979))

     //************* */ Örnek4 silindirin hacmini hesaplama

     const hacimHesapla=(r,h)=> Math.PI*r**2*h
     
     console.log(hacimHesapla(4,5).toFixed(3));

    //  sayinin sonuna eger .toFixed(3) yazarsak virgülden sonra 3 sayi yazsin demek. Parantez icine ne yazarsak o kadar sayi olur
// toFixed(a)=virgüllü bir sayıda, virgülden sonra istediğimiz adette (a) rakam görmemizi sağlar
     //* ORNEK5: Girilen n. terimdeki  Fibonacci sayisını  yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...


const fibonacciNumber=(n)=>{
let fiboSol=1;
let fiboSag=1;
let yeniFibo=0;
for(let i=1; i<n-1; i++){
yeniFibo=fiboSol+fiboSag;
fiboSol=fiboSag
fiboSag=yeniFibo
}


return fiboSag
}

console.log(fibonacciNumber(7));


//* ORNEK5: Girilen n. terimdeki  Fibonacci sayisını ve o numaraya kadarki tüm sayilarin toplamini yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, 34, ...

const fibonacciNumber = (n) => {
    let fiboSol = 1;
    let fiboSag = 1;
    let yeniFibo = 0;
    let toplam = 2;
  
    for (let i = 1; i < n - 1; i++) {
      yeniFibo = fiboSol + fiboSag;
  
      fiboSol = fiboSag;
  
      fiboSag = yeniFibo;
      toplam += fiboSag;
    }
  
    return ` fiboSag: ${fiboSag} toplam: ${toplam}`;
  };
  
  alert(fibonacciNumber(8));