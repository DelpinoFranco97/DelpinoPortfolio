const btnHambur = document.getElementById("hambur")
const menuresposive = document.getElementById("menuresponsive")
const btnX = document.getElementById("x")

btnX.addEventListener("click",()=>{
    const estado = window.getComputedStyle(menuresposive).display;

     if (estado !== "none"){
        btnX.style.display = "none";
        menuresposive.style.display = "none"
        btnHambur.style.display = "block";

     }
       
    //  else{
    //     menuresposive.style.display = "none"
    //     btnHambur.style.display = "block";
    //     btnX.style.display = "display";

        
    //  }

})
btnHambur.addEventListener("click",()=>{
    const estado = window.getComputedStyle(menuresposive).display;
    if(estado === "none")
        {
           
            menuresposive.style.display = "block";
            menuresposive.style.width = "100%";
            btnHambur.style.display = "none";
            btnX.style.display = "block"
            // menuresposive.style.display = "none";
        }



    // else 
    //     {
    //         menuresposive.style.display = "none"
    //         btnHambur.style.display = "none";
            
            

    //         // menuresposive.style.display = "block";
    //         // menuresposive.style.width = "100%";
    
    //     }

    
})