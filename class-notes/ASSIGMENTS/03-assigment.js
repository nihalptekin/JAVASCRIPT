//? SORU1: Taban ve yükseklik degerlerini parametre olarak alan ve bir ücgenin alanini hesaplayarak ana programa döndüren fonksiyonu yazin. 

function ücgenAlan(x,y) {
    let taban=x
    let yükseklik=y
    let alan=(x*y)/2
    console.log(alan);
}

ücgenAlan(9,10)


//? SORU2: kareAl küpAl üsAl seklinde üc adet farkli arrow fonsiyonu tanimlayin. Bu fonksiyonlarin ana programdan gerekli parametreleri alarak sonuclari ama programa döndürmeniz gerekmektedir. 

const kareAl=(sayi1)=>sayi1**2;
console.log(kareAl(3))

const küpAl=(sayi2)=>sayi2**3; 
console.log(küpAl(3));

const usAl=(s1,s2)=>s1**s2; 
console.log(usAl(4,3));

//? SORU3: Yil degerini parametre olarak alan ve bu yilin artik yil olup olmadigini hesaplayarak sonucu ana programa döndüren fonsiyonu function-expression yöntemi ile yaziniz. NOT: yil dörde tam bölünüyorsa VE (100'e tam bölünmüyorsa VEYA 400'e tam bölünüyorsa) artik yildir aksi takdirde degildir. 

const yilMi=function(yil){
    yil%4==0 && (yil%400==0 || yil%100 != 0) ? sonuc="yildir" : sonuc="yil degildir" ;
return sonuc

}
console.log(yilMi(2021));
console.log(yilMi(2023));
console.log(yilMi(2024));

if(yil%4==0 && (yil%400==0 || yil%100 != 0)) { 
    sonuc = "yildir"
 
} 

else{
    sonuc="yil degildir"
}
return sonuc
