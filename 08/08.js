document.addEventListener("DOMContentLoaded", () => {
  //DOM 생성 후에 img, input, button 가져오기

  const upDownImg = document.querySelector("img");
  const numInput = document.getElementById("num");
  const bt = document.querySelector("button");
  const msg = document.querySelector("#msg")




  //랜덤수 생성 변수
  let n;
  let flag = false;

  //버튼의 클릭이벤트 달기

  numInput.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
      bt.click();
    }
  });  
  bt.addEventListener("click", (e) => {
    e.preventDefault();
    //랜덤수 생성
    // if(flag === false)
      if(!flag){ //위의 주석코드와 의미가 동일함
      n =  Math.floor(Math.random()*100)+1;  //1에서 100까지 난수 생성
      console.log("n= ", n);
      flag = true;
      
      bt.innerHTML = "확인";
      numInput.style.display = "inline";
      numInput.value = "";
      numInput.focus();
      upDownImg.setAttribute("src", "../08/08img/start.png");

    }
    // input 박스 내용 가져오기
    if(numInput.value == ""){
      document.querySelector("#msg").innerHTML = "<span>숫자를 입력하세요.</span>";
      numInput.focus();
      return;
    }

    if(numInput.value < 1 || numInput > 100){
      document.querySelector("#msg").innerHTML = "<span>1~100 사이 숫자를 입력하세요.</span>";
      numInput.focus();
      return;
    }

    //숫자비교
    msg.innerHTML = "" ;
    if (n === parseInt(numInput.value)) {
      upDownImg.setAttribute("src", "../08/08img/good.png") ;
      numInput.style.display = "none";
      bt.innerHTML = "재시작";
      flag = false;

    }
    else if ( n > numInput.value) {
      upDownImg.setAttribute("src", "../08/08img/up.png") ;
      numInput.value = "";
    }
    else {
      upDownImg.setAttribute("src", "../08/08img/down.png") ;
      numInput.value = "";
    }

  });

});



