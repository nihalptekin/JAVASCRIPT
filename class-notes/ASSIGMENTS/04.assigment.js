//? Ödev  fiyatlar dizisinde her bir fiyata %10 zam yapalim-. Foreach kullanilmali ve orijinal dizi degistirlmeli. 

const prices= [100, 20, 50, 89]; 

let toplam = 0; 
prices.forEach((p, i, prices)=> {
prices[i] = Number((prices[i]*1.1).toFixed(2));

});

console.log(prices);

//? fiyati 90'dan büyük olan degeleri konsola bastiriniz

prices.map((p, i, prices) => {
if (p > 90) {
console.log(p);
 }
});

//? 110dan kücük olan degerlere yüzde 10 zam yaptir ve bunlari tek tek konsoal bastirin. 

prices.map((p, i, prices)=> {
if (p < 110) {
prices[i] = prices[i] * 1.1;
console.log(p);
 } 
});

//? maaslar dizisinde 4000'den kücük olanlara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz.

const maaslar = [3000,  5000, 4000, 6000, 6500]
maaslar.map((p, i, maaslar)=> {
    if (p < 4000) {
        const zamliMaaslar= maaslar[i] * 1.5;
    console.log(zamliMaaslar);
     } 
    });

// ? maasi 4000'den büyük olanlari %25 zam yapalim ve sonuclari konsolda yazdiralim. 
maaslar.map((p, i, maaslar)=> {
    if (p >= 4000) {
        const zamliMaaslar2  = maaslar[i] * 1.25;
    console.log(zamliMaaslar2);
     } 
    });

