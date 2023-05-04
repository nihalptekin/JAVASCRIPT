
const submit= document.querySelector("button")
const input=document.querySelector("input")
const ul=document.querySelector(".cities")




// const veriGetir = () => {
//     fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={a7026f163d52a6f3c4ca86420ce204ae}")
//       .then((res) => {
//         if (!res.ok) {
//           //ünlem res.ok==false demenin kisa yolu
  
//           throw new Error("url'de hata var");
//           console.log("hata"); //throw ile kendi errorumuzu firlatirsak hata oldugunda kod burada durur. Hatta bu yüzden if'ten sonra else yazmamiza gerek yok.
//         }
  
//         return res.json(); //süslünün disinda oldugu icin return olmadan okuyamaz bu yüzden return yazdik.
//       })
//       .then((veri) => ekranaBastir(veri));
//   };

  submit.forEach((item)=>item.onclick=()=>{
    veriGetir();
    fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={a7026f163d52a6f3c4ca86420ce204ae}").then((resp)=>resp.json()).then((veri)=>ekranaBastir(veri))
  

    })
   
  const ekranaBastir = (veri) => {
    veri.forEach((eleman) => {
      ul.innerHTML += `
            <li class="cities"> 
            <p class="city-name">${input.eleman.name} ${eleman.sys.country}</p>
            <h1 class="temperature"> ${eleman.main.temp} </h1> ${eleman.weather[0].icon} </li>
            
            `;
    });
  };