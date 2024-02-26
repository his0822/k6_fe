// document.addEventListener("DOMContentLoaded", ()=>{
//     const bts = document.querySelectorAll("img");

//     bts.forEach((item) => {
//         console.log("item")
//     });
    

// });

const handleClick = () => {
    
    const bts = document.querySelectorAll("img");
    
    bts.forEach((bt) => {
        const n = Math.floor(Math.random()*6)+1;
        
        bt.setAttribute("src", `../05/img/${n}.png`);
        
        console.log("click", n)
    });
    
   
   
}