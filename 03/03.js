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
    document.querySelector("#msgAria").innerHTML = `<h2>버튼 ${n} 이 눌러졌습니다.</h2>`;
}