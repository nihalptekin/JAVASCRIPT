// ? pc'ye 1 ile 20 arasinda sayi tutturduk.
let rastgeleSayi = Math.ceil(Math.random()*20);

console.log(rastgeleSayi);


let mesaj= document.querySelector(".msg")


let skor = 10; 
//skor'u  index.html'deki skoru buraya çekerek de yapabiliriz ama çok kullanacağımız için bu daha tercih edilen bir yol.
//?-----------localStorage de topScore adıyla bir degisken varsa onu  getir yoksa 0 olsun
let enYuksekSkor = localStorage.getItem("topScore") || 0
//?----browser da, DOM da top-score değerini localStoroge den okuyarak güncelle, özellikle 2. 3. oyuncular için gerekli
document.querySelector(".top-score").textContent = enYuksekSkor;







//? her check butonuna basilinca yapilacaklar

document.querySelector(".check").addEventListener("click", ()=>{


const tahmin = document.querySelector(".guess").value;

//? tahmin girilmeden check'e basildiysa
if(!tahmin){
    mesaj.textContent="Lütfen bir tahmin giriniz"

    //? tahmin dogruysa
}else if(tahmin==rastgeleSayi){
    mesaj.textContent="Tebrikler Bildiniz 🎉 ";
    document.querySelector("body").style.backgroundColor="green";
    document.querySelector(".number").textContent=rastgeleSayi;

    //? topScore kontrolü yap

    if(skor>enYuksekScore){

        localStorage.setItem("topScore", skor);

        enYuksekScore=skor
        document.querySelector(".top-score").textContent=enYuksekScore;
    }


//? tahmin yanlissa
}else{
    //? skor 1'den büyük oldugu sürece tahmin hakkim var. 
    if(skor>1){
skor--
document.querySelector(".score").textContent= skor;
tahmin < rastgeleSayi ? (mesaj.textContent= "Arttir 📈") : (mesaj.textContent="Azalt 📉")

        // arttir azalt


    }else{
        mesaj.textContent="Oyunu kaybettiniz"
        document.querySelector(".score").textContent=0;
        document.querySelector("body").style.backgroundColor="red";
    }
}
})
//? Again butonuna basilinca ayarlar baslangic degerine kurulsun. Arka ekran #2d3436 olsun. 
rastgeleSayi = Math.ceil(Math.random()*20);
document.querySelector(".again").onclick=()=>{
    document.querySelector("body").style.backgroundColor="#2d3436";
skor=10; 
document.querySelector(".score").textContent = skor;

document.querySelector(".number").textContent= "?"

document.querySelector(".guess").value="";
mesaj.textContent="Oyun yeni oyuncu icin basliyor."

}