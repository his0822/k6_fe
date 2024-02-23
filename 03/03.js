/* 함수작성 1*/
/*
function handleClick(n) {
    // 메세지 영역 가져오기1
    // document.getElementById("msgAria").innerHTML = "안녕하세요";

    // 메세지 영역 가져오기2
    // document.querySelector("#msgAria").innerHTML = "<h2>버튼" + n + "이 눌러졌습니다.</h2>";

    document.querySelector("#msgAria").innerHTML = `<h2>버튼 ${n} 이 눌러졌습니다.</h2>`;
}
*/
/*함수작성 2*/
const handleClick = (n) => {
    let msg ;
    if (n == 1) msg = "<h2>Hi</h2>";
    else if(n == 2) msg = "<h2>Bye</h2>";
    else msg = `버튼${n} 클릭`;
    // document.querySelector("#msgAria").innerHTML = `<h2>버튼 ${n} 이 눌러졌습니다.</h2>`;
    
    document.querySelector("#msgAria").style.height = "auto";
   
    document.querySelector("#msgAria").innerHTML = msg;
   
}

// Dom tree 가 완성된 후 실행
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded ok")
    
    //버튼생성
    const bt3 = document.createElement("button");
    const bt3TxT = document.createTextNode("버튼3");

    bt3.setAttribute("id","bt3");
    bt3.appendChild(bt3TxT);

    const bt4 = document.createElement("button");
    const bt4TxT = document.createTextNode("버튼4");
    bt4.appendChild(bt4TxT);

    const bt5 = document.createElement("button"); // 새로 추가한 버튼5
    const bt5TxT = document.createTextNode("초기화");
    bt5.appendChild(bt5TxT);

    //버튼 추가하기
    document.querySelector("#btAria2").append(bt3);
    document.querySelector("#btAria2").append(bt4);
    document.querySelector("#btAria2").append(bt5); // 버튼5를 추가

    //버튼 이벤트 작용
    bt3.addEventListener("click", ()=>{
        handleClick(3);
    });
    bt4.addEventListener("click", ()=>{
        handleClick(4);
    });

    bt5.addEventListener("click", () => { // 버튼5를 누를 때 초기 상태로 되돌리기
        document.querySelector("#msgAria").style.height = "auto";
        document.querySelector("#msgAria").innerHTML = "메세지영역";
    });

});

