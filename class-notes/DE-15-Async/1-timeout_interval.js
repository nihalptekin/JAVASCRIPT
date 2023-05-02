//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basariyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Async Programlama
//? kullanilmasi cok onemlidir.

//*Senkron Programlama
//****************************************** */

const bekle=(ms)=>{
    const start=new Date().getTime()
    while(new Date().getTime()<start+ms){

    }
}
console.log("hello");

console.time("time1") //kronometreyi baslat
bekle(3000)  // 3 saniye bekle
console.timeEnd("timer1") //kronometreyi durdur. 

//*Asenkron (setTimeout) 1 seferlik
//******************************** */

//! setTimeout: bir kere yapilmasini istiyorsak kiullaniliriz


setTimeout(()=>{

      console.log("selamunaleyküm");
},2000)   //2000 2 saniye sonra selamun aleyküm yazisi gelsin. Direkt gel,miyor yani.

console.log("aleykümselam");  //burada önce laeykümselam yazilir. Cünkü ona setTimeout ile bekle demedik.

setTimeout(()=>{

    console.log("Naber, napiyorsun?");
},3000) 


//*Asenkron(setInterval, clearInterval) belli aralıklarla durdurulana kadar devam eder. mesela 1 dakikada bir döviz kurunu güncellemek için kullanılabilir
//***************************** */

//?setInterval non-blocking

console.log("sayac basliyor");
let sayac=0
const interval1= setInterval(() => {

    console.log(++sayac);
    if(sayac==5){
        clearInterval(interval1)
    }
    
}, 1000);

console.log("sayac durduruldu");

// //?callback hell  ( bu esiden kullanilan bir yöntemdi.)

setTimeout(() => {
    console.log("ayse:s.a. ahmet");
    setTimeout(() => {
      console.log("ahmet:a.s. ayse nasılsın");
      setTimeout(() => {
        console.log("ayse:iyiyim sağol");
      }, 1000);
    }, 1000);
  }, 1000);




