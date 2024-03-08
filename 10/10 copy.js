document.addEventListener("DOMContentLoaded", () => {
  const numDisp = document.querySelector("#numDisp");
  const bt = document.querySelector("button");

 let numlist = []; 

  bt.addEventListener("click", () => {
    // 1~45까지 랜덤수를 중복되지 않게 7개 만들기
    // 배열 초기화
    numlist.length = 0 ;

    while(numlist.length < 6){

        let n = Math.floor(Math.random() * 45) + 1; 

        if(!numlist.includes(n)){
            numlist.push(n);
        }
        numlist.sort(function (a, b) {
                return a - b;
        });
    }
    numlist.push(Math.floor(Math.random() * 45) + 1);
    console.log("numlist:", numlist)
    // numlist.splice(6, 0, '+');

    // let tags ="";
    // numlist.map((v) =>{
    //     tags = tags + `<li class="tx${parseInt(v/10)}">${v}</li>`;
    //     if (i === 5)
    //         tags = tags + "<li id='txt'>+</li>";
    //    })
    // numDisp.innerHTML = tags;

    // let tags=[]; 초기변수설정 없어도 됨
    tags = numlist.map((v,i) =>{
        return `<li class="tx${parseInt(v/10)}">${v}</li>`
    });
    tags.splice(6, 0, '<li id="txt">+</li>');

    // tags.sort(function (a, b) {
    //     return a - b;
    // )}


    // console.log(tags)

    // let s = tags.join(" ");
    // let s = tags.toString().replaceAll(',','');
    // console.log(s)
    
    numDisp.innerHTML = tags.join(" ");
    


    // console.log(numlist)
    
    // numlist.sort(function (a, b) {
    //   return a - b;
    // });
  });
});
