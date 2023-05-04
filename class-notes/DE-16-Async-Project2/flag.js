const getirÜlke =async(ülkeName)=>{

    const res= await fetch(`https://restcountries.com/v3.1/name/${ülkeName}`)
    
    const data = await res.json()

    // console.log(data[0]);
 ekranaBastir(data[0])
}

const dizi =["turkey", "usa", "canada", "france"]

dizi.forEach((a)=>getirÜlke(a))
// getirÜlke("Turkey")
// getirÜlke("Germany")
// getirÜlke("Peru")
// getirÜlke("USA")
// getirÜlke("Canada")

const ekranaBastir=(ülke)=>{
    console.log(Object.values(ülke.currencies)); //[{name:...,sembol:....}]
    console.log(Object.values(ülke.currencies)[0]); //{name:...,sembol:....}
    console.log(Object.values(ülke.currencies)[0].name);//turkish liras
  
    // console.log(Object.values(ülke.languages));

    document.querySelector(".countries").innerHTML += `
    <div class="card text-start w-50 shadow-lg bg-light">
      <img src=${ülke.flags.svg}  class="card-img-top" alt="..." />
      <div class="card-body">
         <h5 class="card-title">${ülke.name.common} </h5>
         <p class="card-text"></p>
      </div>
      
      <ul class="list-group list-group-flush">
         <li class="list-group-item"><i class="fas fa-lg fa-landmark"></i> ${ülke.capital}  </li>


          <li class="list-group-item"><i class="fas fa-lg fa-comments"></i>${Object.values(ülke.languages)} </li>
          
          <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"></i> ${Object.values(ülke.currencies)[0].name} </li>

      </ul>
   </div>

    `


}