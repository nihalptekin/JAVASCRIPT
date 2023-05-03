let showList= [] //! bos bir array ac altaki arama olayinda datayi görmek icin gbobale bos bir array actik. fetch ile gelen datayi bu bos arraye attik. 

///! ilk ekrandaki resimelri apiden cekiyoruz ( search meal by name)

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((resp) => resp.json())
  .then((dataa) => {
    console.log(dataa.meals);
    showList=dataa
    ekranaBastir(dataa.meals);
  });

function ekranaBastir(data) {

    //!ekrani temizle hangi dizi gelirse öyle 
    document.querySelector(".food").innerHTML="";
  data.forEach((w) => {
    document.querySelector(".food").innerHTML += `
    <div class="col-md-3 p-4 m-4">
    
    <p>${w.strMeal}</p>
    <img src=${w.strMealThumb} style=width:200px />
    
    </div>   `;
  });
}

//! arama inputunda arama yapma(oninput=kullanici input elemanina her veri girisinde calismaktadir.)

//*(apiden gelen dizideki dtrMeallere bak benim inputa girdigim harfleri iceriyorsa o dizide kalsin.)

document.querySelector("#ara").oninput=(e)=>{
     //? e.target.value=> inputa her veri girişindeki değerleri alabilmek için kullanılır, mesela onclick te sadece e.value kullanılır, çünkü inputla işimiz bitince onclick ile inputtaki veriyi topla git. 

// console.log(e.target.value);
let veri = showList.meals.filter((a)=> a.strMeal.toLowerCase().includes(e.target.value.toLowerCase()));
console.log(veri);

ekranaBastir(veri)
}


//* bayraklara tiklaninca o ülkeye ait yemekler gelsin. Bunun icin querySelectorAll ile bayraklari getirip fonksiyonu öyle kuracagiz. 

document.querySelectorAll(".ülke").forEach((item)=>item.onclick=()=>{
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${item.id}`).then((resp)=>resp.json()).then((veri)=>ekranaBastir(veri.meals))
})
