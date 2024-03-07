document.addEventListener(()=>{
    const number = document.querySelectorAll(".num");
    const bt = document.querySelector("button")

    bt.addEventListener("click", () => {
        
        
        numlist = []
        for ( i = 1; i<=5; i++){
            n =  Math.floor(Math.random()*45)+1;
            if(numlist.indexOf(n) === -1){
                numlist.push(n);
            }else{
                i--
            }
        }

        numlist.sort(function(a,b){
            return a-b;
        })


        


});