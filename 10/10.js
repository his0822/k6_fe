document.addEventListener("DOMContentLoaded", () =>{
    const numtxt = document.querySelector("#numDisp");
    const bt = document.querySelector("button");

    let num = [];

    bt.addEventListener("click", ()=>{
        
        num.length = 0;
        while(num.length <6){
            let n = Math.floor(Math.random()*45)+1;
            if( !num.includes ){
                num.push(n);
            } 
            num.sort(function(a,b){
                return a-b;
            });
        }
        num.push(Math.floor(Math.random()*45)+1);

        tags = num.map((v,i)=>{
            return `<li class="tx${parseInt(v/10)}">${v}</li>`
        });
        tags.splice(6,0,`<li id="txt">+</li>`);

        numtxt.innerHTML = tags.join(" ");

    });
});