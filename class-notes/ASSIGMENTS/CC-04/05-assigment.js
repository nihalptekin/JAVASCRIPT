// const buton= document.getElementById("btn")

// buton.style.width="200px";
// buton.style.height="80px";
// buton.style.fontSize="40px"
// buton.style.color="yellow";
// buton.style.backgroundColor="red"

// //*example3 (img style)

// const resim= document.getElementsByTagName("img")
// console.log(resim);//HTMLCollection

// resim[0].style.width="300px"
// resim[1].style.border="5px solid red"

// baslik[0].style.color="red"

const baslik = document.querySelector(".H1");

baslik.style.textAlign="center"
baslik.style.color="red"

const telefon = document.querySelector(".telefon");
const aslan1 = document.querySelector(".aslan1");
const aslan2 = document.querySelector(".aslan2");

telefon.onclick = () => {
aslan1.src="./img/aslan1.jpeg"
aslan1.ondblclick=()=>{
aslan2.src = "./img/aslan2.jpeg";
}
}

//     //   ikinci.src = "./img/logo2.png";
//   };
// };

// function changeImage(x, image) 
//    {
//     if (x==1); 
//     { image.src="./img/aslan1.jpeg"
//    }
//    if(x==2); 
//     {
//     image.src="./img/aslan2.jpeg"
//         }
//     }




// //     telefon.src="./img/img2.jpg"
// //     aslan1.src = "./img/aslan1.jpeg";
// //       aslan1.ondblclick = () => {
// //         aslan2.src = "./img/aslan2.jpeg";


// //     };
// // }
