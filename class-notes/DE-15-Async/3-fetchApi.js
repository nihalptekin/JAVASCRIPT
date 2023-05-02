//* ===========================================================
//*                          3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamiza ve cevaplari yonetebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

//? json() verileri süslü parantezli haline cevirmek icin

// fetch("https://api.github.com/users").then((res)=>res.json()).then((veri)=>console.log(veri))

const veriGetir = () => {
  fetch("https://api.github.com/users")
    .then((res) => {
      if (!res.ok) {
        //ünlem res.ok==false demenin kisa yolu

        throw new Error("url'de hata var");
        console.log("hata"); //throw ile kendi errorumuzu firlatirsak hata oldugunda kod burada durur. Hatta bu yüzden if'ten sonra else yazmamiza gerek yok.
      }

      return res.json(); //süslünün disinda oldugu icin return olmadan okuyamaz bu yüzden return yazdik.
    })
    .then((veri) => ekranaBastir(veri));
};
document.querySelector("button").onclick = () => {
  veriGetir();
};
 
const ekranaBastir = (veri) => {
  veri.forEach((eleman) => {
    document.querySelector("section").innerHTML += `
          
          <h1 class="mt-4"> NAME:  <span class="text-danger">${eleman.login}</span>  </h1>
          <img src=${eleman.avatar_url} width="50%"/>
          <h3>NOD-ID: ${eleman.nod_id}</h3>
          
          `;
  });
};
