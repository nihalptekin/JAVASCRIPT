//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================

const car={
    title: "BMW", 
    model:1990,
    engine: 1.6
}


//* Klasik yol //*

console.log(car.title);
console.log(car["model"]);


//* 2. Yol destructruing *//
const{title, model}=car

console.log(title, model);

//*NESTED OBJECT example:

const arabalar = {
    car1: {
      marka: "BMW",
      model: 1990,
      renk: "red",
    },
    car2: {
      marka: "MERCEDES",
      model: 1980,
      renk: "white",
    },
    car3: {
      marka: "AUDI",
      model: 2000,
      renk: "gray",
    },
  };

  console.log(arabalar.car1.marka);
  const{car1, car2, car3}=arabalar
  console.log(car1);
  console.log(car1.marka);

  const{marka,renk}=car1
  console.log(marka);

//! car1 icin marka model ismini kullandik. Bu yüzden car2de yeni isimler verdik. Ilk objeyi olustururken keyleri(marka model keliemlerini) farkli verbilirdik. Bu sayede yeni isim vermekle ugrasmazdik ama bu kez de for in ile dönerken her bir markayi yazdir diyemezdik. Cünkü car2'nin icinde mesela marka2 yaziyor olacagindan onu taniyamazdi. 

  const{marka:marka2,renk:renk2}=car2
  console.log(marka2);

  //* object-object gezinme *///

for (let i in arabalar){
    console.log(arabalar[i].marka);
}

//* ornek: Array-Object gezinme-DEST
const people = [
    {
      name: "Mustafa",
      surname: "Gertrud",
      job: "developer",
      age: 30,
    },
    {
      name: "Halo",
      surname: "Müller",
      job: "tester",
      age: 35,
    },
    {
      name: "Mehmet",
      surname: "Rosenberg",
      job: "team lead",
      age: 40,
    },
    {
      name: "Ozkul",
      surname: "Gutenberg",
      job: "developer",
      age: 26,
    },
  
    {
      name: "Baser",
      surname: "Shaffer",
      job: "tester",
      age: 24,
    },
  ];
  
  people.forEach((kisi)=>{



    // console.log(kisi.name);
    // console.log(kisi.surname);
    // console.log(kisi.job);
    // console.log(kisi.age);


const{name, surname, job, age}=kisi

console.log(name);
console.log(surname);
console.log(job);
console.log(age);


  })
  
  //? fonksiyonlar object parametreleri desrtucturing yapabilir. 
  const kontrol=(veri)=>{
// console.log(veri);
// console.log(veri.adi);
// console.log(veri.renk);
const{adi, renk, yildiz}=veri
console.log(adi);

  }
  const data = {adi:"GS", renk:"sari-kirmizi", yildiz:4}
  kontrol(data)
  
  //******* */
  const kontrol2=({adi, renk, yildiz})=>{

    console.log(adi);
    
      }
      const data2 = {adi:"FB", renk:"sari-lacivert", yildiz:3}
      kontrol(data2)

      //*======================================================
//*   NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* ======================================================

//? ------------------------------------------------------
//?  REST =>>[...name]=diziden (ya da object den) alınmayan, geri kalanları yeni bir (diziyse) diziye,(object se)object e atıyor
//? ------------------------------------------------------

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//*REST OBJECT***************************************

const personel={
    pName:"Jonny",
    surname:"DEEP",
    job:"actor",
    age:55
}

const{pName, ...gerisi}=personel
console.log(pName);
console.log(personel.job);
console.log(gerisi);
console.log(gerisi.job, personel.job);

//* OBJECT KOPYA 
//? Orijinal dizi ile ayni sartlarda bir kopya olsuturdum. 
const ikizPersonel= personel;


//? orijinal diziden farkli bir kopya olsuturduk. 

const{...personel2}=personel;
console.log(personel2);

 //*** orjinal diziden farklı bir kopya oluşturduğumuz için, bu kopyaya yapılan değişiklik orjinal diziyi bozmaz*/ */

personel2.age=45;
// console.log(personel);
// console.log(ikizPersonel);
// console.log(personel2);

//***** orjinal diziyle aynı şartlarda bir kopya oluşturduk, bu yüzden kopyada yapılan değişiklik orjinal diziyi de etkiledi */
ikizPersonel.age=100;
console.log(personel);
console.log(ikizPersonel);
console.log(personel2);

//** ARRAY KOPYA (REST) */
const autos=["anadol", "renault", "tofas", "ferrari"]

const [ilk, ikinci, ...geriKalan]=autos

console.log(ilk, ikinci);
console.log(geriKalan);

const number=[10, 20, 30, 40]
const ikizNumber=number
const[...number2]=number

number2.push(999)

console.log(number);
console.log(ikizNumber);
console.log(number2);

console.log("***************************");

ikizNumber.unshift(222)
number.push(555)

console.log(number);
console.log(ikizNumber);
console.log(number2);

//! 2- bir fonksiyonun argumentlerini diziye cevirmek icin kullanilabilir. 
//* sikayet etmez ama ilk yollanan 2 argüment degerini hesaplar, cünk+ iki adet karsilayan var
const sum=(x,y)=>x+y
console.log(sum(1,2,3,4,5,6));

//**** dogru cözüm */

const sum2=(...x)=>{console.log(x);
console.log(x.reduce((toplam, a) => toplam +a,0));
}

sum2(1,2,3,4,5,6)

//** örnek 2 */

const show=(name, surname, ...title)=>{

    console.log(title);
    console.log(name);
    console.log(surname);

    console.log(`${name} ${surname} is a ${title.join(" and ")}`);

}

show("özlem", "kara", "developer", "mom", "chemistry", "teacher")
  

//? ------------------------------------------------------
//?  SPREAD==>> parçala (yapısını boz)-> istenilen diziye ekle,içinde gezin vs
//? ------------------------------------------------------


const zeug =["Aircraft", "Helicopter", "Bicycle"]
const otomobiles=["Trucks", "Bus", "Car", "SUV"]

console.log([zeug.otomobiles]);
console.log([zeug.concat(otomobiles)]);

console.log([...zeug, "otobus", ...otomobiles, "tir"]);

// üc nokta diziyi kirdi icindeki elemanlari yazdirdi
const personel3={
    pName:"Jonny",
    surname:"DEEP",
    job:"actor",
    age:55
}

// const yeni={ pName:personel3.pName, surname:personel3.surname, age:personel3.age,job:"father"}
const yeni={ ...personel3, job:"father",location:"usa"}

console.log(yeni);

//!diğer file daki örneği spread ile çözeceğiz
//* Ornek4 people (object li ) dizisinden yaşları değişmiş olarak yeni bir object li dizi oluşturalım
const insanlar = [
    {
      name: "Mustafa",
      surname: "Gertrud",
      job: "developer",
      age: 30,
    },
    {
      name: "Halo",
      surname: "Müller",
      job: "tester",
      age: 35,
    },
    {
      name: "Mehmet",
      surname: "Rosenberg",
      job: "team lead",
      age: 40,
    },
    {
      name: "Ozkul",
      surname: "Gutenberg",
      job: "developer",
      age: 26,
    },
  
    {
      name: "Baser",
      surname: "Shaffer",
      job: "tester",
      age: 24,
    },
  ];
  
  const yeniPeople = insanlar.map((kisi) => ({
    name1: kisi.name,
    surname1: kisi.surname,
    job1: kisi.job,
    age1: kisi.age + 5,
  }));

  insanlar.map((kisi)=>({
 ...kisi,age:kisi.age+5
  })
  )
  
  
  
  
  
  
  
  