document.addEventListener("DOMContentLoaded",()=>{
    //case 1//
    // const img1 = document.querySelector('section>div>div:first-child>img');
    // const img2 = document.querySelector('section>div>div:last-child>img');

    //case2//
    const img = document.querySelectorAll("img");
    const button = document.querySelectorAll('section button');
    // const message = document.querySelectorAll('msg');

    for (let bt of button){
        
        bt.addEventListener("click",() =>{
            console.log(bt.innerHTML.slice(-1));
            //slice를 통한 문자 반환 후 parseInt를 이용해서 정수타입으로 한번더 변환
            const n = parseInt(bt.innerHTML.slice(-1)); 
            const nc = Math.floor(Math.random() * 6) + 1;

            //case 1//
            // img1.setAttribute("src", `./img/${nc}.png`);
            // img2.setAttribute("src", `./img/${n}.png`);

            //case2//
            img[0].setAttribute("src", `./img/${nc}.png`);
            img[1].setAttribute("src", `./img/${n}.png`);


            // == 은 값의 동일함만, === 은 type형식의 동일함 까지 판단
            if (n === nc) {
                document.querySelector("#msg").innerHTML = "맞음" ;
              }
              else {
                document.querySelector("#msg").innerHTML = "틀림" ;
              }
        });     
    }   
})
