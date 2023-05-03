

const tvShows = () => {
    fetch("./tv-shows.json").then((res) => {
        if (!res.ok) {
         throw new Error("url'de hata var");
          console.log("hata");
        }
        return res.json();
      })
      .then((veri) => ekranaBastir(veri));
  };
      tvShows();
  
  const ekranaBastir = (veri) => {
    veri.forEach((eleman) => {
      document.querySelector(".tvShowList").innerHTML += `

      <div class="col-md-3"> 
      <div class="card" >
        <img src=${eleman.show.image.medium} class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${eleman.show.name}</h5> 
           <a class= "btn btn-success"  href=${eleman.show.url}>Detaylar</a>
        </div>
             `;
    });
  };