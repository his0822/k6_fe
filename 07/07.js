// // GPT가 만든 거 , 07.js 파일

// document.addEventListener('DOMContentLoaded', function() {
//     const sel1 = document.getElementById('sel1');
//     const sel2 = document.getElementById('sel2');
//     const txt1 = document.getElementById('txt1');
//     const txt2 = document.getElementById('txt2');

//     // 온도 변환 함수
//     function convertTemperature() {
//         const value = parseFloat(txt1.value);

//         if (isNaN(value)) {
//             txt2.value = '';
//             return;
//         }

//         if (sel1.value === '℃' && sel2.value === '℉') {
//             // 섭씨를 화씨로 변환
//             txt2.value = (value * 9 / 5) + 32;
//         } else if (sel1.value === '℉' && sel2.value === '℃') {
//             // 화씨를 섭씨로 변환
//             txt2.value = (value - 32) * 5 / 9;
//         } else {
//             // 같은 단위일 경우 또는 변환할 수 없는 경우
//             txt2.value = value;
//         }
//     }

//     // 이벤트 리스너 등록
//     txt1.addEventListener('input', convertTemperature);
//     sel1.addEventListener('change', convertTemperature);
//     sel2.addEventListener('change', convertTemperature);
// });

const handleChange = (s1, s2, lb1, lb2, t1, t2) =>{
  if (s1.value === "℃") {
    s2.value = "℉";
    lb1.innerHTML = "℃";
    lb2.innerHTML = "℉";
   } else {
    s2.value = "℃";
    lb1.innerHTML = "℉";
    lb2.innerHTML = "℃";
   }
   t1.value = "";
   t1.focus();
   t2.value = "";
}




document.addEventListener("DOMContentLoaded", () => {
  const sel1 = document.querySelector("#sel1");
  const sel2 = document.querySelector("#sel2");
  const txt1 = document.querySelector("#txt1");
  const txt2 = document.querySelector("#txt2");
  const labels = document.querySelectorAll("label");

  sel1.addEventListener("change", () => {
    handleChange(sel1, sel2, labels[0], labels[1], txt1, txt2);
  });

  sel2.addEventListener("change", () => {
    handleChange(sel2, sel1 , labels[1], labels[0]. txt1. txt2);
  });

  txt1.addEventListener("input", () => {
    console.log(txt1.value);
    if(sel1.value === "℃"){
      txt2.value = ( parseFloat(txt1.value) * 9/5 ) + 32;
    } else{
      txt2.value = ( parseFloat(txt1.value) - 32 ) * (5/9) ;
    }
  });

});

