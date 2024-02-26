// document.addEventListener("DOMContentLoaded", ()=>{
//     const bts = document.querySelectorAll("img");

//     bts.forEach((item) => {
//         console.log("item")
//     });
    

// });


const handleClick = () => {
    
    const bts = document.querySelectorAll(".c1");
    const btsNum = [1,1,1];

//for of -> 파이썬의 for in
// for(let bt of bts){
//     const n = Math.floor(Math.random()*6)+1;
//     bt.setAttribute("src", `../05/img/${n}.png`);
// }

for (let [idx,bt] of bts.entries()){
    const n = Math.floor(Math.random()*6)+1;
    bt.setAttribute("src", `../05/img/${n}.png`);
    btsNum[idx] = n ;

    console.log(btsNum);
}


//기본 for
// for( let i = 0 ; i < bts.length ; i++){
//     const n = Math.floor(Math.random()*6)+1;
//     bts[i].setAttribute("src", `../05/img/${n}.png`);
// }



//for in 구문
// for(let i in bts){
//     const n = Math.floor(Math.random()*6)+1;
//     bts[i].setAttribute("src", `../05/img/${n}.png`);
    
//     console.log("for in i = ", i);
// }


    
    // bts.forEach((bt) => {
    //     const n = Math.floor(Math.random()*6)+1;
        
    //     bt.setAttribute("src", `../05/img/${n}.png`);
        
    //     console.log("click", n)
    // });
      
}