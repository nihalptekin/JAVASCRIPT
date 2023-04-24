document.querySelector("h1").style.color="red";
document.querySelector("h1").style.textAlign="center";
let resim=document.querySelector(".resim")

let ses1=document.querySelector(".ses1");
let ses2=document.querySelector(".ses2");

//! ara butonu tiklandiginda

document.querySelector(".ara").onclick=()=>{

    resim.src="./img/img.gif";

    //play komutu html'deki audio etiketini js'de calistirir. 
    ses1.play()
    // sesin vaolume'ünü 0 ile 1 arasinda deger vererek ayarlayabilirsiniz. 
    ses1.volume=0.1
}

//! baglat butonu tiklandiginda

document.querySelector(".baglat").onclick=()=>{

    resim.src="./img/telbağla.gif"
    //pause() komutuyla calanb audio sesini durdurabilirsiniz

    ses1.pause()
    // ya da audio.currentTime=0 basa dönmesi icin
}

//! konus butonu tiklandiginda

document.querySelector(".konus").onclick=()=>{

    resim.src="./img/telefon.gif"
    ses1.pause();
}

//! mouse ile resim üyerine gelirse

// resim.onmouseover=()=>{}

resim.addEventListener("mouseover", ()=>{
    resim.src="./img/aslan1.jpeg"
    
})

// mouse ile resmin üyzerinden ayrilinca

resim.addEventListener("mouseout", () => {
    resim.src="./img/aslan2.jpeg"
})


//!klavyeden inputa veri girişi yapılırken elimizi tuştan çektiğimizde varolan değişiklik

const textInput= document.querySelector(".textbox")
const checkInput= document.querySelector(".checkbox")

//? onkeyup (klavyeden - tustan elini cektiginde)

textInput.onkeyup=()=>{

    if(checkInput.checked) {
        textInput.value=textInput.value.toUpperCase();
    }
else{textInput.value=textInput.value.toLowerCase();}
    // if(checkInput.checked==true)  default olarak true oldugu icin ==true yazmadik. 
}
//* checked=metodu checkbox inputun tikli olup olmadığını kontrol eder. tıklanmışsa true döndürür

//*inputa veri girisi yaptigimuzda kücük input tikliyse benim büyük inputa girdigim harfleri büyüt, aksi durumda kücült. 

//! listemin basina "programlama dilleri" yazan h1 etiketi eklemek

//? html'de h1 elemani olusturalim:
const baslik=document.createElement("h1");
{/* <h1></h1> */}


//? baslik2 class name'i atayalim:
baslik.className="baslik2";
// class="baslik2"


//? Programlama dilleri seklinde text olsuturalim:
const yazi=document.createTextNode("Programlama Dilleri")



//? h1 elementi icin olsuturdugum texti h1'e child yapalim:
baslik.appendChild(yazi)
{/* <h1 class="baslik2">Programlama Dilleri</h1> */}

//? h1'e yer belirtelim input div'in atina ekleyelim suan kirmizi borderin disinda kaldi:
document.querySelector(".input-div").after(baslik)

document.querySelector(".baslik2").style.color="red"



//! **************kisayol*************


const bolum=document.querySelector("section")

bolum.innerHTML=`<h1 class="baslik2 text-center" >Programlama Dilleri</h1>` + bolum.innerHTML

//! languages inputuna girilen degerleri, ul'ye eklemek 

// ! uzun yol
const dil = document.querySelector(".languages")
//* yeni girilen satiri saklamak icin bir li olusturduk.

const yeniLi= document.createElement("li")

  //* yeni li icin textnode olusturduk
//   document.createTextNode(dil.value)
  
  //*olusturdugumuz texnode'u yeni li'ye bagladik.

//   yeniLi.appendChild(text)

  //* yeni eklenen satiri var olan listeye (ul) baglayalim.

  const liste=document.querySelector(".liste")

//   liste.appendChild(yeniLi) böyle yazinca otomatik liste noktasi geliyor bunu istekedigimiz icin asagidakini yaziyoruz

document.querySelector(".ekle").onclick=()=>{

    //?kisayol
    liste.innerHTML=liste.innerHTML + `<li> ${dil.value} <li>`

    // liste.innerHTML+= `<li> ${dil.value} <li>`

    dil.value=""
}

//! sil butonuna basilinca ul listesinde li elemanini silmek icin removeChild metodunu kullancagiz. 

document.querySelector(".sil").onclick=()=>{

    liste.removeChild(liste.lastElementChild)
    // liste.removeChild(liste.children[2]) cocuklarinda 2.sini sil
    // liste.removeChild(liste.firstElementChild)

}

//! Klavyedeki keyCodelari kullanarak kod yazma

// dil = input

dil.onkeydown=(tus)=>{
    console.log(tus.keyCode);
    //! enter yani 13'e basilinca ekle
if(tus.keyCode === 13){
    document.querySelector(".ekle").click()
}

//!shifte basarken sil

if(tus.keyCode===16){
    document.querySelector(".sil").click()
}
}

//*eventlarda alinan parametreler bize eventla ilgili özellilerin olduju bir nesne döndürür. burada keyCode property'sini kullandik. 
//*keycodelari fonsiyonun icine tus yazip console logda okutursak bircok bilgi cikiyor keyCode da onalardan biri. Ama sadece bir özelliginn calismasini istiyorsak. Fonksiyon adi (burada tus idi).ve veri adi yazariz. tus.keyCode gibi.- o zaman sadece o özelligi gösterir. 