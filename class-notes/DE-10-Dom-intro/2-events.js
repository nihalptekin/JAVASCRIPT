//* ======================================================
//*                        EVENTS
//* ======================================================

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

//?METHOD-1 (HTML-INLINE)
//?---------------------------------------------------------------

//* alttaki satirlar html'de yazildi
{/* <h1 onmouseover="style.color='blue'" onmouseout="style.color='red'"> JAVASCRİPT TE DOM</h1> */}


//? METHOD-2 (Function calling in HTML)
//?---------------------------------------------------------------
// ! index HTML'deki kod

{/* <h1 class="H5" onmouseover=yesil() onmouseout=kirmizi()> DOM BASİCS</h1> */}

// JAVASICRIPT
const baslik= document.querySelector(".H5");
const yesil=()=>baslik.style.color="green";
const kirmizi=()=>baslik.style.color="red";

//? METHOD-3 (SADECE JAVASCRİPT TE YAZILAN YOL) 1.yol
//?---------------------------------------------------------------

//* example 1

const js = document.querySelector("#js");
const badi = document.querySelector("#badi");

js.onmouseover = () => {
  badi.style.backgroundColor = "pink";
};
js.onmouseout = () => {
  badi.style.backgroundColor = "red";
};
