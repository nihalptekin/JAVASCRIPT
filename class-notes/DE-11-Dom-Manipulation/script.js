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